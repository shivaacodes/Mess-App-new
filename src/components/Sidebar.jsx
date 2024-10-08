import React, { useRef, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      isOpen
    ) {
      toggleSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
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
              <Link
                to="/"
                className="block px-2 py-1 hover:bg-gray-700 rounded-lg font-semibold"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/messfee"
                className="block px-2 py-1 hover:bg-gray-700 rounded-lg font-semibold"
              >
                Mess Fees
              </Link>
            </li>
            <li>
              <a
                href="/messcut"
                className="block px-2 py-1 hover:bg-gray-700 rounded-lg font-semibold"
              >
                Mess Cut
              </a>
            </li>
            <li>
              <a
                href="/feedback"
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
