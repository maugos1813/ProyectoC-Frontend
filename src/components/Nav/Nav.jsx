import React from "react";
import { Link, Outlet } from "react-router-dom";
import book from "./Icons/logo.jpeg";

export const Nav = () => {
  return (
    <div className="bg-[#0a8537] flex justify-between h-[10vh] items-center">
      <img src={book} alt="book icon" className="w-[42px] h-[42px] ml-[30px] rounded-xl" />
      <nav className="flex items-center">
        <ul className="flex gap-8 px-[30px] text-white">
          <li className="hover:underline">
            <Link to="/">Welcome</Link>
          </li>
          <li className="hover:underline">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="hover:underline">
            <Link to="/exams">Exams</Link>
          </li>
          <li className="hover:underline">
            <Link to="/videos">Videos</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
