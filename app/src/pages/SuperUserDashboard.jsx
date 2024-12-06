// import React from "react";
import { useUsers } from "../context/UserContext";

const SuperUserDashboard = () => {
  const { users } = useUsers();

  return (
    <div className="container py-10 mx-auto animate-fadeIn">
      <h2 className="text-3xl font-semibold text-gray-800">Super User Dashboard</h2>
      <p className="mt-4 text-lg text-gray-600">
        Super Users have elevated access to manage and view data.
      </p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">User Information</h3>
        <table className="w-full mt-4 bg-white border rounded shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">User ID</th>
              <th className="px-4 py-2 border">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border">{user.id}</td>
                <td className="px-4 py-2 border">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SuperUserDashboard;