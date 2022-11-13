import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaGlobeAmericas } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-eerieBlack text-white'>
      <div className='flex flex-col items-center py-7'>
        {/* social links */}
        <div className='flex items-center justify-center space-x-4'>
          <a
            className='hover:text-mediumSlateBlue'
            href='https://github.com/antonio-lopez'
            aria-label='Antonio Lopez github profile'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillGithub className='h-8 w-8' />
          </a>
          <a
            className='hover:text-mediumSlateBlue'
            href='https://www.linkedin.com/in/antoniolopez6/'
            aria-label='Antonio Lopez linkedin profile'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillLinkedin className='h-8 w-8' />
          </a>
          <a
            className='hover:text-mediumSlateBlue'
            href='https://www.antoniolopez.me/'
            aria-label='Antonio Lopez website'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGlobeAmericas className='h-7 w-7' />
          </a>
        </div>
        <div className='pt-4 text-center'>
          <p>© Antonio Lopez</p>
          <span>Powered by </span>
          <a
            className='hover:text-mediumSlateBlue'
            href='https://github.com/AniList/ApiV2-GraphQL-Docs'
          >
            AniList GraphQL Api
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
