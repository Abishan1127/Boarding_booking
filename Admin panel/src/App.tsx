import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./Pages/AdminDashboard";
import ManageUniversities from "./Pages/ManageUniversities";
import ManageBoardings from "./Pages/ManageBoardings";
import ManageRooms from "./Pages/ManageRooms";
import BoardingForm from "./components/BoardingForm";
import RoomForm from "./components/RoomForm";
import UniversityForm from "./components/UniversityForm";
import Dashboard from "./components/Dashboard";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="admin-container">
        <Dashboard />
        <div className="admin-content">
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/universities" element={<ManageUniversities />} />
            <Route path="/universities/add" element={<UniversityForm />} />
            <Route path="/boardings" element={<ManageBoardings />} />
            <Route path="/boardings/add" element={<BoardingForm />} />
            <Route path="/rooms" element={<ManageRooms />} />
            <Route path="/rooms/add" element={<RoomForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
