'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const handleToggleDetail = () => {
    setIsDetailOpen(!isDetailOpen);
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0, 1', '0.6 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      id='projects'
      className='container mx-auto pt-60 min-h-screen'
    >
      <div className='my-8 text-2xl mx-2'>Projects</div>
      <div className='w-full h-full flex justify-center items-center flex-col'>
        <div className='grid grid-cols-4 lg:grid-rows-3 lg:grid-cols-12 mx-2 gap-2'>
          <div className='col-span-4 lg:col-span-2 text-md font-bold'>
            Title:
          </div>
          <div className='mb-4 lg:pl-2 col-span-4 lg:col-span-4 text-md'>
            Tibetan Accessory E-commerce
          </div>
          <ProjectCard />
          <div className='col-span-4 lg:row-span-2 lg:col-span-2 text-md font-bold'>
            Overview:
          </div>
          <div className='mb-4 lg:pl-2 lg:row-span-2 col-span-4 text-md'>
            An e-commerce platform specifically designed to showcase and sell
            Tibetan accessories. This platform offers user-friendly navigation
            for product browsing with robust filtering and sorting capabilities.
            Users can seamlessly add products to their cart, proceed to
            checkout, and make secure payments.
          </div>
          <div className='text-lg col-span-4 lg:col-span-12 text-center'>
            <button onClick={handleToggleDetail}>
              Detail
              <span
                className={`
                  ${isDetailOpen ? 'open' : 'close'} double_arrow
                  `}
              ></span>
            </button>
          </div>
        </div>
        <div
          className={`${isDetailOpen ? 'detail_show' : 'detail_collapsed'} `}
        >
          <div className='grid grid-cols-4 lg:grid-cols-12 mx-2 '>
            <div className='col-span-4 lg:col-span-2 text-md font-bold'>
              Features:
            </div>
            <div className='mb-4 lg:pl-2 col-span-4 lg:col-span-10 text-md'>
              User-Friendly Interface
              <br />
              Product Browsing
              <br />
              Shopping Cart
              <br />
              Secure Authentication
              <br />
              Backend Operations
              <br />
              Payment Integration
              <br />
              Cloud Integration
              <br />
            </div>
            <div className='col-span-4 lg:col-span-2 text-md font-bold'>
              Technologies Used:
            </div>
            <div className='mb-4 lg:pl-2 col-span-4 lg:col-span-10 text-md lg:pr-72'>
              Backend: Express.js, Mongoose (with MongoDB), bcrypt, Cloudinary,
              cookie-parser, dotenv, express-async-handler, jsonwebtoken,
              multer, stripe <br />
              Frontend: React, Material UI, react-stripe-js, stripe-js,
              react-router-dom
            </div>
            <div className='col-span-4 lg:col-span-2 text-md font-bold'>
              Live link:
            </div>
            <div className='mb-4 lg:pl-2 col-span-4 lg:col-span-10 text-md'>
              <Link
                href='https://yangjintibetangarden.onrender.com/'
                target='_blank'
              >
                https://yangjintibetangarden.onrender.com/
              </Link>
              <span> (It will take about one minute to spin up)</span>
            </div>
            <div className='col-span-4 lg:col-span-2 text-md font-bold'>
              Github Repository:
            </div>
            <div className='lg:pl-2 col-span-4 lg:col-span-10 text-md'>
              <Link
                href='https://github.com/lertazen/yangjin_e-commerce'
                target='_blank'
              >
                https://github.com/lertazen/yangjin_e-commerce
              </Link>
            </div>
          </div>
          <hr
            className={`${
              isDetailOpen ? 'sm:w-full w-11/12' : 'w-5/12 sm:w-1/6'
            } transition-all ease-in-out mx-auto my-3`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
