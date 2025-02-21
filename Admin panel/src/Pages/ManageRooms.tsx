import React, { useEffect, useState } from "react";

const ManageRooms: React.FC = () => {
  const [rooms, setRooms] = useState([]);
  const [boardingId, setBoardingId] = useState("");

  useEffect(() => {
    if (boardingId) {
      fetch(`http://localhost:5000/api/rooms/${boardingId}`)
        .then((res) => res.json())
        .then((data) => setRooms(data));
    }
  }, [boardingId]);

  return (
    <div>
      <h2>Manage Rooms</h2>
      <input type="text" placeholder="Enter Boarding ID" onChange={(e) => setBoardingId(e.target.value)} />
      <ul>
        {rooms.map((room: any) => (
          <li key={room.id}>{room.type} - ${room.price} {room.available ? "(Available)" : "(Not Available)"}</li>
        ))}
      </ul>
    </div>
  );
};

export default ManageRooms;
