

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensures Bootstrap JS is loaded
import apart1 from "./images/apart1.jpg";
import apart3 from "./images/apart3.jpg";
import apart2 from "./images/apart2.jpg";
import glyn10 from "./images/glyn10.jpg";
import glyn12 from "./images/glyn12.jpg";
import glyn11 from "./images/glyn11.jpg";
import glyn14 from "./images/glyn14.jpg";
import glyn13 from "./images/glyn13.jpg";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import "./Home.css";

const Acitivity = () => {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={glyn14} className="d-block w-100" alt="Apartment 1" height="500px" />
          </div>
          <div className="carousel-item">
            <img src={glyn11} className="d-block w-100" alt="Apartment 3" height="500px" />
          </div>
          <div className="carousel-item">
            <img src={glyn12} className="d-block w-100" alt="Apartment 2" height="500px" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/*  complimentarty card */}
  <div className="text-center mt-4">
  <h6 style={{ color: "black",   fontSize: "xx-large",  position: "relative",  display: "inline-block", paddingBottom: "5px", backgroundColor: "#f5f5f5",fontFamily: "'Arial', sans-serif" }}> 
    Complimentary Activities <span style={{content: '""', position: "absolute",    left: 0, bottom: 0, height: "2px", width: "100%",}} ></span></h6>
</div>

    { /* Card */}
<div className="container mt-5">
  <div
    className="card mb-3 shadow-lg"
    style={{ maxWidth: "1200px", minHeight: "300px", width: "100%", margin: "0 auto",  backgroundColor:" #FFFFFF",}}>
    <div className="row g-0 align-items-center">
      {/* Text Section (Left Side) */}
      <div className="col-md-6 p-3">
        <h5 className="card-title mt-4" style={{ fontSize: "28px", textAlign: "center", color: "#654321" }}>Activities</h5>
        <p className="card-text fs-24"style={{ lineHeight: "1.5", textAlign: "justify" }} >Tea plantation walk & Vegetation tour, Infinity swimming pool,carnival Games, Kids play area, Short trek, Archery, Volleyball,Badminton, Cricket, Dart Point, Trampoline, Cycling, Bonfire, Baking
          session with chef, Yoga on request (minimum 10 guests), Village life
          experiences (minimum 10 guests).</p>
        <h5 className="card-title mt-4" style={{ fontSize: "28px", textAlign: "center", color: "#654321" }} >Indoor Games  </h5>
        <p
          className="card-text fs-24"
          style={{ lineHeight: "1.5", textAlign: "justify" }}>Chess Board, Snake & Ladder, Ludo, Carrom, Board Games, Karaoke,
          Housie, Family Fun Activities, and Baking Sessions.
        </p>
      </div>

      {/* Image Section (Right Side) */}
      <div className="col-md-6">
        <img  src={glyn10}    className="img-fluid ms-5"alt="Destination"style={{ width: "100%", height: "400px", objectFit: "cover" }} />
      </div>
    </div>
  </div>
</div>
             {/*  paid card */}
  <div className="text-center mt-4">
  <h6 style={{ color: "black",   fontSize: "xx-large",  position: "relative",  display: "inline-block", paddingBottom: "5px", backgroundColor: "#f5f5f5",fontFamily: "'Arial', sans-serif" }}> 
    Paid  Activities <span style={{content: '""', position: "absolute",    left: 0, bottom: 0, height: "2px", width: "100%",}} ></span></h6>
</div>
     {/* paid card */}
                            <div className="container mt-5">
  <div
    className="card mb-3 shadow-lg"
    style={{ maxWidth: "1200px", minHeight: "300px", width: "100%", margin: "0 auto",  backgroundColor:" #FFFFFF",}}>
    <div className="row g-0 align-items-center">
      {/* Text Section (Left Side) */}
      <div className="col-md-6 p-3">
        
        <h5 className="card-title mt-4" style={{ fontSize: "28px", textAlign: "center", color: "#654321" }} >Masinagudi Jungle Safari  </h5>
        <p
          className="card-text fs-24"
          style={{ lineHeight: "1.5", textAlign: "justify" }}>Masinagudi Jungle SafariMudumalai and Bandipur Tiger Reserve organize van safaris into unspoiled core areas, the rides usually last anywhere between 45 minutes to an hour with every likelihood of spotting a variety of wildlife like tigers, leopards, sloth bears, elephants, bison, dholes and a variety of birds.
