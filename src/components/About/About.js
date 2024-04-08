import React from 'react';
import Aboutimage from '../../assets/images/aboutprofile.png';
import LeftArrow from '../UI/Button/LeftArrow';
import RightArrow from '../UI/Button/RightArrow';
import doublequotes from '../../assets/images/doublequotes.svg';
import RightArrowicon from '../../assets/images/rightarrowicon.svg';
const About = () => {
  return (
    <div>
      <div className='md:flex p-16 bg-rgba-17-44-65 text-white justify-around'>
        <div>
          <img src={Aboutimage} alt='about' className='h-[80%] w-[80%]' />
        </div>

        <div className='mt-8'>
          <div>
            <img src={doublequotes} alt='doublequotes' />
          </div>

          <div className='pl-10 mb-4'>
            <div className='mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              sodales turpis et lacinia fermentum. Curabitur vestibulum at arcu
              sed blandit. In consequat euismod purus nec imperdiet.
            </div>
            <div>Title</div>
            <div>Name</div>
          </div>
          <div className='flex cursor-pointer'>
            <button>
              <img src={RightArrowicon} alt='arrow icon' />
            </button>
            <div className='ml-3'>Read my story</div>
          </div>
        </div>
      </div>
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
export default About;
