import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "User",
    status: "Active",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/users", formData);
      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError("Failed to register. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gray-100">
    <div className="w-full max-w-sm lg:max-w-md bg-white p-8 rounded shadow-lg">
      <h2 className="text-2xl text-darkBlue font-bold mb-4 text-center">Registration</h2>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="border border-gray-300 px-4 py-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-darkBlue"
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border border-gray-300 px-4 py-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-darkBlue"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="border border-gray-300 px-4 py-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-darkBlue"
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="border border-gray-300 px-4 py-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-darkBlue"
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        onClick={handleRegister}
        className="bg-darkBlue text-white px-4 py-2 rounded w-full  focus:outline-none focus:ring-2 focus:ring-darkBlue focus:ring-offset-2"
      >
        Register
      </button>
    </div>
  </div>
  
  );
};

export default RegisterPage;
