import RightArrowW from '../UI/Button/RightarrowW';

const SucessComponent = ({ number, text }) => {
  return (
    <div className='flex-1 py-4 align-content-center border-r border-solid border-black h-[80px] md:h-[160px]  px-2 md:px-4'>
      <div className='text-gray-107'>{number}</div>
      <div className='flex justify-between'>
        <div className=' text-white text-[24px] leading-[29.05px]'>{text}</div>
        <div>
          <button className='cursor-pointer'>
            <RightArrowW />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SucessComponent;
