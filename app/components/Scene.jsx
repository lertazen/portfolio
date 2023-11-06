'use client';
import { Suspense, useEffect, useRef } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import AnimatedBg from './AnimatedBg';
import Light from './Light';
import CustomStars from './CustomStars';

const Scene = () => {
  const camera = useRef();

  const onScroll = () => {
    const scrollTop = document.body.getBoundingClientRect().top;
    console.log(scrollTop);
    camera.current.position.z = 9 + scrollTop * -0.002;
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <ambientLight intensity={2} />
      <Light />
      <AnimatedBg />
      {/* <gridHelper /> */}
      <PerspectiveCamera ref={camera} makeDefault position={[0, 0, 9]} />

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
