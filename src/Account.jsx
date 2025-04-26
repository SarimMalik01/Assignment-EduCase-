import React from 'react';
import personimage from "./assets/personimage.jpg"; 
import { FaCamera } from 'react-icons/fa';
import { useUsers } from "./Context";

function Account() {
  const { IsDarkMode } = useUsers();

  return (
    
    <div className={`w-full flex justify-center ${IsDarkMode ? 'text-white' : 'text-black'} py-10`}>
      <div className="w-full max-w-3xl px-4">
        <h1 className="text-center text-2xl font-semibold mb-6">Account Settings</h1>
        
        <div className="flex items-center space-x-6">
          <div className="relative">
            <img 
              src={personimage} 
              alt="Picture of person" 
              className="rounded-full w-24 h-24 object-cover"
            />
            <FaCamera className="absolute bottom-0 right-0 text-white bg-purple-600 p-1 rounded-full w-6 h-6 cursor-pointer" />
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">Jennifer Belling</h1>
            <p className={`${IsDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>jennifer@gmail.com</p>
          </div>
        </div>

        <div className="mt-6">
          <p className={`${IsDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nihil quae illum sit voluptatum asperiores commodi ipsam molestiae, quisquam quas ullam, dicta quibusdam ad obcaecati laboriosam sequi. Omnis, voluptates ullam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Account;
