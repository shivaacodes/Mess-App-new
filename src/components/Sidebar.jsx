import React, { useState, useEffect, useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to detect clicks outside the sidebar
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      <button
        onClick={toggleSidebar}
        className="m-4 p-2 bg-transparent text-blue-900 rounded-full border-none"
        aria-label="Toggle sidebar"
      >
        <i className="fa-solid fa-bars fa-xl"></i>
      </button>

      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold">Menu</h2>
          <ul className="mt-4 space-y-4">
            <li>
              <a
                href="#"
                className="block px-2 py-1 hover:bg-gray-700 rounded-lg font-semibold"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-2 py-1 hover:bg-gray-700 rounded-lg font-semibold"
              >
                Mess Fees
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-2 py-1 hover:bg-gray-700 rounded-lg font-semibold"
              >
                Mess Cut
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-2 py-1 hover:bg-gray-700 rounded-lg font-semibold "
              >
                Feedback
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
