'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ABOUT_BODY } from '../constants';
import { useRef } from 'react';
import Image from 'next/image';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0.3, 1', '0.7 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      id='about'
      className='about_bg min-h-screen flex flex-col justify-center px-2'
    >
      <div className='container mx-auto px-2 grid grid-cols-4 md:grid-cols-12 gap-5'>
        <div className='col-span-4 md:col-span-6'>
          <div className='text-2xl'>About</div>
          <div className='text-base md:text-xl p-1 md:p-0'>
            {ABOUT_BODY.body}
          </div>
        </div>
        <div className='col-span-4 md:col-span-6'>
          <h3 className='text-xl'>Skills:</h3>
          <div className='flex gap-3'>
            {ABOUT_BODY.skills.map((skill, index) => (
              <div className='relative'>
                <Image
                  key={index}
                  src={skill.src}
                  width={45}
                  height={45}
                  alt={skill.alt}
                  className='hover:scale-125 hover:show skill_icon'
                />

                <div key={index} className='tooltip'>
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
