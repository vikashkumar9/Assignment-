import globalImage from '../../assets/images/globalimage.png';
// import Rolebtn from '../UI/Button/Rolebtn';
import Rolebtn from '../UI/Button/Rolebtn';

const Global = () => {
  return (
    <div className='py-32 px-[10%] text-center'>
      <div className='md:leading-[50.83px] md:text-[42px]  '>
        As a <span className='text-orange-500'>global business</span>, we
        encourage you to contact us no matter where you are located in the
        world.
      </div>
      <div className='text-center my-8 text font-bold'>
        Browse our job opportunities across the globe.
      </div>
      <div className='flex items-center justify-center md:pb-32'>
        <div className='text-[24px] leading-[29.05px] text-orange-500 mr-4 '>
          OPEN ROLES
        </div>
        <button>
          <Rolebtn />
        </button>
      </div>

      <div className='mt-8'>
        <img
          src={globalImage}
          alt='global'
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
};

export default Global;
