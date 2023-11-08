import React from 'react';
import { ABOUT_BODY } from '../constants';

const About = () => {
  return (
    <div
      id='about'
      className='about_bg min-h-screen flex flex-col justify-center px-2'
    >
      <div className='container mx-auto px-2'>
        <div className='text-2xl'>About</div>
        <div className='text-base md:text-xl p-1 md:p-0'>{ABOUT_BODY.body}</div>
      </div>
    </div>
  );
};

export default About;
