import React, { useContext } from "react";
import { AlumnsContext } from "../context/AlumnsContext.jsx";

export const Tablas = () => {
  const { alumnos, isLoading, isError } = useContext(AlumnsContext);

  if (isLoading) {
    return <div>Cargando alumnos...</div>;
  }

  if (isError) {
    return <div>Error al cargar los alumnos</div>;
  }

  const students = alumnos.filter(alumno => alumno.type === "student")

  return (
    <div className="flex flex-col border bg-gray-900 h-[130vh]">
      <div className="w-[90%] h-[90%] absolute inset-0 m-auto">
        <div className="border border-green-600 bg-green-500 text-white font-bold h-[6%] flex justify-center items-center shadow-xl rounded-t-2xl">
          Mis Alumnos
        </div>
        <table className="border-[3px] border-emerald-600 w-full bg-white">
          <thead>
            <tr className="flex w-full h-[5vh] border items-center bg-green-300">
              <th className="flex-1 ">Id</th>
              <th className="flex-1 ">Nombres</th>
              <th className="flex-1 ">Apellidos</th>
              <th className="flex-1 ">Email</th>
              {/* <th className="flex-1">Nota</th> */}
            </tr>
          </thead>
          <tbody>
            {students.map((alumno) => (
              <tr
                className="flex text-center border-b items-center h-[5vh]"
                key={alumno.id}
              >
                <td className="flex-1 ">{alumno._id}</td>
                <td className="flex-1 ">{alumno.firstName}</td>
                <td className="flex-1 ">{alumno.lastName}</td>
                <td className="flex-1 ">{alumno.email}</td>
                {/* <td className="flex-1 ">{alumno.nota}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};