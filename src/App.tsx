import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/sb-admin-2.min.css";
import LoginPage from "./pages/account/LoginPage";
import AdminPage from "./pages/admin/AdminPage";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
