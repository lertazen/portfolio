import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='container mx-auto h-60 md:h-96 px-2'>
      <div className='flex justify-center items-center gap-2 md:gap-3'>
        <Link href='https://github.com/lertazen' target='_blank'>
          <Image
            src='/github-icon.png'
            height={38}
            width={38}
            alt='github icon'
          />
        </Link>
        <Link href='' target='_blank'>
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
