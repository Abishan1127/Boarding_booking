import React from "react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/admin/universities">Manage Universities</Link></li>
          <li><Link to="/admin/boardings">Manage Boardings</Link></li>
          <li><Link to="/admin/rooms">Manage Rooms</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
