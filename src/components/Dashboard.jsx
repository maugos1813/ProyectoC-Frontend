import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import funval from "../public/funval2.jpeg";
import bandera from "../public/bandera.jpeg";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

 // console.log(user);
  return (
    <div className=" min-h-screen">
      <div className="p-8">
        <div className="flex gap-[50px]">
          <div className="flex gap-4 items-center">
            <h1 className="text-[50px] font-bold mb-4 underline">
              Welcome to the Student Portal:
            </h1>
            <p className="font-bold text-[50px] text-blue-400">
              {user?.firstName}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <h2 className="text-[50px] font-bold underline">Nivel:</h2>
            <p className="font-bold text-[50px] text-blue-400">
              {user?.level_id.name}
            </p>
          </div>
        </div>

        <p className="mb-4 w-[800px] text-[25px] mt-[50px]">
          This portal is designed to be your one-stop-shop for all your academic
          needs. From important dates to exam information and educational
          videos, we've got you covered.
        </p>
        <div className="flex space-x-4 mt-[50px]">
          <div className="flex flex-col gap-4 w-[800px] items-center p-4">
            <Link
              to={"/videos"}
              className="bg-sky-400 text-white py-2 px-4 rounded-xl w-[250px] h-[80px] flex items-center justify-center "
            >
              Mis Videos
            </Link>
            <Link
              className="bg-sky-400 text-white py-2 px-4 rounded-xl w-[250px] h-[80px] flex items-center justify-center"
              to={"/examenes"}
            >
              Examenes
            </Link>
          </div>
          <div className=" w-[800px] h-[400px] flex">
            <img
              src={funval}
              alt="logo funval"
              className="border  w-[400px] h-[200px] rounded-3xl"
            />
          </div>
          <div className=" w-[800px] h-[400px] flex items-center">
            <img
              src={bandera}
              alt="logo funval"
              className="border h-[200px] rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
