'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ABOUT_BODY } from '../constants';
import { useRef } from 'react';

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
      <div className='container mx-auto px-2'>
        <div className='text-2xl'>About</div>
        <div className='text-base md:text-xl p-1 md:p-0'>{ABOUT_BODY.body}</div>
      </div>
    </motion.div>
  );
};

export default About;
