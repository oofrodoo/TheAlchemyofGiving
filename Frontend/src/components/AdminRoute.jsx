import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            You're not her bru 😂
          </h1>
          <p className="text-xl text-gray-600">
            This page is for admins only 🤣
          </p>
        </div>
      </div>
    );
  }

  return children;
};

export default AdminRoute;
