import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to open/close the sidebar */}
      <button
        onClick={toggleSidebar}
        className="m-4 p-2 text-white bg-gray-700 rounded"
        aria-label="Toggle sidebar"
      >
        <i className="px-4 py-4 fa-xl fa-solid fa-bars"></i>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Menu</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="block px-2 py-1 hover:bg-gray-700 rounded">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-1 hover:bg-gray-700 rounded">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-1 hover:bg-gray-700 rounded">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-1 hover:bg-gray-700 rounded">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
