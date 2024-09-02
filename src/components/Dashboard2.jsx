import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import wall from "../public/lice.jpeg"
import funval from "../public/funval2.jpeg";
import bandera from "../public/bandera.jpeg";

export const Dashboard2 = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="h-screen bg-cover bg-center m-1 mt-2 rounded-2xl py-4"
      style={{
        backgroundImage: `url(${wall})`,
      }}>


      <div className=" flex flex-col mb-8 items-center">
        <div className="flex items-center flex-col mb-4">
          <h1 className="text-4xl  font-semibold text-sky-500">
            Welcome to the Teacher Portal
          </h1>
          <p className="text-6xl">
            {user?.firstName} {user?.lastName}
          </p>
        </div>
        <div className="flex flex-row items-center text-center gap-2">
          <h1 className="text-[40px] font-semibold text-sky-500">
            Class:
          </h1>
          <p className="text-[40px]">  {user?.level_id.name} - {user?.level_id.sub_name}</p>
        </div>
      </div>

      <div className="flex items-center justify-center mx-auto">
        <p className="text-lg">"Welcome! Here you'll find all the resources you need to plan your lessons and track your students' progress."</p>

      </div>

      <div className="flex space-x-4 mt-[50px]">
        <div className="flex flex-col gap-4 w-[800px] items-center p-4">
          <Link
            to={"/tablas"}
            className="bg-sky-400 text-white py-2 px-4 rounded-xl w-[250px] h-[80px] flex items-center justify-center "
          >
            Mis Alumnos
          </Link>
          <Link
            className="bg-sky-400 text-white py-2 px-4 rounded-xl w-[250px] h-[80px] flex items-center justify-center"
            to={"/creation"}
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

      </div>


    </div>
  );
};
