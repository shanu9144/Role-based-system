import  { useState } from "react";
import { useUsers} from "../context/UserContext";

const AdminDashboard = () => {
  const { users, addUser, deleteUser, updateUser } = useUsers();
  const [newUser, setNewUser] = useState({ id: "", password: "", role: "User" });

  const handleAddUser = () => {
    addUser(newUser);
    setNewUser({ id: "", password: "", role: "User" });
  };

  const handleDeleteUser = (id) => {
    deleteUser(id);
  };

  const handleUpdateRole = (id, newRole) => {
    const updatedUser = users.find(user => user.id === id);
    if (updatedUser) {
      updateUser(id, { ...updatedUser, role: newRole });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Role</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-2 border">{user.id}</td>
              <td className="px-4 py-2 border">
                <select
                  value={user.role}
                  onChange={(e) => handleUpdateRole(user.id, e.target.value)}
                  className="p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label={`Change role for ${user.id}`}
                >
                  <option value="User">User</option>
                  <option value="Super User">Super User</option>
                  <option value="Admin">Admin</option>
                </select>
              </td>
              <td className="px-4 py-2 border">
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label={`Delete user ${user.id}`}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Add New User</h2>
        <input
          type="text"
          placeholder="ID"
          value={newUser.id}
          onChange={(e) => setNewUser({ ...newUser, id: e.target.value })}
          className="p-2 border rounded mr-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          className="p-2 border rounded mr-2"
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          className="p-2 border rounded mr-2"
        >
          <option value="User">User</option>
          <option value="Super User">Super User</option>
          <option value="Admin">Admin</option>
        </select>
        <button
          onClick={handleAddUser}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add User
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;