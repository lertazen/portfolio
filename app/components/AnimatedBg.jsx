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

    const a = 2.5;
    const b = 1.5;

    // Calculate the ellipse positions for each group
    const ellipseX = a * Math.cos(t / 4);
    const ellipseZ = b * Math.sin(t / 4);

    updatePosition(groupOne, 'x', ellipseX);
    updatePosition(groupOne, 'y', ellipseZ);

    updatePosition(groupTwo, 'y', ellipseX);
    updatePosition(groupTwo, 'x', ellipseZ);

    updatePosition(groupThree, 'x', -0.5 * ellipseX);
    updatePosition(groupThree, 'y', ellipseZ);
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
        <Sphere ref={sphereOne} args={[0.4, 40, 40]} position={[0, 0, 0]}>
          <meshPhysicalMaterial map={texture1} />
        </Sphere>
      </group>
      <group ref={groupTwo} position={[0, -2, -2]}>
        <Sphere ref={sphereTwo} args={[0.4, 40, 40]} position={[0, 0, 0]}>
          <meshPhysicalMaterial map={texture2} />
        </Sphere>
      </group>
      <group ref={groupThree} position={[0, 0, 0]}>
        <Sphere ref={sphereThree} args={[0.3, 40, 40]} position={[0, 0, 0]}>
          <meshPhysicalMaterial map={texture3} />
        </Sphere>
      </group>
    </group>
  );
};

export default AnimatedBg;
