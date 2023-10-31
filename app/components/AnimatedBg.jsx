import * as THREE from 'three';
import { useRef } from 'react';
import { Sphere, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const AnimatedBg = () => {
  const groupOne = useRef();
  const groupTwo = useRef();
  const groupThree = useRef();
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

    updatePosition(groupOne, 'x', xValue);
    updatePosition(groupOne, 'y', yValue + 1);
    updatePosition(groupOne, 'z', xValue);

    updatePosition(groupTwo, 'y', xValue);
    updatePosition(groupTwo, 'z', yValue);
    updatePosition(groupTwo, 'z', xValue - 1);

    updatePosition(groupThree, 'x', xValue);
    updatePosition(groupThree, 'y', xValue - 1);
    updatePosition(groupThree, 'z', yValue);
  });

  const texture1 = useTexture('/texture1.jpg');
  const texture2 = useTexture('/texture2.jpg');
  const texture3 = useTexture('/texture3.jpg');

  const sphereOne = useRef();
  const sphereTwo = useRef();
  const sphereThree = useRef();

  useFrame((state, delta) => {
    sphereOne.current.rotation.y += delta / 2;
    sphereTwo.current.rotation.y += delta / 3;
    sphereThree.current.rotation.y += delta / 4;
  });

  return (
    <group>
      <group ref={groupOne} position={[2, 0, 2]}>
        <Sphere ref={sphereOne} args={[0.5, 40, 40]} position={[0, 0, 0]}>
          <meshPhysicalMaterial map={texture1} />
        </Sphere>
      </group>
      <group ref={groupTwo} position={[0, -2, -2]}>
        <Sphere ref={sphereTwo} args={[0.5, 40, 40]} position={[0, 0, 0]}>
          <meshPhysicalMaterial map={texture2} />
        </Sphere>
      </group>
      <group ref={groupThree} position={[2, 2, 0]}>
        <Sphere ref={sphereThree} args={[0.5, 40, 40]} position={[0, 0, 0]}>
          <meshPhysicalMaterial map={texture3} />
        </Sphere>
      </group>
    </group>
  );
};

export default AnimatedBg;
