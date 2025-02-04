import React, { useState } from "react";

const RoomBooking = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchDetails = {
      checkIn,
      checkOut,
      adults,
      children,
      rooms,
    };
    console.log("Search Details:", searchDetails);
  };

  return (
    <div>
     <p className="fs-4">Please fill in the details below to book your room:</p>
      <form className="row g-3 align-items-center w-100" onSubmit={handleSearch}>
        <div className="col-md-2">
          <h4 className="fs-6">Check-In Date:</h4>
          <input
            type="date"
            className="form-control"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <h4 className="fs-6">Check-Out Date:</h4>
          <input
            type="date"
            className="form-control"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
        <div className="col-md-1">
          <h4 className="fs-6">Adults:</h4>
          <input
            type="number"
            className="form-control"
            placeholder="Adults"
            value={adults}
            min="1"
            onChange={(e) => setAdults(e.target.value)}
          />
        </div>
        <div className="col-md-1">
          <h4 className="fs-6">Children:</h4>
          <input
            type="number"
            className="form-control"
            placeholder="Children"
            value={children}
            min="0"
            onChange={(e) => setChildren(e.target.value)}
          />
        </div>
        <div className="col-md-1">
          <h4 className="fs-6">Rooms:</h4>
          <input
            type="number"
            className="form-control"
            placeholder="Rooms"
            value={rooms}
            min="1"
            onChange={(e) => setRooms(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary btn-sm w-50">
            Submit
          </button>
        </div>
      </form>
      {/* <p
  className="card-text fs-24"
  style={{
    fontSize: "20px",        // Increased font size (adjust as needed)
    lineHeight: "1.8",       // Slightly more spacing for better readability
    textAlign: "center",     // Center-align the text
    margin: "0 auto",        // Optional: helps center the paragraph block
  }}
>
 Rooms Unavabile! would you resquest youto refer  to the calender  <br />
  To create your own holiday hamper, please contact our holiday expert @ +91 8110008877.
</p> */} 




    <p style={{ fontSize: "18px", color: "red", fontWeight: "bold" }}>
  Sorry, all rooms are currently unavailable!
</p>
<p style={{ fontSize: "16px" }}>
  Unfortunately, there are no rooms available for the selected dates. Please try the following options:
</p>
<ul style={{ fontSize: "16px" }}>
  <li>Choose different check-in and check-out dates.</li>
  <li>Reduce the number of rooms or adjust the number of guests.</li>
  <li>Contact our reservation team for assistance with alternative options.</li>
</ul>
<p style={{ fontSize: "16px" }}>
  For further assistance, please reach out to us at <strong>+1-800-123-4567</strong> or email us at <strong>reservations@resortbooking.com</strong>.
</p>

    </div>
  );
};

export default RoomBooking;
