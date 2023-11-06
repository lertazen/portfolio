import React from 'react';

const About = () => {
  return (
    <div
      id='about'
      className='about_bg min-h-screen flex flex-col justify-center px-2'
    >
      <div className='container mx-auto px-2'>
        <div className='text-2xl'>About</div>
        <div className='text-base md:text-xl p-1 md:p-0'>
          Hi, I'm Tianzeng Liao, a full-stack developer with a knack for
          creating intuitive and dynamic user experiences. Trained in Computer
          Programming at Seneca College, I bring a unique mix of engineering
          precision and coding finesse to the tech table. Proficient in React,
          Next.js, and a suite of modern web technologies, I'm all about
          crafting accessible, efficient websites that drive user engagement.
          Outside of code, I'm a board game enthusiast and a continuous learner.
          I'm ready to join a team where collaboration, innovation, and growth
          are part of the daily routine.
        </div>
      </div>
    </div>
  );
};

export default About;
