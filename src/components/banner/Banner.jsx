import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import banner1 from '../../assets/images/banner1.jpg';
import LeftArrow from '../UI/Button/LeftArrow';
import RightArrow from '../UI/Button/RightArrow';

const Banner = () => {
  return (
    <div className='top-0 w-100'>
      <div
        id='carouselExampleDark'
        className='carousel carousel-dark slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active' data-bs-interval='10000'>
            <img src={banner1} className='d-block w-100' alt='...' />
            <div className='carousel-caption text-white position-absolute bottom-40 start-40 ml-[100px] translate-middle-x d-none d-md-block mb-[5%] ml-[20%]'>
              <p className='mb-2 text-start'>Home / Why work with us</p>
              <div className='text-4xl font-thin mb-3 text-start'>
                Headline #1
              </div>
              <p className='mb-0 text-start '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className='carousel-item' data-bs-interval='2000'>
            <img src={banner1} className='d-block w-100' alt='...' />
            <div className='carousel-caption text-white position-absolute bottom-40 start-40 ml-[100px] translate-middle-x d-none d-md-block mb-[5%] ml-[300px]'>
              <p className='mb-2 text-start'>Home / Why work with us</p>
              <div className='text-4xl font-thin mb-3 text-start'>
                Headline #2
              </div>
              <p className='mb-0 text-start '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <img src={banner1} className='d-block w-100' alt='...' />
            <div className='carousel-caption text-white position-absolute bottom-40 start-40 ml-[100px] translate-middle-x d-none d-md-block mb-[5%] ml-[300px]'>
              <p className='mb-2 text-start'>Home / Why work with us</p>
              <div className='text-4xl font-thin mb-3 text-start'>
                Headline #3
              </div>
              <p className='mb-0 text-start '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
        <div className='position-absolute bottom-10 end-20 p-8'>
          <button
            className='carousel-control-prev position-absolute bottom-20 end-20 d-none d-md-block'
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide='prev'
          >
            <LeftArrow />
          </button>
          <button
            className='carousel-control-next d-none d-md-block'
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide='next'
          >
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
