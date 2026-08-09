"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { createNoise3D } from "simplex-noise";
import * as THREE from "three";

type Region = "frontal" | "parietal" | "temporal" | "occipital";

const REGION_COLORS: Record<Region, string> = {
  frontal: "#f0a3ad",
  parietal: "#f5c56f",
  temporal: "#8cc2f0",
  occipital: "#b199e0",
};

const CEREBELLUM_COLOR = "#6fcdaa";
const BRAINSTEM_COLOR = "#c9b79c";

function classifyRegion(nx: number, ny: number, nz: number): Region {
  if (nz > 0.35) return "frontal";
  if (nz < -0.45) return "occipital";
  if (ny > 0.12) return "parietal";
  return "temporal";
}

function groove(value: number, center: number, sharpness: number) {
  return Math.exp(-Math.pow((value - center) * sharpness, 2));
}

// Cisuras principales, ubicadas en los mismos límites que separan los lóbulos por color.
function sulciDepth(nx: number, ny: number, nz: number) {
  // Cisura central: entre el lóbulo frontal y el parietal.
  const centralMask = THREE.MathUtils.smoothstep(ny, -0.15, 0.05);
  const central = groove(nz, 0.35, 9) * 0.09 * centralMask;

  // Cisura parietooccipital: entre el lóbulo parietal y el occipital.
  const parietoOccipitalMask = THREE.MathUtils.smoothstep(ny, -0.1, 0.15);
  const parietoOccipital = groove(nz, -0.45, 9) * 0.08 * parietoOccipitalMask;

  // Cisura lateral (de Silvio): separa el lóbulo temporal de frontal/parietal.
  const lateralXMask = THREE.MathUtils.smoothstep(Math.abs(nx), 0.15, 0.5);
  const lateralZMask =
    THREE.MathUtils.smoothstep(nz, -0.4, -0.1) *
    (1 - THREE.MathUtils.smoothstep(nz, 0.4, 0.6));
  const lateral = groove(ny, 0.1, 7) * 0.1 * lateralXMask * lateralZMask;

  return central + parietoOccipital + lateral;
}

