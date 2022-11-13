import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
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
      id: 0,
      address: '/manga',
      name: 'Manga',
    },
    {
      id: 0,
      address: '/search',
      name: 'Search',
    },
  ];
  return (
    <nav className='bg-eerieBlack text-white'>
      <div className='layout flex items-center justify-between'>
        <Link href='/'>
          <Image
            className='hover:cursor-pointer'
            width={164}
            height={70}
            src='/images/anilog.png'
            alt='anilog logo'
          />
        </Link>

        {/* desktop nav links*/}
        <ul className='flex space-x-4 font-bold'>
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
      </div>
    </nav>
  );
};

export default Navbar;
