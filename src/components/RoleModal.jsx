import { useState } from "react";

const RoleModal = ({ onSave, role, permissions, onClose }) => {
  const [formData, setFormData] = useState(
    role || { name: "", permissions: [] }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePermissionToggle = (permission) => {
    setFormData((prev) => {
      const updatedPermissions = prev.permissions.includes(permission)
        ? prev.permissions.filter((p) => p !== permission)
        : [...prev.permissions, permission];
      return { ...prev, permissions: updatedPermissions };
    });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-bold mb-4">
          {role ? "Edit Role" : "Add Role"}
        </h2>
        <input
          name="name"
          placeholder="Role Name"
          value={formData.name || ""}
          onChange={handleChange}
          className="border border-gray-300 px-2 py-1 mb-4 w-full"
        />
        <div className="mb-4">
          <h3 className="text-md font-bold mb-2">Permissions</h3>
          {permissions.map((permission) => (
            <label key={permission} className="block mb-1">
              <input
                type="checkbox"
                checked={formData.permissions.includes(permission)}
                onChange={() => handlePermissionToggle(permission)}
              />
              <span className="ml-2">{permission}</span>
            </label>
          ))}
        </div>
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

export default RoleModal;
