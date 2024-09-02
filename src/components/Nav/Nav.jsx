import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import book from "./Icons/logo.jpeg";
import { AuthContext } from "../../context/AuthContext";

export const Nav = () => {
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
              <Link to="/dashboard">Home</Link>
            </li>
            <li className="hover:underline">
              <Link to="/examenes">Exams</Link>
            </li>
            <li className="hover:underline">
              <Link to="/videos">Videos</Link>
            </li>
            <li className="hover:underline">
              <Link to="/calificaciones">Calificaciones</Link>
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