For 5 pax in a private jeep – safari 2 and half hours.
        </p>
      </div>

      {/* Image Section (Right Side) */}
      <div className="col-md-6">
        <img  src={glyn11}    className="img-fluid ms-5"alt="Destination"style={{ width: "100%", height: "400px", objectFit: "cover" }} />
      </div>
    </div>
  </div>
</div>
                                 {/* paid card */}
                            <div className="container mt-5">
  <div
    className="card mb-3 shadow-lg"
    style={{ maxWidth: "1200px", minHeight: "300px", width: "100%", margin: "0 auto",  backgroundColor:" #FFFFFF",}}>
    <div className="row g-0 align-items-center">
      {/* Text Section (Left Side) */}
      <div className="col-md-6 p-3">
        
        <h5 className="card-title mt-4" style={{ fontSize: "28px", textAlign: "center", color: "#654321" }} >Deep Jungle Trek ( Along with a guide) </h5>
        <p
          className="card-text fs-24"
          style={{ lineHeight: "1.5", textAlign: "justify" }}>Timing: 07.00 hrs to 12.00 noon, minimum group of 12pax, which will include water and sandwiches, trekking gears (to be brought in by the guest). The trek will be led by authorized guide for half day. Full day trek is possible on request at extra cost
        </p>
      </div>

      {/* Image Section (Right Side) */}
      <div className="col-md-6">
        <img  src={glyn12}    className="img-fluid ms-5"alt="Destination"style={{ width: "100%", height: "400px", objectFit: "cover" }} />
      </div>
    </div>
  </div>
</div>
                                                             {/* paid card */}
                                                             <div className="container mt-5">
  <div
    className="card mb-3 shadow-lg"
    style={{ maxWidth: "1200px", minHeight: "300px", width: "100%", margin: "0 auto",  backgroundColor:" #FFFFFF",}}>
    <div className="row g-0 align-items-center">
      {/* Text Section (Left Side) */}
      <div className="col-md-6 p-3">
        
        <h5 className="card-title mt-4" style={{ fontSize: "28px", textAlign: "center", color: "#654321" }} >Candle Light Dinner ( Along with a guide) </h5>
        <p
          className="card-text fs-24"
          style={{ lineHeight: "1.5", textAlign: "justify" }}> Dine by the light of candles with your loved one.
The dinner is a 5 course meal and serves 2 pax.</p>
      </div>

      {/* Image Section (Right Side) */}
      <div className="col-md-6">
        <img  src={glyn13}    className="img-fluid ms-5"alt="Destination"style={{ width: "100%", height: "400px", objectFit: "cover" }} />
      </div>
    </div>
  </div>
</div>          

 
  <footer style={{ backgroundColor: "#333", color: "#fff", padding: "20px 0", marginTop: "40px" }}>
       <div className="container text-center">
         <div className="row">
           {/* Contact Information */}
           <div className="col-md-4">
             <h5 style={{ color: "#ff6600" }}>Contact Us</h5>
             <p>Email: info@glyngarthresort.com</p>
             <p>Phone: +91 123 456 7890</p>
             <p>Location: Ooty, Tamil Nadu, India</p>
           </div>
 
           {/* Quick Links */}
           <div className="col-md-4">
             <h5 style={{ color: "#ff6600" }}>Quick Links</h5>
             <ul style={{ listStyle: "none", padding: 0 }}>
               <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
               <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>About Us</a></li>
               <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Our Cottages</a></li>
               <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Contact</a></li>
             </ul>
           </div>
 
           {/* Social Media Links */}
           <div className="col-md-4">
             <h5 style={{ color: "#ff6600" }}>Follow Us</h5>
             <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
               <a href="#" style={{ color: "#fff", fontSize: "20px" }}><FaFacebookF /></a>
               <a href="#" style={{ color: "#fff", fontSize: "20px" }}><FaInstagram /></a>
               <a href="#" style={{ color: "#fff", fontSize: "20px" }}><FaTwitter /></a>
               <a href="#" style={{ color: "#fff", fontSize: "20px" }}><FaLinkedinIn /></a>
             </div>
           </div>
         </div>
 
         {/* Footer Bottom */}
         <hr style={{ borderColor: "#777" }} />
         <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Glyngarth Resort. All Rights Reserved.</p>
       </div>
     </footer>
 
 
    </div>
  );
};

export default Acitivity;
