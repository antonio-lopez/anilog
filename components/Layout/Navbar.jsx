import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    {
      id: 0,
      address: '/',
      name: 'Anime',
    },
    {
      id: 1,
      address: '/manga',
      name: 'Manga',
    },
    {
      id: 2,
      address: '/search',
      name: 'Search',
    },
  ];

  return (
    <nav className='bg-eerieBlack py-1 text-white'>
      <div className='layout flex items-center justify-between'>
        {/* DESKTOP NAVBAR */}
        <Image
          width={164}
          height={70}
          src='/images/anilog.png'
          alt='anilog logo'
        />

        {/* navbar links*/}
        <ul className='hidden space-x-4 font-bold md:flex'>
          {links.map((link) => {
            return (
              <li key={link.id} className='hover:text-mediumSlateBlue'>
                <Link href={link.address}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
        {/* END DESKTOP NAVBAR*/}

        {/* MOBILE NAVBAR*/}
        <button
          type='button'
          onClick={() => setIsOpen((open) => !open)}
          className='md:hidden'
        >
          <BiMenuAltRight className='h-12 w-12' />
        </button>

        {/* mobile menu*/}
        <div
          className={`${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } absolute top-0 left-0 right-0 z-20 min-h-screen w-full bg-raisinBlack transition-all duration-700`}
        >
          {/* mobile header */}
          <div className='layout flex items-center justify-between py-1'>
            <Image
              width={164}
              height={70}
              src='/images/anilog.png'
              alt='anilog logo'
            />

            <button
              type='button'
              onClick={() => setIsOpen((open) => !open)}
              className='md:hidden'
            >
              <AiOutlineClose className='h-10 w-10' />
            </button>
          </div>

          {/* mobile nav links */}
          <ul className='flex h-screen flex-col items-center justify-center space-y-10 text-center text-3xl font-bold'>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <Link href={link.address}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* END MOBILE NAVBAR*/}
      </div>
    </nav>
  );
};

export default Navbar;
