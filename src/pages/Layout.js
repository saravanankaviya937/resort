
// // import { Outlet,Link } from "react-router-dom";
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './Layout.css';
// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Layout.css';
// const Layout=()=>{
//             // State variables for search bar inputs
//   const [destination, setDestination] = useState("");
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [rooms, setRooms] = useState(1);

//   // Define the handleSearch function
//   const handleSearch = (e) => {
//     e.preventDefault(); // Prevent the default form submission
//     const searchDetails = {
//       destination,
//       checkIn,
//       checkOut,
//       adults,
//       children,
//       rooms,
//     };
//     console.log("Search Details:", searchDetails); // Log the details to the console
//   };

//     return (
//         <div>
//             {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand" to="/">MyApp</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/">Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/blogs">Blogs</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/contact">Contact</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav> */}


// <nav class="navbar navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Aqua Safe</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">About</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Contact</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Signout</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul class="dropdown-menu">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             <li><hr class="dropdown-divider"/></li>
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//       </ul>
    
//     </div>
//   </div>
//    </nav> 
//                                {/* Second Navbar with Search Bar */}
// <nav className="navbar navbar-light bg-light">
//   <div className="container-fluid">
//     <form className="row g-3 align-items-center w-100" onSubmit={handleSearch}>
//       <div className="col-md-3"> <h2 className="fs-4">Which place do you want to go?</h2>
//         <input type="text" className="form-control" placeholder="Destination"value={destination} onChange={(e) => setDestination(e.target.value)} />
//       </div>
//       <div className="col-md-2"> <h4 className="fs-6">Check-In Date:</h4>
//       <input type="date" className="form-control"value={checkIn}onChange={(e) => setCheckIn(e.target.value)}/>
//       </div>
//       <div className="col-md-2"> <h4 className="fs-6">Check-In Date:</h4>
//         <input type="date"className="form-control"  value={checkOut}onChange={(e) => setCheckOut(e.target.value)}/>
//       </div>
//       <div className="col-md-1">  <h4 className="fs-6">Adluts:</h4>
//        <input type="number"className="form-control"placeholder="Adults"value={adults}min="1"  onChange={(e) => setAdults(e.target.value)} />
//       </div>
//       <div className="col-md-1">   <h4 className="fs-6">Children:</h4>
//         <input type="number"  className="form-control"  placeholder="Children" value={children}min="0"onChange={(e) => setChildren(e.target.value)}/>
//       </div>
//       <div className="col-md-1">   <h4 className="fs-6">Rooms:</h4>
//         <input  type="number"  className="form-control"  placeholder="Rooms"  value={rooms} min="1" onChange={(e) => setRooms(e.target.value)} />
//       </div>
//       <div className="col-md-2"> 
//         <button type="submit" className="btn btn-primary w-100">Submit  </button>
//       </div>
//     </form>
//   </div>
// </nav>

//             <Outlet />
//         </div>
//     )
// }
// export default Layout;
  

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Layout.css';

const Layout = () => {
 

  return (
    <div>
      {/* First Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Glyngarth Resort</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link "href="/Cottages">Cottages </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Ourstory">Ourstories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Home">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Giftvoucher">GiftVoucher</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Acitivity">Acitivity</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/BookNow">BookNow</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

      {/* Removed second navbar */}

      {/* Search form */}


      <Outlet />
    </div>
  );
};

export default Layout;
