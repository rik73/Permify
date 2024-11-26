import { useState } from "react";

const UserModal = ({ onSave, user, roles, onClose }) => {
  const [formData, setFormData] = useState(user || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-bold mb-4">
          {user ? "Edit User" : "Add User"}
        </h2>
        <input
          name="name"
          placeholder="Name"
          value={formData.name || ""}
          onChange={handleChange}
          className="border border-gray-300 px-2 py-1 mb-2 w-full"
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email || ""}
          onChange={handleChange}
          className="border border-gray-300 px-2 py-1 mb-2 w-full"
        />
        <select
          name="role"
          value={formData.role || ""}
          onChange={handleChange}
          className="border border-gray-300 px-2 py-1 mb-2 w-full"
        >
          <option value="">Select Role</option>
          {roles.map((role) => (
            <option key={role.id} value={role.name}>
              {role.name}
            </option>
          ))}
        </select>
        <select
          name="status"
          value={formData.status || ""}
          onChange={handleChange}
          className="border border-gray-300 px-2 py-1 mb-2 w-full"
        >
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Save
        </button>
        <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UserModal;
