import React, { useContext } from "react";
import fondo from "../public/lice.jpeg";
import { ExamContext } from "../context/ExamContext-";

export const EditExams = () => {

  return (
    <div
      className=" flex flex-col gap-2 h-screen bg-cover bg-center mt-2"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="flex gap-2 mt-3">
        <div className="flex-1 border border-sky-400 flex justify-center h-[40vh] rounded-3xl items-center bg-white bg-opacity-70">
          <button className="border-sky-500 border-[2px] h-[8vh] w-[20vh] rounded-3xl">Elementary</button>
        </div>
        <div className="flex-1 border border-sky-400 flex justify-center rounded-3xl items-center bg-white bg-opacity-70">
          <button className="border-sky-500 border-[2px] h-[8vh] w-[20vh] rounded-3xl">A1</button>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex-1 border border-sky-400 flex justify-center h-[40vh] rounded-3xl items-center bg-white bg-opacity-70">
          <button className="border-sky-500 border-[2px] h-[8vh] w-[20vh] rounded-3xl">A2</button>
        </div>
        <div className="flex-1 border border-sky-400 flex justify-center rounded-3xl items-center bg-white bg-opacity-70">
          <button className="border-sky-500 border-[2px] h-[8vh] w-[20vh] rounded-3xl">B1</button>
        </div>
      </div>
    </div>
  );
};
