import React, { useState } from "react";

const RoomForm: React.FC = () => {
  const [boardingId, setBoardingId] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/rooms/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ boarding_id: boardingId, type, price, available }),
    });
    setBoardingId("");
    setType("");
    setPrice("");
    setAvailable(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={boardingId} onChange={(e) => setBoardingId(e.target.value)} placeholder="Boarding ID" />
      <input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="Room Type" />
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
      <label>
        Available:
        <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
      </label>
      <button type="submit">Add Room</button>
    </form>
  );
};

export default RoomForm;
