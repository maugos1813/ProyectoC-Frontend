import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import fondo from "../public/lice.jpeg";

export const Login = () => {
  const { loginMutation } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    await loginMutation.mutateAsync(data);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="bg-white p-8 shadow-2xl w-80 transform -translate-y-1/6 rounded-2xl border-[2px] border-sky-300">
        <h2 className="text-2xl font-bold mb-4 text-sky-300">Login</h2>
        <p className="mb-4">
          Enter your email and password to access your account
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <div className="flex items-center border rounded">
              <input
                type="email"
                placeholder="me@example.com"
                name="email"
                className="w-full px-3 py-2 border-none rounded"
                id="email"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <div className="flex items-center border rounded">
              <input
                type="text"
                className="w-full px-3 py-2 border-none rounded"
                name="password"
                id="password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-sky-300 text-white py-2 rounded hover:bg-sky-600 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};