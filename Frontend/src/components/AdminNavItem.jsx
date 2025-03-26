import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminNavItem = () => {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  if (!isAdmin) return null;

  return (
    <div className="flex items-center space-x-4">
      <Link
        to="/donated-items"
        className="bg-yellow-500 text-white px-4 py-1 rounded-full font-medium hover:bg-yellow-600 transition duration-200"
      >
        Donated Items
      </Link>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-1 rounded-full font-medium hover:bg-red-600 transition duration-200"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminNavItem;
