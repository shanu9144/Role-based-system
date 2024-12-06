// import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSignInAlt, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="p-4 text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center space-x-2">
          <img src="src\assets\access-control.png" alt="Logo" className="h-8 w-8" />
          <h1 className="text-2xl font-bold">RBAC System</h1>
        </div>
        <div className="space-x-4 flex items-center">
          <Link to="/" className="hover:underline flex items-center space-x-1">
            <FaHome />
            <span>Home</span>
          </Link>
          <Link to="/login" className="hover:underline flex items-center space-x-1">
            <FaSignInAlt />
            <span>Login</span>
          </Link>
          <div className="relative group">
            <button className="flex items-center space-x-1">
              <FaUserCircle />
              <span>Profile</span>
            </button>
            <div className="absolute right-0 hidden mt-2 w-48 bg-white text-black rounded-lg shadow-lg group-hover:block">
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-200">View Profile</Link>
              <Link to="/settings" className="block px-4 py-2 hover:bg-gray-200">Settings</Link>
              <Link to="/logout" className="block px-4 py-2 hover:bg-gray-200">Logout</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;