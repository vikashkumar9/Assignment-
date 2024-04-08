import React, { useEffect, useState } from 'react';
import Logo from '../../assets/images/image.png';

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const [offset, setOffset] = useState(0);

  console.log(offset);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerBackground = offset > 154 ? 'bg-black' : 'bg-transparent';

  return (
    <header>
      <div
        className={`position-fixed text-white p-4 px-8 z-50 no-underline w-full ${headerBackground}`}
      >
        <div className='container mx-auto flex justify-between items-center'>
          <div className='nav-links flexr  space-x-4 md:hidden'>
            <button onClick={toggleLinks} className='text-gray-300'>
              {showLinks ? 'Close' : 'Menu'}
            </button>
          </div>
          <div className='nav-links hidden md:flex items-center'>
            <a
              href='#1'
              className='hover:text-gray-300 no-underline text-white '
            >
              PROJECTS
            </a>
            <a
              href='#1'
              className='hover:text-gray-300 ml-8 no-underline text-white'
            >
              EXPERTISE
            </a>
            <a
              href='#1'
              className='hover:text-gray-300 ml-8 no-underline text-white'
            >
              ABOUT US
            </a>
            <a
              href='#1'
              className='hover:text-gray-300 ml-8 no-underline text-white'
            >
              PEOPLE
            </a>
            <div className='logo ml-[160px]'>
              <img
                src={Logo}
                alt='Logo'
                className='h-[40px] w-[40px] md:h-[106px] md:w-[106px]'
              />
            </div>
          </div>

          <div className='user-actions flex space-x-4'>
            <a
              href='#1'
              className='hover:text-gray-300 no-underline text-white '
            >
              CAREERS
            </a>
            <a
              href='#1'
              className='hover:text-gray-300 no-underline text-white'
            >
              AU
            </a>
          </div>
        </div>

        {showLinks && (
          <div className='md:hidden'>
            <a
              href='#1'
              className='block py-1 text-center hover:text-gray-300 no-underline text-white'
            >
              PROJECTS
            </a>
            <a
              href='#1'
              className='block py-1 text-center hover:text-gray-300 no-underline text-white'
            >
              EXPERTISE
            </a>
            <a
              href='#1'
              className='block py-1 text-center hover:text-gray-300 no-underline text-white'
            >
              ABOUT US
            </a>
            <a
              href='#1'
              className='block py-1 text-center hover:text-gray-300 no-underline text-white'
            >
              PEOPLE
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
