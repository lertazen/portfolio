'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const ProjectCard = () => {
  const imageRef = useRef();
  const handleTilt = (event) => {
    if (imageRef.current) {
      const imgRect = imageRef.current.getBoundingClientRect();
      const imgX = imgRect.left;
      const imgY = imgRect.top;
      const imgWidth = imgRect.width;
      const imgHeight = imgRect.height;

      // mouse position
      const x = event.clientX - imgX;
      const y = event.clientY - imgY;

      const middleX = imgWidth / 2;
      const middleY = imgHeight / 2;

      const offsetX = ((x - middleX) / middleX) * 25;
      const offsetY = ((y - middleY) / middleY) * 25;

      imageRef.current.style.transform = `rotateX(${
        offsetY * -1
      }deg) rotateY(${offsetX}deg)`;
    }
  };

  const resetTilt = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  };

  return (
    <div
      className='my-3 text-md lg:row-span-3 col-span-6 flex justify-center items-center'
      onMouseLeave={resetTilt}
    >
      <div ref={imageRef} className='rounded-md tilt_card'>
        <Link
          href='https://yangjintibetangarden.onrender.com/'
          target='_blank'
          className='rounded-md'
        >
          <Image
            onMouseMove={handleTilt}
            src='/e-commerce-yangjin.png'
            className='rounded-md tilt_card'
            width={500}
            height={300}
            alt='Screenshot of the project home page'
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
