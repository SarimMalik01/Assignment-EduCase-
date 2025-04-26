import React from "react";
import { useNavigate } from "react-router-dom";
import { useUsers } from "./Context";

function Home() {
  const navigate = useNavigate();
  const { IsDarkMode } = useUsers();

  function handleLoginClick() {
    navigate("/login");
  }

  function handleRegisterClick() {
    navigate("/register");
  }

  return (
    <div className={`flex flex-col h-screen w-screen ${IsDarkMode ? 'bg-gray-900' : 'bg-gray-100'} overflow-hidden relative`}>
      
      <div className="flex-1 flex items-end justify-center">
  <h1 className={`text-4xl sm:text-6xl md:text-8xl font-semibold animate-fadeIn ${IsDarkMode ? 'text-gray-300' : 'text-gray-900'} mb-4`}>
    Welcome to POPX
  </h1>
</div>


      <div className={`flex flex-col items-center p-4 sm:p-6 w-full`}>
        <p className={`text-sm sm:text-lg ${IsDarkMode ? 'text-gray-200' : 'text-gray-600'} mb-6 text-center`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione reiciendis vel tempora obcaecati
        </p>

        <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-md">
          <button
            className={`w-full py-3 text-base sm:text-lg ${IsDarkMode ? 'bg-blue-400 hover:bg-blue-700 text-white' : 'bg-purple-300 hover:bg-purple-700 text-black'} rounded transition-transform transform hover:scale-105`}
            onClick={handleRegisterClick}
          >
            Create Account
          </button>

          <button
            className={`w-full py-3 text-base sm:text-lg ${IsDarkMode ? 'bg-blue-400 hover:bg-blue-700 text-white' : 'bg-purple-300 hover:bg-purple-700 text-black'} rounded transition-transform transform hover:scale-105`}
            onClick={handleLoginClick}
          >
            Already Registered? Login
          </button>
        </div>
      </div>

    </div>
  );
}

export default Home;
