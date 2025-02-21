import React, { useEffect, useState } from "react";

const ManageBoardings: React.FC = () => {
  const [boardings, setBoardings] = useState([]);
  const [universityId, setUniversityId] = useState("");

  useEffect(() => {
    if (universityId) {
      fetch(`http://localhost:5000/api/boardings/${universityId}`)
        .then((res) => res.json())
        .then((data) => setBoardings(data));
    }
  }, [universityId]);

  return (
    <div>
      <h2>Manage Boardings</h2>
      <input type="text" placeholder="Enter University ID" onChange={(e) => setUniversityId(e.target.value)} />
      <ul>
        {boardings.map((boarding: any) => (
          <li key={boarding.id}>{boarding.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ManageBoardings;
