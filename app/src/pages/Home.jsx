// import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container py-20 mx-auto text-center animate-fadeIn">
      <h2 className="text-5xl font-bold text-gray-800">Welcome to the RBAC System</h2>
      <p className="mt-4 text-xl text-gray-600">
        Manage access and permissions efficiently with our Role-Based Access Control System.
      </p>
      <div className="mt-8">
        <Link to="/login" className="px-6 py-3 text-lg text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Log In
        </Link>
        <Link to="/register" className="ml-4 px-6 py-3 text-lg text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
          Register
        </Link>
      </div>
      {/* <div className="mt-12">
        <img src" alt="RBAC Illustration" className="mx-auto w-1/2" />
      </div> */}
    </div>
  );
};

export default Home;