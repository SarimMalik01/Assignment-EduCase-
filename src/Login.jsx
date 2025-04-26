import React, { useState } from 'react';
import { useUsers } from './Context';

function Login() {
  const { users, IsDarkMode } = useUsers();
  const [person, setPerson] = useState({ email: "", password: "" });
  const [message, setMessage] = useState({ notif: "", state: false });
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setPerson((prevPerson) => ({
      ...prevPerson,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const prevUser = users.find(
      (user) => user.email === person.email && user.password === person.password
    );

    if (prevUser) {
      setMessage({ notif: "User logged in successfully!", state: true });
    } else {
      setMessage({ notif: "User not found, please create an account.", state: true });
    }

    setTimeout(() => {
      setMessage({ notif: "", state: false });
    }, 3000);
  }

  const isFormValid = person.email && person.password;

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 sm:p-6 ${IsDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className={`w-full max-w-sm sm:max-w-md md:max-w-lg p-6 sm:p-8 rounded-lg shadow-md ${IsDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className={`text-2xl sm:text-3xl font-bold mb-2 ${IsDarkMode ? 'text-white' : 'text-black'}`}>
            Sign in to your PopX Account
          </h1>
          <p className={`text-sm sm:text-base ${IsDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt impedit repudiandae, sequi quae voluptas repellendus enim sit itaque.
          </p>
        </div>
  
        {/* Notification Message */}
        {message.state && (
          <div className={`mb-6 p-3 rounded text-center text-sm sm:text-base ${IsDarkMode ? 'bg-green-800 text-green-100' : 'bg-green-200 text-green-800'}`}>
            {message.notif}
          </div>
        )}
  
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
  
          {/* Email Field */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className={`mb-1 text-sm font-medium ${IsDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Email Address<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
              required
              className={`p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 
                ${IsDarkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-gray-50 text-gray-900 border-gray-300'}`}
            />
          </div>
  
          {/* Password Field */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className={`mb-1 text-sm font-medium ${IsDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Password<span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={person.password}
                onChange={handleChange}
                required
                className={`p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-500 
                  ${IsDarkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-gray-50 text-gray-900 border-gray-300'}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-3 top-3 text-xs sm:text-sm focus:outline-none ${IsDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
  
          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className="w-full py-3 text-base sm:text-lg font-semibold text-white rounded bg-purple-500 hover:bg-purple-600 transition-transform transform hover:scale-105 disabled:opacity-50"
          >
            Login
          </button>
  
        </form>
      </div>
    </div>
  );
}

export default Login;
