import React from 'react';

import SucessComponent from './SucessComponent';
const Success = () => {
  return (
    <div>
      <div class=' border-1 border-orange-500 rounded-full w-[25%]'></div>

      <div className=' md:h-[160px] bg-custom-blue'>
        <div className='md:flex '>
          <SucessComponent number='01' text=' We stay connected' />
          <SucessComponent
            number='02'
            text=' We believe in diversity & inclusion'
          />
          <SucessComponent number='03' text=' We celebrate success' />
        </div>
      </div>
    </div>
  );
};
export default Success;
