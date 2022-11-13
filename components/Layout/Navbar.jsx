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
      name: 'Home',
    },
    {
      id: 1,
      address: '/anime',
      name: 'Anime',
    },
    {
      id: 2,
      address: '/manga',
      name: 'Manga',
    },
    {
      id: 3,
      address: '/search',
      name: 'Search',
    },
  ];

  return (
    <nav className='bg-eerieBlack py-1 text-white'>
      <div className='layout flex items-center justify-between'>
        {/* DESKTOP NAVBAR */}
        <Link href='/'>
          <Image
            className='hover:cursor-pointer'
            width={164}
            height={70}
            src='/images/anilog.png'
            alt='anilog logo'
          />
        </Link>

        {/* navbar links*/}
        <ul className='hidden space-x-4 font-bold md:flex'>
          {links.map((link) => {
            return (
              <Link key={link.id} href={link.address}>
                <li className='hover:cursor-pointer hover:text-mediumSlateBlue'>
                  {link.name}
                </li>
              </Link>
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
            <Link href='/'>
              <Image
                width={164}
                height={70}
                src='/images/anilog.png'
                alt='anilog logo'
              />
            </Link>

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
                <Link key={link.id} href={link.address}>
                  <li>{link.name}</li>
                </Link>
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
