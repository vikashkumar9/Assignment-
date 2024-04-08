import React from 'react';

export const RightArrow = () => {
  return (
    <div>
      {' '}
      <div className='border rounded-circle d-inline-block p-2.5'>
        <svg
          width='16'
          height='16'
          viewBox='0 0 8 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 12.67L7 6.835L1 1'
            stroke='#F36F2B'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
    </div>
  );
};
export default RightArrow;
