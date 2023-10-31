'use client';
import { useEffect, useRef, Suspense } from 'react';
import { PointLightHelper } from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sparkles, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import AnimatedBg from './AnimatedBg';
import Light from './Light';
import CustomStars from './CustomStars';

const Hero = () => {
  const pointLightRef = useRef();
  useEffect(() => {
    if (pointLightRef.current) {
      const helper = new PointLightHelper(pointLightRef, 1);
      pointLightRef.current.add(helper);
    }
  }, []);

  return (
    <section className='relative h-screen w-full min-h-[560px] pt-20 pb-20'>
      <div className='container mx-auto h-full pl-2 flex flex-col items-start justify-center gap-8'>
        <h1 id='hero_intro' className='text-5xl z-40'>
          My name is <span className=' text-rose-800'>Nathan</span>
        </h1>
        <h5 className='text-2xl z-40'>I am a full-stack developer.</h5>
      </div>
      <div className='absolute right-0 top-20 bottom-20 w-full'>
        <Canvas>
          <ambientLight intensity={2} />
          <Light />
          <AnimatedBg />
          {/* <gridHelper /> */}
          <OrbitControls
            enableRotate={false}
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <CustomStars />
          <Suspense fallback={null}>
            <EffectComposer>
              <Bloom
                intensity={5}
                luminanceThreshhold={0.5}
                lunimanceSmoothing={0.8}
                height={300}
              />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
