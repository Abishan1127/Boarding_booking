import React, { useState } from "react";

const BoardingForm: React.FC = () => {
  const [universityId, setUniversityId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/boardings/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ university_id: universityId, name, address }),
    });
    setUniversityId("");
    setName("");
    setAddress("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={universityId} onChange={(e) => setUniversityId(e.target.value)} placeholder="University ID" />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Boarding Name" />
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
      <button type="submit">Add Boarding</button>
    </form>
  );
};

export default BoardingForm;
