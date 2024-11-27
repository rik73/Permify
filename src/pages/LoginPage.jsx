import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.get("http://localhost:5000/users");
      const user = res.data.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        
        localStorage.setItem("user", JSON.stringify(user));
        setAuth(user);
        navigate(user.role === "Admin" ? "/admin" : "/register");
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    }
  };

  return (
<div className="flex justify-center items-center min-h-screen p-4 bg-gray-100">
  <div className="w-full max-w-xs md:max-w-sm lg:max-w-md bg-white p-6 rounded shadow-lg">
    <h2 className="text-xl md:text-2xl font-bold mb-4 text-darkBlue text-center">
      Admin Login
    </h2>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="border border-gray-300 px-4 py-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-darkBlue"
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="border border-gray-300 px-4 py-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-darkBlue"
    />
    {error && <p className="text-red-500 mb-4">{error}</p>}
    <button
      onClick={handleLogin}
      className="bg-darkBlue text-white px-4 py-2 rounded w-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-darkBlue focus:ring-offset-2"
    >
      Login
    </button>
    <p className="text-center text-darkBlue mt-4">
      New User?{" "}
      <button
        onClick={() => navigate("/register")} 
        className="text-blue-500 underline  focus:outline-none"
      >
        Register
      </button>
    </p>
  </div>
</div>

  );
};

export default LoginPage;
