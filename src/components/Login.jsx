import React, { useContext } from "react";
//import { FaUser, FaLock } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  const { loginMutation } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
console.log(data);
    await loginMutation.mutateAsync(data);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-10">
      <div className="bg-white p-8 shadow-md w-80 transform -translate-y-1/6 rounded-2xl border-[2px] border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Login</h2>
        <p className="mb-4">
          Enter your email and password to access your account
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <div className="flex items-center border rounded">
             {/*  <FaUser className="text-gray-500 ml-2" /> */}
              <input
                type="email"
                placeholder="me@example.com"
                name="email"
                className="w-full px-3 py-2 border-none rounded-r"
                id="email"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <div className="flex items-center border rounded">
             {/*  <FaLock className="text-gray-500 ml-2" /> */}
              <input
                type="text"
                className="w-full px-3 py-2 border-none rounded-r"
                name="password"
                id="password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

