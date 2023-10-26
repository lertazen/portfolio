'use client';
import { useEffect, useRef } from 'react';
import { PointLightHelper } from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import AnimatedBg from './AnimatedBg';
import Light from './Light';

const Hero = () => {
  const pointLightRef = useRef();
  useEffect(() => {
    if (pointLightRef.current) {
      const helper = new PointLightHelper(pointLightRef, 1);
      pointLightRef.current.add(helper);
    }
  }, []);

  return (
    <section className='relative h-screen w-full min-h-[560px] pt-20 pb-20 px-6'>
      {/* need to add columns in grids to arrange thins */}
      <div className='h-full lg:pl-48 md:pl-20 flex flex-col items-start justify-center gap-8'>
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
            autoRotate
            autoRotateSpeed={0.3}
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Stars radius={500} depth={50} count={1000} factor={10} />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
