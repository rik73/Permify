import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import RolesPage from "./pages/RolesPage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header title="RBAC Management" />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/roles" element={<RolesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
