import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-500">
      <div className="bg-white p-8 rounded shadow-md w-80 transform -translate-y-1/6">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Login</h2>
        <p className="mb-4">Enter your email and password to access your account</p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <div className="flex items-center border rounded">
              <FaUser className="text-gray-500 ml-2" />
              <input type="email" placeholder="me@example.com" className="w-full px-3 py-2 border-none rounded-r" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <div className="flex items-center border rounded">
              <FaLock className="text-gray-500 ml-2" />
              <input type="password" className="w-full px-3 py-2 border-none rounded-r" />
            </div>
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
