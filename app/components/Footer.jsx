import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div
      id='contact'
      className='container mx-auto h-60 md:h-72 px-2 absolute right-0 left-0'
    >
      <div className='mt-10 flex justify-center items-center gap-2 md:gap-3'>
        <Link href='https://github.com/lertazen' target='_blank'>
          <Image
            src='/github-icon.png'
            height={38}
            width={38}
            alt='github icon'
          />
        </Link>
        <Link href='https://www.linkedin.com/in/nathantian' target='_blank'>
          <Image
            src='/linkedin-icon.png'
            height={38}
            width={38}
            alt='linkedin icon'
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
