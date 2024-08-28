import React, { useContext } from "react";
import { AlumnsContext } from "../context/AlumnsContext.jsx";
import { Link } from "react-router-dom";
import fondo from "../public/lice.jpeg";

export const Tablas = () => {
  const { alumnos, isLoading, isError } = useContext(AlumnsContext);

  if (isLoading) {
    return <div>Cargando alumnos...</div>;
  }

  if (isError) {
    return <div>Error al cargar los alumnos</div>;
  }

  const students = alumnos.filter((alumno) => alumno.type === "student");

  return (
    <div
      className="flex flex-col border bg-gray-900 h-[130vh] bg-cover bg-center mt-2"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="w-[90%] h-[90%] absolute inset-0 m-auto mt-[15vh]">
        <div className="flex gap-4">
          <div className="flex justify-start mb-4">
            <Link
              to={'/dashboard2'}
              className="text-white bg-sky-500 h-[6vh] border-[2px] px-4 py-2 rounded-2xl hover:bg-sky-700 font-semibold flex items-center shadow-lg"
            >
              Volver
            </Link>
          </div>

          <div className="bg-sky-500 text-white border-[2px] text-[20px] font-bold h-[6vh] w-[95%] flex justify-center items-center shadow-xl rounded-2xl">
            Mis Alumnos
          </div>
        </div>

        <div className="mt-4">
          <ul className="flex w-full h-[8vh] rounded-xl items-center bg-sky-300 text-center font-semibold">
            <li className="flex-1 ">Id</li>
            <li className="flex-1 ">Nombres</li>
            <li className="flex-1 ">Apellidos</li>
            <li className="flex-1 ">Email</li>
          </ul>
        </div>

        <div className="mt-[15px]">
          {students.map((alumno) => (
            <div
              className="flex text-center border-b items-center h-[8vh] shadow-lg rounded-xl bg-white mt-2"
              key={alumno._id}
            >
              <div className="flex-1 ">{alumno._id}</div>
              <div className="flex-1 ">{alumno.firstName}</div>
              <div className="flex-1 ">{alumno.lastName}</div>
              <div className="flex-1 ">{alumno.email}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
