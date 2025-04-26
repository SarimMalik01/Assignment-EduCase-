import React from 'react';
import { useUsers } from './Context'; 

const Switcher12 = () => {
  const { IsDarkMode, toggleTheme } = useUsers();

  return (
    <>
      <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          checked={IsDarkMode} 
          onChange={toggleTheme} 
          className='sr-only'
        />
        <span
          className={`label flex items-center text-sm font-medium ${
            IsDarkMode ? 'text-gray-50' : 'text-gray-600' 
          }`}
        >
          Light
        </span>
        <span
          className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            IsDarkMode ? 'bg-[#212b36]' : 'bg-[#CCCCCE]'
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
              IsDarkMode ? 'translate-x-[28px]' : ''
            }`}
          ></span>
        </span>
        <span
          className={`label flex items-center text-sm font-medium ${
            IsDarkMode ? 'text-gray-50' : 'text-gray-600' 
          }`}
        >
          Dark
        </span>
      </label>
    </>
  );
}

export default Switcher12;
