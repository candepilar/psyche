"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { createNoise3D } from "simplex-noise";
import * as THREE from "three";

function createBrainGeometry() {
  const geometry = new THREE.IcosahedronGeometry(1, 24);
  const noise3D = createNoise3D();
  const position = geometry.attributes.position;
  const vertex = new THREE.Vector3();
  const colors = new Float32Array(position.count * 3);
  const leftColor = new THREE.Color("#e8a5b0");
  const rightColor = new THREE.Color("#c98ea0");

  for (let i = 0; i < position.count; i++) {
    vertex.fromBufferAttribute(position, i);

    // Ruido para simular los pliegues (giros y surcos) de la corteza.
    const wrinkle =
      noise3D(vertex.x * 2.3, vertex.y * 2.3, vertex.z * 2.3) * 0.06 +
      noise3D(vertex.x * 6, vertex.y * 6, vertex.z * 6) * 0.02;

    // Surco central: hendidura entre los dos hemisferios.
    const fissure = Math.exp(-Math.pow(vertex.x * 5.5, 2)) * 0.14;

    // Aplana la base para sugerir el tronco encefálico.
    const baseFlatten = vertex.y < -0.35 ? (vertex.y + 0.35) * 0.4 : 0;

    const scale = 1 + wrinkle - fissure + baseFlatten;
    vertex.multiplyScalar(scale);

    position.setXYZ(i, vertex.x, vertex.y * 0.82, vertex.z * 1.08);

    const mix = THREE.MathUtils.smoothstep(vertex.x, -0.15, 0.15);
    const color = leftColor.clone().lerp(rightColor, mix);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  geometry.computeVertexNormals();
  return geometry;
}

function Brain() {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => createBrainGeometry(), []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[0.1, 0, 0.05]}>
      <meshStandardMaterial vertexColors roughness={0.55} metalness={0.05} />
    </mesh>
  );
}

export function Brain3D() {
  return (
    <div className="h-80 w-full overflow-hidden rounded-xl border border-black/10 bg-gradient-to-b from-foreground/5 to-transparent dark:border-white/10">
      <Canvas camera={{ position: [0, 0, 3.2], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 4, 2]} intensity={1.2} />
        <directionalLight position={[-3, -2, -2]} intensity={0.4} />
        <Brain />
        <OrbitControls
          enablePan={false}
          minDistance={2}
          maxDistance={5}
          autoRotate
          autoRotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}