function createCerebrumGeometry() {
  const geometry = new THREE.IcosahedronGeometry(1, 24);
  const noise3D = createNoise3D();
  const position = geometry.attributes.position;
  const vertex = new THREE.Vector3();
  const normalized = new THREE.Vector3();
  const colors = new Float32Array(position.count * 3);
  const color = new THREE.Color();

  for (let i = 0; i < position.count; i++) {
    vertex.fromBufferAttribute(position, i);
    normalized.copy(vertex).normalize();

    // Ruido para simular los pliegues (giros y surcos) de la corteza.
    const wrinkle =
      noise3D(vertex.x * 2.3, vertex.y * 2.3, vertex.z * 2.3) * 0.06 +
      noise3D(vertex.x * 6, vertex.y * 6, vertex.z * 6) * 0.02;

    // Fisura longitudinal: hendidura entre los dos hemisferios.
    const fissure = Math.exp(-Math.pow(vertex.x * 5.5, 2)) * 0.14;

    // Cisuras que marcan los límites entre lóbulos.
    const sulci = sulciDepth(normalized.x, normalized.y, normalized.z);

    // Aplana la base para dejar lugar al cerebelo y el tronco encefálico.
    const baseFlatten = vertex.y < -0.35 ? (vertex.y + 0.35) * 0.4 : 0;

    const scale = 1 + wrinkle - fissure - sulci + baseFlatten;
    vertex.multiplyScalar(scale);

    position.setXYZ(i, vertex.x, vertex.y * 0.82, vertex.z * 1.08);

    const region = classifyRegion(normalized.x, normalized.y, normalized.z);
    color.set(REGION_COLORS[region]);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  geometry.computeVertexNormals();
  return geometry;
}

function createCerebellumGeometry() {
  const geometry = new THREE.IcosahedronGeometry(1, 12);
  const noise3D = createNoise3D();
  const position = geometry.attributes.position;
  const vertex = new THREE.Vector3();

  for (let i = 0; i < position.count; i++) {
    vertex.fromBufferAttribute(position, i);
    // Pliegues más finos y apretados (folia del cerebelo).
    const ridges = noise3D(vertex.x * 9, vertex.y * 9, vertex.z * 9) * 0.05;
    const flattenTop = vertex.y > 0.3 ? (vertex.y - 0.3) * 0.6 : 0;
    const scale = 1 + ridges - flattenTop;
    vertex.multiplyScalar(scale);
    position.setXYZ(i, vertex.x * 1.05, vertex.y * 0.7, vertex.z * 0.85);
  }

  geometry.computeVertexNormals();
  return geometry;
}

type LabelDef = {
  id: string;
  text: string;
  position: [number, number, number];
  color: string;
};

const LABELS: LabelDef[] = [
  { id: "frontal", text: "Lóbulo frontal", position: [0, 0.1, 1.28], color: REGION_COLORS.frontal },
  { id: "parietal", text: "Lóbulo parietal", position: [0, 0.98, -0.1], color: REGION_COLORS.parietal },
  { id: "temporal", text: "Lóbulo temporal", position: [1.15, -0.15, 0.15], color: REGION_COLORS.temporal },
  { id: "occipital", text: "Lóbulo occipital", position: [0, 0.25, -1.22], color: REGION_COLORS.occipital },
  { id: "cerebellum", text: "Cerebelo", position: [0, -0.6, -1.0], color: CEREBELLUM_COLOR },
  { id: "brainstem", text: "Tronco encefálico", position: [0, -1.08, -0.1], color: BRAINSTEM_COLOR },
];

function Label({ label }: { label: LabelDef }) {
  return (
    <Html position={label.position} center zIndexRange={[10, 0]} occlude="blending">
      <div
        className="flex items-center gap-1 whitespace-nowrap rounded-full bg-white/90 px-1.5 py-0.5 text-[9px] font-medium leading-none text-neutral-800 shadow-sm dark:bg-neutral-900/90 dark:text-neutral-100"
        style={{ pointerEvents: "none", userSelect: "none" }}
      >
        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full"
          style={{ backgroundColor: label.color }}
        />
        {label.text}
      </div>
    </Html>
  );
}

function Brain({ showLabels }: { showLabels: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const cerebrumGeometry = useMemo(() => createCerebrumGeometry(), []);
  const cerebellumGeometry = useMemo(() => createCerebellumGeometry(), []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.1, 0, 0.05]}>
      <mesh geometry={cerebrumGeometry}>
        <meshStandardMaterial vertexColors roughness={0.55} metalness={0.05} />
      </mesh>
      <mesh geometry={cerebellumGeometry} position={[0, -0.58, -0.82]} scale={0.42}>
        <meshStandardMaterial color={CEREBELLUM_COLOR} roughness={0.55} metalness={0.05} />
      </mesh>
      <mesh position={[0, -0.95, -0.25]} rotation={[0.35, 0, 0]}>
        <cylinderGeometry args={[0.11, 0.17, 0.55, 16]} />
        <meshStandardMaterial color={BRAINSTEM_COLOR} roughness={0.6} metalness={0.05} />
      </mesh>
      {showLabels && LABELS.map((label) => <Label key={label.id} label={label} />)}
    </group>
  );
}

export function Brain3D() {
  const [showLabels, setShowLabels] = useState(true);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative h-80 w-full overflow-hidden rounded-xl border border-black/10 bg-gradient-to-b from-foreground/5 to-transparent dark:border-white/10">
        <button
          type="button"
          onClick={() => setShowLabels((value) => !value)}
          className="absolute right-3 top-3 z-10 rounded-full border border-black/10 bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800 shadow-sm hover:bg-white dark:border-white/10 dark:bg-neutral-900/90 dark:text-neutral-100 dark:hover:bg-neutral-900"
        >
          {showLabels ? "Ocultar etiquetas" : "Mostrar etiquetas"}
        </button>
        <Canvas camera={{ position: [0, 0, 4.2], fov: 40 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 4, 2]} intensity={1.2} />
          <directionalLight position={[-3, -2, -2]} intensity={0.4} />
          <Brain showLabels={showLabels} />
          <OrbitControls
            enablePan={false}
            minDistance={2.8}
            maxDistance={6.5}
            autoRotate
            autoRotateSpeed={0.6}
          />
        </Canvas>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-foreground/60">
        {LABELS.map((label) => (
          <span key={label.id} className="flex items-center gap-1.5">
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: label.color }}
            />
            {label.text}
          </span>
        ))}
      </div>

      <p className="text-xs text-foreground/50">
        Modelo simplificado con fines ilustrativos, no representa la anatomía con precisión
        médica.
      </p>
    </div>
  );
}
