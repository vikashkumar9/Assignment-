import React from 'react';
import g1 from '../../assets/images/grid1image.jpg';
import g2 from '../../assets/images/gr2.jpg';
import g3 from '../../assets/images/gr3.jpg';
import g4 from '../../assets/images/gr4.jpg';
import g5 from '../../assets/images/gr5.jpg';
import g6 from '../../assets/images/gr6.jpg';
import g7 from '../../assets/images/gr7.jpg';
import g8 from '../../assets/images/gr8.jpg';

const ImageGallery = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-4 p-4'>
        <div className='md:col-span-6'>
          <img src={g1} alt='1' className='w-full h-full object-cover' />
        </div>
        <div className='md:col-span-4'>
          <img src={g2} alt='2' className='w-full h-full object-cover' />
        </div>
        <div className='md:col-span-2 md:row-span-2'>
          <img src={g3} alt='3' className='w-full h-full object-cover' />
        </div>
        <div className='md:row-span-2 md:col-span-4'>
          <img src={g4} alt='4' className='w-full h-full object-cover' />
        </div>
        <div className='md:col-span-6 md:flex md:flex-col md:justify-center md:p-8'>
          <div className='md:text-[64px] md:leading-[89.6px] mb-4'>
            We celebrate <span className='text-orange-500'> success</span>
          </div>
          <div className='md:text-[18px] md:leading-[24px] mb-4'>
            At CaSE we understand that every achievement, big or small, is a
            result of the hard work and dedication of our team members. We take
            pride in celebrating these moments because they underscore the
            commitment and effort put into each project.
          </div>
          <div className='md:text-[18px] md:leading-[24px]'>
            Some of our favorite events on the calendar include our coveted
            Melbourne Cup event and our always amazing Christmas Party.
            In-between, our team celebrates together during team cycling events,
            regular team dinners, and social morning teas to celebrate
            milestones and special days. Taking the time to celebrate wins is
            our way of showing gratitude and ensuring everyone knows their
            efforts make a difference.
          </div>
        </div>
        <div className='bg-gray-200 md:col-span-8'>
          <img src={g5} alt='5' className='w-full h-full object-cover' />
        </div>
        <div className='md:col-span-6 md:flex md:flex-col md:justify-center md:p-8'>
          <div className='md:text-[64px] md:leading-[89.6px] mb-4'>
            Employee
            <span className='text-orange-500'> Appreciation Program</span>
          </div>
          <div className='md:text-[18px] md:leading-[24px] mb-4'>
            Our Employee Appreciation Program is tailored to honor the ongoing
            commitment and efforts of our long-serving team members. Our 5 Year
            Club and 10 Year Club are special milestones within this program,
            celebrating employees who have dedicated half a decade or a full
            decade to our company mission. Each year, members of these clubs are
            invited to annual events held at select, memorable locations,
            reflecting our gratitude and recognition of their unwavering
            dedication. It's our way of saying thank you and ensuring that every
            significant chapter in our collective journey is celebrated with the
            grandeur it deserves
          </div>
        </div>
        <div className='bg-gray-600 md:col-span-6'>
          <img src={g6} alt='6' className='w-full h-full object-cover' />
        </div>
        <div className='bg-gray-600 md:col-span-8'>
          <img src={g7} alt='7' className='w-full h-full object-cover' />
        </div>
        <div className='bg-gray-600 md:col-span-4'>
          <img src={g8} alt='8' className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
