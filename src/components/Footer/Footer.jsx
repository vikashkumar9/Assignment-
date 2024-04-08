import React from 'react';
import footerimg from '../../assets/images/footer.svg';
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import linkedin from '../../assets/images/linkedin.svg';
import copyright from '../../assets/images/copyright.svg';

const Footer = () => {
  return (
    <footer>
      <div className='bg-black text-whiteRGBA '>
        <div className='bg-black md:flex justify-around  border-b h-full  '>
          <div className='px-16 sm:py-4 md:py-16'>
            <div>
              <img src={footerimg} alt='fimage' />
            </div>
            <div className='flex justify-between my-4 '>
              <button className='cursor-pointer'>
                {' '}
                <img src={facebook} alt='fimage' />
              </button>
              <button className='cursor-pointer'>
                <img src={instagram} alt='fimage' />
              </button>
              <button className='cursor-pointer'>
                <img src={linkedin} alt='fimage' />
              </button>
            </div>
          </div>
          <div className='md:border-l border-whiteRGBA h-full md:py-16 pl-8 '>
            <ul>
              <li className='text-[16px] leading-[35.2px] font-[600px] mb-8'>
                Expertise
              </li>
              <li className='text-[16px] leading-[25.6px] cursor-pointer font-[400px] mb-2'>
                Design
              </li>
              <li className='text-[16px] leading-[25.6px] cursor-pointer font-[400px] mb-2'>
                Specialist Expertise
              </li>
              <li className='text-[16px] leading-[25.6px] cursor-pointer font-[400px] mb-2'>
                Commercial Advice
              </li>
              <li className='text-[16px] leading-[25.6px] cursor-pointer font-[400px]'>
                Traffic & Transport
              </li>
            </ul>
          </div>

          <div className='md:border-x border-whiteRGBA  h-full md:py-16 md:p pl-8 md:pr-32'>
            <ul>
              <li className='text-[16px] leading-[35.2px] font-[600px] mb-8'>
                Sectors
              </li>
              <li className='text-[16px] leading-[25.6px] cursor-pointer font-[400px] mb-2'>
                Road
              </li>
              <li className='text-[16px] leading-[25.6px] cursor-pointer font-[400px] mb-2'>
                Tunner
              </li>
              <li className='text-[16px] leading-[25.6px] cursor-pointer font-[400px] mb-2'>
                Bridge
              </li>
              <li className='text-[16px] leading-[25.6px] cursor-pointer font-[400px] '>
                Others +
              </li>
            </ul>
          </div>
          <div className='md:flex pl-8 md:py-16 '>
            <ul className='sm:pl-32 md:pl-0'>
              <li className='text-[16px] leading-[25.6px] cursor-pointer font-[400px] mb-2'>
                Our Business
              </li>
              <li className='text-[16px] leading-[25.6px] cursor-pointer font-[400px] mb-2'>
                Work With Us
              </li>
              <li className='text-[16px] leading-[25.6px] cursor-pointer font-[400px] mb-2'>
                Projects
              </li>
              <li className='text-[16px] leading-[25.6px] cursor-pointer font-[400px] mb-2'>
                News
              </li>
            </ul>

            <ul className='md:ml-16'>
              <li className='text-[16px] leading-[25.6px] cursor-pointer font-[400px] mb-2'>
                Our Capabilities
              </li>
              <li className='text-[16px] leading-[25.6px] cursor-pointer font-[400px] mb-2'>
                Engineers
              </li>
              <li className='text-[16px] leading-[25.6px] cursor-pointer font-[400px] mb-2'>
                Contact
              </li>
            </ul>
          </div>
        </div>
        <div className='md:flex justify-between px-8 pt-2 pb-3 '>
          <div className='flex items-center'>
            <img src={copyright} alt='copyright' className='mr-2' />
            <div className='md:text-[18px] md:leading-[39.6px] md:font-[400px]'>
              2021 Case International. All right reserved
            </div>
          </div>
          <div className='flex items-center'>
            <div className='mr-4 text-[16px] leading-[35.2px] font-[400px] cursor-pointer'>
              Terms & Condition
            </div>
            <div className='cursor-pointer'>Privacy Policy</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
