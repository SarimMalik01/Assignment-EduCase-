import React, { useState } from 'react';
import { useUsers } from "./Context";

function Register() {
  const { users, addUser, IsDarkMode } = useUsers();
  const [message, setMessage] = useState({ notif: "", state: false, type: null });
  const [person, setPerson] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: ""
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Track if the form is being submitted

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === "radio") {
      setPerson(prevState => ({
        ...prevState,
        [name]: checked ? value : prevState[name]
      }));
    } else {
      setPerson(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Prevent submitting if already in progress
    if (isSubmitting) return;

    setIsSubmitting(true); // Set the form to submitting state

    const prevUser = users.find(user =>
      user.fullName === person.fullName &&
      user.phoneNumber === person.phoneNumber &&
      user.email === person.email
    );

    if (prevUser) {
      setMessage({ notif: "User found, please login", state: true, type: false });
    } else {
      addUser(person);
      setMessage({ notif: "User registered successfully!", state: true, type: true });
    }

    setTimeout(() => {
      setMessage({ notif: "", state: false, type: null });
      setIsSubmitting(false); // Reset submitting state after a short delay
    }, 3000);
  }

  function togglePasswordVisibility() {
    setIsPasswordVisible(prevState => !prevState);
  }

  const isFormValid = person.fullName && person.phoneNumber && person.email && person.password && person.companyName && person.isAgency;

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 ${IsDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className={`w-full max-w-md p-8 rounded-lg shadow-md ${IsDarkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="flex items-center justify-between mb-8">
          <h1 className={`text-2xl font-bold ${IsDarkMode ? "text-gray-100" : "text-gray-800"}`}>
            Create Your PopX Account
          </h1>
        </div>

        {message.state && (
          <div className={`p-2 text-sm rounded ${message.type === true ? "text-green-600" : "text-red-600"}`}>
            {message.notif}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label htmlFor="fullName" className={`mb-1 ${IsDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Full Name<span className="text-red-600">*</span></label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={person.fullName}
              onChange={handleChange}
              className={`p-2 border rounded ${IsDarkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-50 text-gray-900'}`}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="contact" className={`mb-1 ${IsDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Phone Number<span className="text-red-600">*</span></label>
            <input
              type="tel"
              id="contact"
              name="phoneNumber"
              value={person.phoneNumber}
              onChange={handleChange}
              className={`p-2 border rounded ${IsDarkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-50 text-gray-900'}`}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className={`mb-1 ${IsDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email Address<span className="text-red-600">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
              className={`p-2 border rounded ${IsDarkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-50 text-gray-900'}`}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className={`mb-1 ${IsDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Password<span className="text-red-600">*</span></label>
            <div className="relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                name="password"
                value={person.password}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${IsDarkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-50 text-gray-900'}`}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className={`absolute right-2 top-2 text-sm ${IsDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
              >
                {isPasswordVisible ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="companyName" className={`mb-1 ${IsDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Company Name<span className="text-red-600">*</span></label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={person.companyName}
              onChange={handleChange}
              className={`p-2 border rounded ${IsDarkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-50 text-gray-900'}`}
            />
          </div>

          <div className="flex flex-col">
            <label className={`mb-2 ${IsDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Are you an agency?<span className="text-red-600">*</span>
            </label>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="yes"
                  name="isAgency"
                  value="yes"
                  checked={person.isAgency === "yes"}
                  onChange={handleChange}
                  className={`mr-2 ${IsDarkMode ? 'text-gray-100' : 'text-gray-900'} appearance-none border-2 border-purple-600 rounded-full w-4 h-4 checked:bg-purple-600 checked:border-transparent focus:outline-none`}
                />
                <label htmlFor="yes" className={`mr-2 ${IsDarkMode ? 'text-white' : 'text-black'}`}>
                  Yes
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="no"
                  name="isAgency"
                  value="no"
                  checked={person.isAgency === "no"}
                  onChange={handleChange}
                  className={`mr-2 ${IsDarkMode ? 'text-gray-100' : 'text-gray-900'} appearance-none border-2 border-purple-600 rounded-full w-4 h-4 checked:bg-purple-600 checked:border-transparent focus:outline-none`}
                />
                <label htmlFor="no" className={`mr-2 ${IsDarkMode ? 'text-white' : 'text-black'}`}>
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting} 
              className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-semibold rounded"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;