"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Vector = number[];
type Matrix = number[][];
type Point = { x: Vector; y: number };
type DatasetKind = "circles" | "xor" | "spirals";

const RANGE = 1.15;
const GRID = 48;
const POINTS = 180;

function tanhFn(x: number) {
  return Math.tanh(x);
}
function sigmoidFn(x: number) {
  return 1 / (1 + Math.exp(-x));
}

function randnMatrix(outSize: number, inSize: number, scale: number): Matrix {
  return Array.from({ length: outSize }, () =>
    Array.from({ length: inSize }, () => (Math.random() * 2 - 1) * scale)
  );
}

/** Perceptrón multicapa (2 capas ocultas) escrito a mano, sin librerías de ML. */
class MLP {
  sizes: number[];
  weights: Matrix[];
  biases: Vector[];

  constructor(sizes: number[]) {
    this.sizes = sizes;
    this.weights = [];
    this.biases = [];
    for (let l = 1; l < sizes.length; l++) {
      const scale = Math.sqrt(2 / sizes[l - 1]);
      this.weights.push(randnMatrix(sizes[l], sizes[l - 1], scale));
      this.biases.push(Array(sizes[l]).fill(0));
    }
  }

  private forward(x: Vector): Vector[] {
    const activations: Vector[] = [x];
    let a = x;
    const L = this.weights.length;
    for (let l = 0; l < L; l++) {
      const W = this.weights[l];
      const b = this.biases[l];
      const isOutput = l === L - 1;
      const z: Vector = W.map(
        (row, i) => row.reduce((sum, w, j) => sum + w * a[j], 0) + b[i]
      );
      a = isOutput ? z.map(sigmoidFn) : z.map(tanhFn);
      activations.push(a);
    }
    return activations;
  }

  predict(x: Vector): number {
    const activations = this.forward(x);
    return activations[activations.length - 1][0];
  }

  /** Un paso de descenso por gradiente (batch completo) — devuelve la pérdida promedio. */
  trainStep(dataset: Point[], learningRate: number): number {
    const L = this.weights.length;
    const gradW = this.weights.map((W) => W.map((row) => row.map(() => 0)));
    const gradB = this.biases.map((b) => b.map(() => 0));
    let totalLoss = 0;

    for (const { x, y } of dataset) {
      const activations = this.forward(x);
      const output = activations[L][0];
      const eps = 1e-7;
      totalLoss += -(y * Math.log(output + eps) + (1 - y) * Math.log(1 - output + eps));

      // Para sigmoide + entropía cruzada binaria, dL/dz en la salida se simplifica a (a - y).
      let delta: Vector = [output - y];

      for (let l = L - 1; l >= 0; l--) {
        const aPrev = activations[l];
        const W = this.weights[l];

        for (let i = 0; i < W.length; i++) {
          for (let j = 0; j < aPrev.length; j++) {
            gradW[l][i][j] += delta[i] * aPrev[j];
          }
          gradB[l][i] += delta[i];
        }

        if (l > 0) {
          const nextDelta = new Array(aPrev.length).fill(0);
          for (let j = 0; j < aPrev.length; j++) {
            let sum = 0;
            for (let i = 0; i < W.length; i++) sum += W[i][j] * delta[i];
            nextDelta[j] = sum * (1 - aPrev[j] * aPrev[j]); // derivada de tanh
          }
          delta = nextDelta;
        }
      }
    }

    const n = dataset.length;
    for (let l = 0; l < L; l++) {
      for (let i = 0; i < this.weights[l].length; i++) {
        for (let j = 0; j < this.weights[l][i].length; j++) {
          this.weights[l][i][j] -= learningRate * (gradW[l][i][j] / n);
        }
        this.biases[l][i] -= learningRate * (gradB[l][i] / n);
      }
    }

    return totalLoss / n;
  }
}

