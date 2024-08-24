import React from "react";

export default function Navbar({ heading }) {
  function handleSignup() {
    console.log("hi");
  }

  function handleLogin() {
    console.log("hi");
  }

  return (
    <nav className="bg-white-100 w-full">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a className="text-3xl font-extrabold text-emerald-500 font-sans">
          MessMate
        </a>
        <div className="flex-grow text-center">
          <h1 className="text-xl font-semibold">{heading}</h1>
        </div>
        <div className="flex space-x-4">
          <form role="search" onSubmit={handleSignup}>
            <button
              className="bg-blue-900 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit"
            >
              Signup
            </button>
          </form>
          <form role="search" onSubmit={handleLogin}>
            <button
              className="bg-emerald-500 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-green-600"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
