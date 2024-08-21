import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaSignInAlt, FaGraduationCap, FaBook } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-4 text-green-700 text-center">Welcome to the Student Portal</h1>
        <p className="mb-6 text-lg text-center">This portal is designed to be your one-stop-shop for all your academic needs. From important dates to exam information and educational videos, we've got you covered.</p>
        <div className="flex justify-center space-x-4 mb-8">
          <button className="flex items-center bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
            <FaCalendarAlt className="mr-2" /> View Dates
          </button>
          <Link to="/login">
            <button className="flex items-center bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
              <FaSignInAlt className="mr-2" /> LOGIN
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow-md flex items-center">
            <FaGraduationCap className="text-green-500 text-3xl mr-4" />
            <div>
              <h2 className="text-xl font-bold">Student Resources</h2>
              <p>Access all your study materials and resources here.</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow-md flex items-center">
            <FaBook className="text-green-500 text-3xl mr-4" />
            <div>
              <h2 className="text-xl font-bold">Exams and Tests</h2>
              <p>Take your exams and tests online with ease.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
