import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Navbar } from "./Navbar";
import { LayoutNav } from "./LayoutNav";
import { Nav } from "./Nav/Nav";

const Dashboard = () => {
  const { user } = useContext(AuthContext)

  console.log(user);
  return (
    <div className="">
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">
          Welcome to the Student Portal: {user?.firstName}
          
        </h1>
        <h2>Nivel: {user?.level_id.name}</h2>

        <p className="mb-4">
          This portal is designed to be your one-stop-shop for all your academic
          needs. From important dates to exam information and educational
          videos, we've got you covered.
        </p>
         <div className="flex space-x-4">
          <Link to={'/videos'} className="bg-green-500 text-white py-2 px-4 rounded">
            Mis Videos
          </Link>
          <Link className="bg-green-500 text-white py-2 px-4 rounded" to={'/examenes'}>Examenes</Link>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
