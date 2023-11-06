import React from 'react';

function Register() {
  return (
    <div>
      <div className="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-200">
        <div className="content text-3xl text-center md:text-left">
          <h1 className="text-5xl text-blue-500 font-bold">Facebook</h1>
          <p>Connect with friends and the world around you on Facebook.</p>
        </div>
        <div className="container mx-auto flex flex-col items-center">
          <form className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
          <div className=" flex justify-start mb-4 text-4xl text-black font-bold">Register</div>
            <input
              type="text"
              placeholder="First Name"
              className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
            />
            <input
              type="text"
              placeholder="Email Address or Phone Number"
              className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
            />
            <input
              type="password"
              placeholder="New Password"
              className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
            />
            <input
              type="date"
              placeholder="Date of Birth"
              className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
            />
            <div className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500">
              <select id="gender" name="gender">
              <option value="male">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg">
              Register
            </button>
            <hr />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

