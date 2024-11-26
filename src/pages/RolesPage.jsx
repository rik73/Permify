import { useEffect, useState } from "react";
import { getRoles, addRole, updateRole, deleteRole } from "../services/api";
import Table from "../components/Table";
import RoleModal from "../components/RoleModal";

const RolesPage = () => {
  const [roles, setRoles] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const permissionsList = ["Read", "Write", "Delete"];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const rolesRes = await getRoles();
    setRoles(rolesRes.data);
  };

  const handleSaveRole = async (role) => {
    if (role.id) {
      await updateRole(role.id, role);
    } else {
      await addRole(role);
    }
    fetchData();
  };

  const handleDeleteRole = async (id) => {
    await deleteRole(id);
    fetchData();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Role Management</h1>
      <button
        onClick={() => {
          setSelectedRole(null);
          setModalVisible(true);
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Role
      </button>
      <Table
        columns={["Name", "Permissions"]}
        data={roles.map((role) => ({
          ...role,
          permissions: role.permissions.join(", "),
        }))}
        onEdit={(role) => {
          setSelectedRole(role);
          setModalVisible(true);
        }}
        onDelete={handleDeleteRole}
      />
      {modalVisible && (
        <RoleModal
          role={selectedRole}
          permissions={permissionsList}
          onSave={handleSaveRole}
          onClose={() => setModalVisible(false)}
        />
      )}
    </div>
  );
};

export default RolesPage;
