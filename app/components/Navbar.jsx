'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS } from '../constants';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleNavWidthChange = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleNavWidthChange);

    return () => {
      window.removeEventListener('resize', handleNavWidthChange);
    };
  }, []);

  return (
    <nav className='border-2 border-green-300 h-20 flex px-6 lg:px-20 items-center justify-between mx-auto py-5 absolute right-0 top-0 left-0 z-50 flex-wrap'>
      <Link href='/' className='inline-block mr-6 z-50 absolute'>
        <Image src='/horse-icon.png' alt='logo' width={50} height={50} />
      </Link>

      <div
        className={`${
          isMenuOpen ? 'show' : ''
        } nav_links basis-auto items-center flex-grow mt-10 lg:mt-0 lg:justify-end lg:flex lg:flex-row lg:h-full`}
      >
        <ul className='h-52 w-full flex flex-col gap-6 items-center justify-center lg:flex lg:flex-row lg:w-auto'>
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className='w-full text-[16px] font-[400] flex items-center justify-center cursor-pointer transition-all hover:font-bold lg:text-[22px]'
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>

      <button
        className='absolute z-50 right-6 lg:hidden'
        type='button'
        aria-label='Toggle navigation'
        onClick={handleToggleMenu}
      >
        <Image
          src='menu.svg'
          alt='menu'
          width={32}
          height={32}
          className='inline-block cursor-pointer'
        />
      </button>
    </nav>
  );
};

export default Navbar;
