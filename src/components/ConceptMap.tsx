export type ConceptNode = {
  label: string;
  children?: ConceptNode[];
};

function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function wrapLabel(label: string, maxChars: number): string[] {
  if (label.length <= maxChars) return [label];
  const words = label.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 2);
}

function branchColor(i: number, n: number) {
  const hue = Math.round((i / n) * 360);
  return {
    line: `hsl(${hue} 65% 45%)`,
    stroke: `hsl(${hue} 60% 42%)`,
    fill: `hsl(${hue} 70% 50% / 14%)`,
    darkFill: `hsl(${hue} 65% 60% / 18%)`,
  };
}

function NodeBox({
  x,
  y,
  label,
  charWidth,
  maxChars,
  fontSize,
  fontWeight,
  minWidth = 0,
  fill,
  stroke,
  textClassName,
}: {
  x: number;
  y: number;
  label: string;
  charWidth: number;
  maxChars: number;
  fontSize: number;
  fontWeight?: number;
  minWidth?: number;
  fill: string;
  stroke: string;
  textClassName: string;
}) {
  const lines = wrapLabel(label, maxChars);
  const longest = Math.max(...lines.map((l) => l.length));
  const w = Math.max(minWidth, longest * charWidth + 20);
  const lineHeight = fontSize + 5;
  const h = lines.length * lineHeight + 12;

  return (
    <g>
      <rect
        x={x - w / 2}
        y={y - h / 2}
        width={w}
        height={h}
        rx={h / 2.6}
        fill={fill}
        stroke={stroke}
        strokeWidth={1.4}
      />
      <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" className={textClassName} fontSize={fontSize} fontWeight={fontWeight}>
        {lines.map((line, i) => (
          <tspan key={i} x={x} dy={i === 0 ? -((lines.length - 1) * lineHeight) / 2 : lineHeight}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
}

export function ConceptMap({ root }: { root: ConceptNode }) {
  const branches = root.children ?? [];
  const n = branches.length || 1;
  const angleStep = 360 / n;

  const cx = 0;
  const cy = 0;
  const r1 = Math.max(150, 90 + n * 20);
  const r2 = r1 + 150;

  const size = r2 + 140;
  const px = Math.round(size * 2);

  return (
    <div className="w-full overflow-x-auto">
      <svg
        width={px}
        height={px}
        viewBox={`${-size} ${-size} ${size * 2} ${size * 2}`}
        className="mx-auto block"
        style={{ minWidth: px }}
        role="img"
        aria-label={`Mapa conceptual de ${root.label}`}
      >
        {branches.map((branch, i) => {
          const angle = i * angleStep + angleStep / 2;
          const p1 = polar(cx, cy, r1, angle);
          const children = branch.children ?? [];
          const subSpread = Math.min(angleStep * 0.65, 20 + children.length * 10);
          const subStart = angle - subSpread / 2;
          const subStep = children.length > 1 ? subSpread / (children.length - 1) : 0;
          const color = branchColor(i, n);

          return (
            <g key={branch.label}>
              <line x1={cx} y1={cy} x2={p1.x} y2={p1.y} stroke={color.line} strokeWidth={2} />
              {children.map((leaf, j) => {
                const leafAngle = children.length > 1 ? subStart + subStep * j : angle;
                const leafR = children.length > 1 ? r2 + (j % 3) * 62 : r2;
                const p2 = polar(cx, cy, leafR, leafAngle);
                return (
                  <g key={leaf.label}>
                    <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={color.line} strokeWidth={1} strokeOpacity={0.45} />
                    <NodeBox
                      x={p2.x}
                      y={p2.y}
                      label={leaf.label}
                      charWidth={6.6}
                      maxChars={13}
                      fontSize={12.5}
                      fill="var(--color-background)"
                      stroke={color.stroke}
                      textClassName="fill-foreground/85"
                    />
                  </g>
                );
              })}
              <NodeBox
                x={p1.x}
                y={p1.y}
                label={branch.label}
                charWidth={7.4}
                maxChars={16}
                fontSize={14}
                fontWeight={600}
                fill={color.fill}
                stroke={color.stroke}
                textClassName="fill-foreground"
              />
            </g>
          );
        })}

        <NodeBox
          x={cx}
          y={cy}
          label={root.label}
          charWidth={8.4}
          maxChars={18}
          fontSize={16}
          fontWeight={700}
          minWidth={100}
          fill="var(--color-foreground)"
          stroke="var(--color-foreground)"
          textClassName="fill-background"
        />
      </svg>
    </div>
  );
}
