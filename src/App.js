import "./App.css";
import Header from "./Components/Layout/Header";
import "react-toastify/dist/ReactToastify.css";
// function App() {
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./Components/Pages/Dashboard/AdminDashboard";
import EmployeeDashboard from "./Components/Pages/Dashboard/EmployeeDashboard";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Layout/Sidebar";
import Employees from "./Components/Pages/Employees";
function App() {
  return (
    <>
      <Header />
      <Sidebar/>
      <Routes>
        {/* ------------Dashboard---------- */}
        <Route exact path="/" element={<AdminDashboard />} />
        <Route exact path="/employee-dashboard" element={<EmployeeDashboard />} />
        {/* ------------Dashboard-----End----- */}
        <Route exact path="/employees" element={<Employees />} />

      </Routes>

      {/* <ToastContainer /> */}
    </>
  );
}

export default App;
