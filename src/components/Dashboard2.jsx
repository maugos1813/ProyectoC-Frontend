import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import wall from "../public/lice.jpeg"

export const Dashboard2 = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div  className="h-[90vh] bg-cover bg-center mt-2 rounded-2xl"
    style={{
      backgroundImage: `url(${wall})`,
    }}>
      <div className=" flex flex-col gap-5">
        <div className="flex gap-4 items-center h-[20vh]">
          <h1 className="text-[50px] underline font-semibold text-sky-500 ml-[50px]">
            WELCOME TEACHER:
          </h1>
          <p className="text-[50px]">
            {user?.firstName} {user?.lastName}
          </p>
        </div>
        <div className="flex items-center justify-start ml-[100vh]">
          <h1 className="text-[40px] font-semibold underline text-sky-500">
            Curso asignado:
          </h1>
          <p className="text-[40px]">{user?.level_id.sub_name}</p>
        </div>
      </div>
      <div className="">
        
      </div>
    </div>
  );
};
