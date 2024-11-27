import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UsersPage from "./pages/UsersPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setAuth(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setAuth(null);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={!auth ? <LoginPage setAuth={setAuth} /> : <Navigate to={auth.role === "Admin" ? "/admin" : "/register"} />}
        />
        <Route
          path="/admin"
          element={auth?.role === "Admin" ? <UsersPage /> : <Navigate to="/login" />}
        />
                <Route path="/register" element={<RegisterPage />} />

        <Route path="*" element={<Navigate to="/login" />} />
        
      </Routes>
      {auth && (
        <div className="fixed bottom-0 left-0 p-4">
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>
      )}
    </Router>
  );
};

export default App;
