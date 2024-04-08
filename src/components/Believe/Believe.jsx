import React from 'react';
import advantageimage from '../../assets/images/advantageimage.svg';
const Believe = () => {
  return (
    <div className='bg-rgba-17-44-65 '>
      <div className='md:flex justify-evenly px-4 md:p-16 text-white'>
        <div className='flex-1 md:text-4xl md:leading-[89px] '>
          We believe in
          <span className='text-orange-500'>
            diversity & <br></br>inclusion
          </span>
        </div>
        <div className='flex-1 leading-[36px]'>
          <p className=''>
            At CaSE we do not just accept difference — we celebrate it, we
            support it, and we thrive on it for the benefit of our employees,
            our services, our industry and our community. We are proud to be an
            equal opportunity employer. Guided by our values and beliefs, we
            foster an inclusive workplace culture where employees thrive because
            of their differences, not in spite of them.
          </p>
          <p>
            Our values and beliefs, we foster an inclusive workplace culture
            where employees thrive because of their differences, not in spite of
            them Our Commitment to reinventing the standard. With more than 20
            nationalities represented in our global workforce, we firmly believe
            that our ability to deliver high-quality results is fueled by our
            active efforts to embed diversity and inclusion. We recognise,
            respect, and strive to create an environment where employees can
            excel and feel a true sense of belonging.
          </p>
          <span className='leading-[48px] text-xl font-bold'>
            Some of our strategic initiatives include:
          </span>
        </div>
      </div>
      <div className=''>
        <img src={advantageimage} alt='advantage' />
      </div>
    </div>
  );
};

export default Believe;
