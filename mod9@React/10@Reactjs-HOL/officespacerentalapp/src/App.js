import React from "react";

function App() {

  const office = {
    Name: "Skyline Tech Park",
    Rent: 55000,
    Address: "Madhapur, Hyderabad"
  };

  const officeSpaces = [
    {
      Name: "Skyline Tech Park",
      Rent: 55000,
      Address: "Madhapur, Hyderabad"
    },
    {
      Name: "Cyber Towers",
      Rent: 75000,
      Address: "Hitech City, Hyderabad"
    },
    {
      Name: "Mindspace",
      Rent: 90000,
      Address: "Gachibowli, Hyderabad"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Office Space Rental App</h1>

      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
        alt="Office Space"
        style={{
          width: "500px",
          height: "300px"
        }}
      />

      <h2>Featured Office</h2>

      <p><strong>Name:</strong> {office.Name}</p>

      <p>
        <strong>Rent:</strong>{" "}
        <span
          style={{
            color: office.Rent < 60000 ? "red" : "green"
          }}
        >
          ₹{office.Rent}
        </span>
      </p>

      <p><strong>Address:</strong> {office.Address}</p>

      <h2>Available Office Spaces</h2>

      {officeSpaces.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px 0",
            width: "500px"
          }}
        >
          <p><strong>Name:</strong> {item.Name}</p>

          <p>
            <strong>Rent:</strong>{" "}
            <span
              style={{
                color: item.Rent < 60000 ? "red" : "green"
              }}
            >
              ₹{item.Rent}
            </span>
          </p>

          <p><strong>Address:</strong> {item.Address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;