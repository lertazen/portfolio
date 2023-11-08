'use client';
import { Suspense, useEffect, useRef, useState } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import AnimatedBg from './AnimatedBg';
import Light from './Light';
import CustomStars from './CustomStars';

const Scene = () => {
  const camera = useRef();
  const [positionZ, setPositionZ] = useState(9);
  const zRef = useRef(positionZ);

  useEffect(() => {
    zRef.current = positionZ;
  }, [positionZ]);

  const onScroll = () => {
    const scrollTop = document.body.getBoundingClientRect().top;
    camera.current.position.z = zRef.current + scrollTop * -0.002;
  };

  const changePositionZ = () => {
    if (window.innerWidth <= 640) {
      setPositionZ(18);
    } else if (window.innerWidth <= 768) {
      setPositionZ(15);
    } else if (window.innerWidth <= 1024) {
      setPositionZ(12);
    } else {
      setPositionZ(9);
    }
  };

  useEffect(() => {
    changePositionZ();
    window.addEventListener('resize', changePositionZ);
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('resize', changePositionZ);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <ambientLight intensity={2} />
      <Light />
      <AnimatedBg />
      {/* <gridHelper /> */}
      <PerspectiveCamera
        ref={camera}
        makeDefault
        position={[0, 0, positionZ]}
      />

      <CustomStars />
      <Suspense fallback={null}>
        <EffectComposer>
          <Bloom
            intensity={4}
            luminanceThreshhold={0.6}
            lunimanceSmoothing={0.4}
          />
        </EffectComposer>
      </Suspense>
    </>
  );
};

export default Scene;
