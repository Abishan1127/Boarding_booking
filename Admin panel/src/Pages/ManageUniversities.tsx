import React, { useEffect, useState } from "react";

const ManageUniversities: React.FC = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/universities")
      .then((res) => res.json())
      .then((data) => setUniversities(data));
  }, []);

  return (
    <div>
      <h2>Manage Universities</h2>
      <ul>
        {universities.map((uni: any) => (
          <li key={uni.id}>{uni.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUniversities;
