// import React from "react";
import { useUsers } from "../context/UserContext";

const UserDashboard = () => {
  const { users } = useUsers();
  const currentUser = users.find(user => user.id === "user1"); // Replace "user1" with the actual logged-in user ID

  return (
    <div className="container py-10 mx-auto animate-fadeIn">
      <h2 className="text-3xl font-semibold text-gray-800">User Dashboard</h2>
      <p className="mt-4 text-lg text-gray-600">
        Users have limited access to view their own data.
      </p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">My Information</h3>
        <table className="w-full mt-4 bg-white border rounded shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">User ID</th>
              <th className="px-4 py-2 border">Role</th>
            </tr>
          </thead>
          <tbody>
            {currentUser ? (
              <tr className="hover:bg-gray-100">
                <td className="px-4 py-2 border">{currentUser.id}</td>
                <td className="px-4 py-2 border">{currentUser.role}</td>
              </tr>
            ) : (
              <tr>
                <td colSpan="2" className="px-4 py-2 border text-center text-gray-500">
                  No user data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDashboard;