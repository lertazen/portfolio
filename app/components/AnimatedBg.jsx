import * as THREE from 'three';
import { useRef } from 'react';
import { MeshReflectorMaterial, Sphere, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const AnimatedBg = () => {
  const sphereOneRef = useRef();
  const sphereTwoRef = useRef();
  const sphereThreeRef = useRef();
  const updatePosition = (ref, axis, value) => {
    ref.current.position[axis] = THREE.MathUtils.lerp(
      ref.current.position[axis],
      value,
      0.1
    );
  };
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    const xValue = (2 * Math.cos(t / 2)) / (Math.sin(t / 2) ** 2 + 1);
    const yValue =
      (2 * Math.cos(t / 2) * Math.sin(t / 2)) / (Math.sin(t / 2) ** 2 + 1);

    updatePosition(sphereOneRef, 'x', xValue);
    updatePosition(sphereOneRef, 'y', yValue + 1);
    updatePosition(sphereOneRef, 'z', xValue);

    updatePosition(sphereTwoRef, 'y', xValue);
    updatePosition(sphereTwoRef, 'z', yValue);
    updatePosition(sphereTwoRef, 'z', xValue - 1);

    updatePosition(sphereThreeRef, 'x', xValue);
    updatePosition(sphereThreeRef, 'y', xValue - 1);
    updatePosition(sphereThreeRef, 'z', yValue);
  });

  const texture1 = useTexture('/texture1.jpg');
  const texture2 = useTexture('/texture2.jpg');
  const texture3 = useTexture('/texture3.jpg');

  return (
    <group>
      <group ref={sphereOneRef} position={[2, 0, 2]}>
        <Sphere args={[0.5, 40, 40]} position={[0, 0, 0]}>
          <meshPhysicalMaterial map={texture1} />
        </Sphere>
      </group>
      <group ref={sphereTwoRef} position={[0, -2, -2]}>
        <Sphere args={[0.5, 40, 40]} position={[0, 0, 0]}>
          <meshPhysicalMaterial map={texture2} />
        </Sphere>
      </group>
      <group ref={sphereThreeRef} position={[2, 2, 0]}>
        <Sphere args={[0.5, 40, 40]} position={[0, 0, 0]}>
          <meshPhysicalMaterial map={texture3} />
        </Sphere>
      </group>
    </group>
  );
};

export default AnimatedBg;
