'use client';
import { useEffect, useRef } from 'react';
import { PointLightHelper } from 'three';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';

const Hero = () => {
  const pointLightRef = useRef();
  useEffect(() => {
    if (pointLightRef.current) {
      const helper = new PointLightHelper(pointLightRef, 1);
      pointLightRef.current.add(helper);
    }
  }, []);

  return (
    <section className='h-screen w-full min-h-[560px]'>
      <div className='container mx-auto h-full pl-2 flex flex-col items-start justify-center gap-8'>
        <h1 id='hero_intro' className='text-5xl z-40'>
          My name is <span className=' text-rose-800'>Nathan</span>
        </h1>
        <h5 className='text-2xl z-40'>I am a full-stack developer.</h5>
      </div>
      <div className='fixed right-0 top-0 bottom-[-50px] w-full canvas_bg'>
        <Canvas>
          <Scene />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
