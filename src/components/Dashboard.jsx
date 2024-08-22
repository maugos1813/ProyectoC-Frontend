import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext)
  return (
    <div className="">
      <Navbar />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">
          Welcome to the Student Portal
        </h1>
        <p className="mb-4">
          This portal is designed to be your one-stop-shop for all your academic
          needs. From important dates to exam information and educational
          videos, we've got you covered.
        </p>
        <div className="flex space-x-4">
          <button className="bg-green-500 text-white py-2 px-4 rounded">
            Cursos
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded">
            Exams
          </button>
        </div>
        <main className='p-8'> 
            <h1>Bienvenido {user?.firstName}</h1>
            <h2>Nivel: {user?.level_id}</h2>
            <Link className='bg-orange-400 text-white ' to={'/examenes'}>examenes</Link>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