function makeDataset(kind: DatasetKind): Point[] {
  const pts: Point[] = [];
  if (kind === "xor") {
    for (let i = 0; i < POINTS; i++) {
      const x0 = Math.random() * 2 - 1;
      const x1 = Math.random() * 2 - 1;
      pts.push({ x: [x0, x1], y: (x0 > 0) !== (x1 > 0) ? 1 : 0 });
    }
  } else if (kind === "circles") {
    for (let i = 0; i < POINTS; i++) {
      const isOuter = i % 2 === 0;
      const r = isOuter ? 0.7 + Math.random() * 0.3 : Math.random() * 0.4;
      const theta = Math.random() * Math.PI * 2;
      const noise = 0.04;
      pts.push({
        x: [
          r * Math.cos(theta) + (Math.random() * 2 - 1) * noise,
          r * Math.sin(theta) + (Math.random() * 2 - 1) * noise,
        ],
        y: isOuter ? 1 : 0,
      });
    }
  } else {
    const perClass = Math.floor(POINTS / 2);
    for (let cls = 0; cls < 2; cls++) {
      for (let i = 0; i < perClass; i++) {
        const t = i / perClass;
        const r = t * 0.9;
        const theta = t * 4 * Math.PI + cls * Math.PI + (Math.random() - 0.5) * 0.3;
        pts.push({ x: [r * Math.cos(theta), r * Math.sin(theta)], y: cls });
      }
    }
  }
  return pts;
}

function toPixel(v: number, size: number) {
  return ((v + RANGE) / (2 * RANGE)) * size;
}

const DATASETS: { key: DatasetKind; label: string }[] = [
  { key: "circles", label: "Círculos" },
  { key: "xor", label: "XOR" },
  { key: "spirals", label: "Espirales" },
];

