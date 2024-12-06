import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "../src/context/UserContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import SuperUserDashboard from "./pages/SuperUserDashboard";
import UserDashboard from "./pages/UserDashboard";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/superuser" element={<SuperUserDashboard />} />
            <Route path="/user" element={<UserDashboard />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;