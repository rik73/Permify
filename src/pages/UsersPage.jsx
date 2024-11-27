import { useEffect, useState } from "react";
import { getUsers, addUser, updateUser, deleteUser, getRoles } from "../services/api";
import Table from "../components/Table";
import UserModal from "../components/UserModal";
import './UsersPage.css';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
          const res = await getUsers();

    const [usersRes, rolesRes] = await Promise.all([getUsers(), getRoles()]);
    const filteredUsers = res.data.filter((user) => user.role === "User");

      setUsers(filteredUsers);
    setRoles(rolesRes.data);
  };

  const handleSaveUser = async (user) => {
    if (user.id) {
      await updateUser(user.id, user);
    } else {
      await addUser(user);
    }
    fetchData();
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    fetchData();
  };

  return (
    <div className="user-management-wrapper">
      <h1 className="title">User Management</h1>
      <button
        onClick={() => {
          setSelectedUser(null);
          setModalVisible(true);
        }}
        className="add-user-btn "
      >
        Add User
      </button>
      <Table
        columns={["Name", "Email", "Role", "Status"]}
        data={users}
        onEdit={(user) => {
          setSelectedUser(user);
          setModalVisible(true);
        }}
        onDelete={handleDeleteUser}
      />
      {modalVisible && (
        <UserModal
          user={selectedUser}
          roles={roles}
          onSave={handleSaveUser}
          onClose={() => setModalVisible(false)}
        />
      )}
    </div>
  );
};

export default UsersPage;
