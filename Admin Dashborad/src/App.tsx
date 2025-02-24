import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./componts/Sidebar";
import Users from "./componts/Users";
import Bookings from "./componts/Booking";
import Events from "./componts/Events";
import University from "./componts/University";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      
        <Sidebar />
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/events" element={<Events />} />
            <Route path="/Universities" element={<University />} />
          </Routes>
      
    </Router>
  );
};

export default App;