export function NeuralNetPlayground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mlpRef = useRef<MLP | null>(null);
  const datasetRef = useRef<Point[]>([]);
  const isTrainingRef = useRef(true);
  const frameRef = useRef(0);

  const [dataset, setDataset] = useState<DatasetKind>("circles");
  const [hiddenSize, setHiddenSize] = useState(12);
  const [learningRate, setLearningRate] = useState(0.8);
  const [isTraining, setIsTraining] = useState(true);
  const [stats, setStats] = useState({ epoch: 0, loss: 0, accuracy: 0 });

  const reset = useCallback(() => {
    mlpRef.current = new MLP([2, hiddenSize, hiddenSize, 1]);
    datasetRef.current = makeDataset(dataset);
    setStats({ epoch: 0, loss: 0, accuracy: 0 });
  }, [dataset, hiddenSize]);

  useEffect(() => {
    reset();
  }, [reset]);

  useEffect(() => {
    isTrainingRef.current = isTraining;
  }, [isTraining]);

  useEffect(() => {
    let raf: number;
    let cancelled = false;

    const loop = () => {
      if (cancelled) return;
      const canvas = canvasRef.current;
      const mlp = mlpRef.current;
      const pts = datasetRef.current;

      if (canvas && mlp && pts.length > 0) {
        let loss = 0;
        if (isTrainingRef.current) {
          loss = mlp.trainStep(pts, learningRate);
          frameRef.current += 1;
        }

        const ctx = canvas.getContext("2d");
        if (ctx) {
          const size = canvas.width;
          const cell = size / GRID;
          // Fondo divergente: azul (clase 0) → naranja (clase 1), suavizado para no tapar los puntos.
          const bgClass0 = [219, 234, 254];
          const bgClass1 = [255, 237, 213];
          for (let gx = 0; gx < GRID; gx++) {
            for (let gy = 0; gy < GRID; gy++) {
              const dx = (gx / GRID) * 2 * RANGE - RANGE;
              const dy = (gy / GRID) * 2 * RANGE - RANGE;
              const t = Math.max(0, Math.min(1, mlp.predict([dx, dy])));
              const r = Math.round(bgClass0[0] + (bgClass1[0] - bgClass0[0]) * t);
              const g = Math.round(bgClass0[1] + (bgClass1[1] - bgClass0[1]) * t);
              const b = Math.round(bgClass0[2] + (bgClass1[2] - bgClass0[2]) * t);
              ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
              ctx.fillRect(gx * cell, size - (gy + 1) * cell, cell + 1, cell + 1);
            }
          }

          let correct = 0;
          for (const { x, y } of pts) {
            const p = mlp.predict(x);
            if ((p > 0.5 ? 1 : 0) === y) correct++;
            const px = toPixel(x[0], size);
            const py = size - toPixel(x[1], size);
            ctx.beginPath();
            ctx.arc(px, py, 3.5, 0, Math.PI * 2);
            ctx.fillStyle = y === 1 ? "#c2410c" : "#1d4ed8";
            ctx.fill();
            ctx.lineWidth = 1;
            ctx.strokeStyle = "rgba(255,255,255,0.8)";
            ctx.stroke();
          }

          if (isTrainingRef.current && frameRef.current % 4 === 0) {
            setStats({
              epoch: frameRef.current,
              loss,
              accuracy: correct / pts.length,
            });
          }
        }
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [learningRate]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-1.5">
          {DATASETS.map((d) => (
            <button
              key={d.key}
              type="button"
              onClick={() => setDataset(d.key)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                dataset === d.key
                  ? "bg-foreground text-background"
                  : "bg-foreground/5 text-foreground/70 hover:bg-foreground/10"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setIsTraining((v) => !v)}
            className="rounded-full border border-black/10 bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800 shadow-sm hover:bg-white dark:border-white/10 dark:bg-neutral-900/90 dark:text-neutral-100 dark:hover:bg-neutral-900"
          >
            {isTraining ? "Pausar" : "Entrenar"}
          </button>
          <button
            type="button"
            onClick={reset}
            className="rounded-full border border-black/10 bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800 shadow-sm hover:bg-white dark:border-white/10 dark:bg-neutral-900/90 dark:text-neutral-100 dark:hover:bg-neutral-900"
          >
            Reiniciar
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-xl border border-black/10 bg-gradient-to-b from-foreground/5 to-transparent p-4 dark:border-white/10 sm:flex-row sm:items-start">
        <canvas
          ref={canvasRef}
          width={320}
          height={320}
          className="aspect-square w-full max-w-[320px] rounded-lg border border-black/10 dark:border-white/10"
        />

        <div className="flex w-full flex-col gap-4 text-sm">
          <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs tabular-nums">
            <div className="rounded-lg bg-foreground/5 px-2 py-1.5">
              <div className="text-foreground/50">época</div>
              <div className="font-medium">{stats.epoch}</div>
            </div>
            <div className="rounded-lg bg-foreground/5 px-2 py-1.5">
              <div className="text-foreground/50">pérdida</div>
              <div className="font-medium">{stats.loss.toFixed(3)}</div>
            </div>
            <div className="rounded-lg bg-foreground/5 px-2 py-1.5">
              <div className="text-foreground/50">precisión</div>
              <div className="font-medium">{Math.round(stats.accuracy * 100)}%</div>
            </div>
          </div>

          <label className="flex flex-col gap-1.5">
            <span className="flex justify-between text-xs text-foreground/60">
              <span>Neuronas por capa oculta</span>
              <span className="font-mono">{hiddenSize}</span>
            </span>
            <input
              type="range"
              min={2}
              max={16}
              step={1}
              value={hiddenSize}
              onChange={(e) => setHiddenSize(Number(e.target.value))}
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="flex justify-between text-xs text-foreground/60">
              <span>Tasa de aprendizaje</span>
              <span className="font-mono">{learningRate.toFixed(2)}</span>
            </span>
            <input
              type="range"
              min={0.05}
              max={1.5}
              step={0.05}
              value={learningRate}
              onChange={(e) => setLearningRate(Number(e.target.value))}
            />
          </label>
        </div>
      </div>

      <p className="text-xs text-foreground/50">
        Rojo/naranja = la red predice clase 1, azul = predice clase 0. Los puntos son los datos
        reales; a medida que entrena, el fondo (el "límite de decisión") se va acomodando para
        separarlos. Ningún framework de ML — todo el forward pass y el backprop están escritos a mano.
        Espirales es el desafío difícil: a veces tarda uno o dos minutos, y con mala suerte de
        inicialización puede trabarse — si pasa, tocá "Reiniciar".
      </p>
    </div>
  );
}
