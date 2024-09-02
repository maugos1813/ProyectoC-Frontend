import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import book from "../components/Nav/Icons/logo.jpeg";
import { AuthContext } from "../context/AuthContext";

export const NavM = () => {
  const {logoout} = useContext(AuthContext)

  return (
    <div className="">
      <div className="bg-sky-400 flex justify-between h-[10vh] items-center rounded-3xl mt-2">
        <img
          src={book}
          alt="book icon"
          className="w-[5vh] h-[5vh] ml-[30px] rounded-xl"
        />
        <nav className="flex items-center">
          <ul className="flex gap-8 px-[30px] text-white">
            <li className="hover:underline">
              <Link to="/dashboard2">Home</Link>
            </li>
            <li className="hover:underline">
              <Link to="/courses">Cursos</Link>
            </li>
            {/* <li className="hover:underline">
              <Link to="/editexams">Exámenes</Link>
            </li> */}
            <li className="hover:underline">
              <Link to="/tablas">Mis Alumnos</Link>
            </li>
            <li className="hover:underline">
              <Link to="/creation">Nuevo Exámen</Link>
            </li>
            <li className="hover:underline">
            <button onClick={logoout} className="text-white">Logout</button>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet/>
    </div>
  );
};
