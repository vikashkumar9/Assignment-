import React from 'react';
import connect from '../../assets/images/connectimage.jpg';
import LeftArrow from '../UI/Button/LeftArrow';
import RightArrow from '../UI/Button/RightArrow';

import display from '../../assets/images/display.svg';
import message from '../../assets/images/message.svg';
import book from '../../assets/images/book.svg';
const Connect = () => {
  return (
    <div>
      <div class=' px-4 md:flex'>
        <div class='flex-1 py-4   md:px-16'>
          <div class='text-[32px] md:text-[64px] md:leading-[89px] mb-8'>
            We <span className='text-orange-500'> stay connected </span>
          </div>
          <div className='flex mb-8'>
            <div className='mr-8 h-[400px] w-[400px]'>
              <img src={display} alt='display ' />
            </div>
            <div>
              <div className='text-[24px]'>Quarterly Business Updates</div>
              <p className='text-[18px] text-gray-500  leading-[36px]'>
                We strive to stay connected as a team through communication and
                collaboration. This materialises every quarter through our
                Quarterly Business Update events. These gatherings are immersive
                sessions where every team member, regardless of rank or tenure,
                comes together to contribute to our overarching business
                strategy, and stay connected. They are opportunities to learn
                from our seasoned leaders and to also share personal insights
                and achievements that can steer our collective future. In an
                ever-evolving engineering landscape, staying connected isn’t
                just a benefit—it’s essential.
              </p>
            </div>{' '}
          </div>
          <div className='flex mb-8'>
            <div className='mr-8 '>
              <img src={message} alt='Message' />
            </div>

            <div className='text-[24px]'>Industry Events & Networking</div>
          </div>

          <div className='flex mb-32'>
            <div className='mr-8'>
              <img src={book} alt='book' />
            </div>
            <div className='text-[24px]'>Associations Memberships</div>
          </div>
        </div>
        <div class='flex-1'>
          <img src={connect} alt='connect' class='w-full h-full object-cover' />
        </div>
      </div>{' '}
      <div className='position-relative bottom-10 end-20 p-8'>
        <button
          className='position-absolute bottom-10 end-16 d-none d-md-block'
          type='button'
        >
          <LeftArrow />
        </button>
        <button
          className=' position-absolute  bottom-10 end-2 d-none d-md-block'
          type='button'
          data-bs-slide='next'
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
};
export default Connect;
