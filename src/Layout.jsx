import { Outlet, useNavigate } from 'react-router-dom';
import { useUsers } from './Context';
import { FaUser } from 'react-icons/fa';
import Switcher12 from './Switcher12';

const Layout = () => {
  const navigate = useNavigate();
  const { IsDarkMode } = useUsers();

  function handleAccountClick() {
    navigate("/account");
  }

  return (
    <div className={`min-h-screen flex flex-col ${IsDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} overflow-x-hidden`}>
      
      <nav className="flex justify-between items-center p-4">
        <Switcher12 />
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={handleAccountClick} 
            className="p-2 rounded-full hover:bg-gray-300 dark:hover">
            <FaUser className="text-2xl" /> 
          </button>
        </div>
      </nav>

      <main className="flex-1 w-full">
        <Outlet />
      </main>

    </div>
  );
}

export default Layout;
