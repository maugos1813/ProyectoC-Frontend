import React, { useState, useEffect } from "react";

export const Tablas = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const rs = await fetch("/usuarios.json");
    const jsonRs = await rs.json();
    setData(jsonRs);
    console.log(jsonRs);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col border bg-green-400 h-screen">
      <table className="flex flex-col border border-emerald-600 bg-green-300 w-[90%] h-[90%] absolute left-0 right-0 mx-auto top-0 bottom-0 my-auto">
        <caption>Mis Alumnos</caption>
        <thead className="flex justify-around border">
          <tr>
            <th>Id</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr className="flex justify-between" key={item.id}>
              <td className="border">{item.id}</td>
              <td className="border">{item.nombre}</td>
              <td className="border">{item.apellido}</td>
              <td className="border">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
