import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Student Portal</h1>
      <p className="mb-4">This portal is designed to be your one-stop-shop for all your academic needs. From important dates to exam information and educational videos, we've got you covered.</p>
      <div className="flex space-x-4">
        <button className="bg-green-500 text-white py-2 px-4 rounded">View Dates</button>
        <button className="bg-green-500 text-white py-2 px-4 rounded">Login</button>
      </div>
    </div>
  );
};

export default Dashboard;
