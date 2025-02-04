

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensures Bootstrap JS is loaded

import glyn15 from "./images/glyn15.jpg";
import glyn3 from "./images/glyn3.jpg";
import glyn7 from "./images/glyn7.jpg";
import glyn9 from "./images/glyn9.jpg";
import glyn6 from "./images/glyn6.jpg";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";


const Cottages = () => {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={glyn15} className="d-block w-100" alt="Apartment 1" height="500px" />
          </div>
          <div className="carousel-item">
            <img src={glyn15} className="d-block w-100" alt="Apartment 3" height="500px" />
          </div>
          <div className="carousel-item">
            <img src={glyn15} className="d-block w-100" alt="Apartment 2" height="500px" />
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
      <div className="text-center mt-4">
  <h6 style={{ color: "black",   fontSize: "xx-large",  position: "relative",  display: "inline-block", paddingBottom: "5px", backgroundColor: "#f5f5f5",fontFamily: "'Arial', sans-serif" }}> 
  Cottages in Ooty with the best views<span style={{content: '""', position: "absolute",    left: 0, bottom: 0, height: "2px", width: "100%",}} ></span></h6>
  </div>     
  <p
  className="card-text fs-24"
  style={{
    fontSize: "20px",        // Increased font size (adjust as needed)
    lineHeight: "1.8",       // Slightly more spacing for better readability
    textAlign: "center",     // Center-align the text
    margin: "0 auto",        // Optional: helps center the paragraph block
  }}
>
Artfully created to offer you a sense of calm, each of our 21 cottages offers privacy, comfort and individuality. Mountain View, Pool View with Private Jacuzzi, Luxury Suite & Deluxe cottage, each with its own unique character, offer beautiful views of the hills, some more than the others.<br />
The cottages in Glyngarth are the only ones among the hotels in Ooty that afford spectacular pool views with massive bay windows from floor to ceiling. Sit back in the comfortable chairs and let your eyes wander over the blue hazy mountains, or star gaze at night, sipping a cup of tea or our signature soup.
</p>
                                   { /* Card */}
                                                                 <div className="container mt-5">
                                                                   <div
                                                                     className="card mb-3 shadow-lg"
                                                                     style={{ maxWidth: "1200px", minHeight: "300px", width: "100%", margin: "0 auto",  backgroundColor:" #FFFFFF",}}>
                                                                     <div className="row g-0 align-items-center">
                                                                       {/* Text Section (Left Side) */}
                                                                       <div className="col-md-6 p-3">
                                                                         <h5 className="card-title mt-4" style={{ fontSize: "28px", textAlign: "center", color: "#654321" }}>Premium Room with private Jacuzzi</h5>
                                                                         <p className="card-text fs-24"style={{ lineHeight: "1.5", textAlign: "justify" }} >Created to offer memorable family holidays in Ooty, the Luxury Suite has ample space to accommodate families travelling with children.</p>.
                                                                         <p className="card-text fs-24"style={{ lineHeight: "1.5", textAlign: "justify" }} >Price per night : र 14,700 (Including Breakfast)<br /> Extra adult (without meal) – 2,500/- + 18% tax <br /> Extra child (without meal) – र 1,500/- + 18% tax</p>
                                                                         
                                                                         <button style={{ backgroundColor: "#ff6600", color: "white", padding: "8px 16px", border: "none", borderRadius: "8px", cursor: "pointer", float: "left", marginRight: "10px" }}>
  Read More
</button>

<button style={{ backgroundColor: "#ff6600", color: "white", padding: "8px 16px", border: "none", borderRadius: "8px", cursor: "pointer", float: "left" }}>
  Book Your Stay
</button>

                                                                       </div>
                                                                 
                                                                       {/* Image Section (Right Side) */}
                                                                       <div className="col-md-6">
                                                                         <img  src={glyn7}    className="img-fluid ms-5"alt="Destination"style={{ width: "100%", height: "400px", objectFit: "cover" }} />
                                                                       </div>
                                                                     </div>
                                                                   </div>
                                                                 </div>
                                                                  {/* second */}
                                                                  { /* Card */}
                                                                 <div className="container mt-5">
                                                                   <div
                                                                     className="card mb-3 shadow-lg"
                                                                     style={{ maxWidth: "1200px", minHeight: "300px", width: "100%", margin: "0 auto",  backgroundColor:" #FFFFFF",}}>
                                                                     <div className="row g-0 align-items-center">
                                                                       {/* Text Section (Left Side) */}
                                                                       <div className="col-md-6 p-3">
                                                                         <h5 className="card-title mt-4" style={{ fontSize: "28px", textAlign: "center", color: "#654321" }}>Meandering Pool Villas</h5>
                                                                         <p className="card-text fs-24"style={{ lineHeight: "1.5", textAlign: "justify" }} >Created to offer memorable family holidays in Ooty, the Luxury Suite has ample space to accommodate families travelling with children.</p>.
                                                                         <p className="card-text fs-24"style={{ lineHeight: "1.5", textAlign: "justify" }} >Price per night : र 14,700 (Including Breakfast)<br /> Extra adult (without meal) – 2,500/- + 18% tax <br /> Extra child (without meal) – र 1,500/- + 18% tax</p>
                                                                         
                                                                         <button style={{ backgroundColor: "#ff6600", color: "white", padding: "8px 16px", border: "none", borderRadius: "8px", cursor: "pointer", float: "left", marginRight: "10px" }}>
  Read More
</button>

<button style={{ backgroundColor: "#ff6600", color: "white", padding: "8px 16px", border: "none", borderRadius: "8px",  cursor: "pointer",float: "left"}}>
        <a href="/BookNow" style={{ color: 'white', textDecoration: 'none' }}>Book Your Stay</a>
        </button>

                                                                       </div>
                                                                 
                                                                       {/* Image Section (Right Side) */}
                                                                       <div className="col-md-6">
                                                                         <img  src={glyn6}    className="img-fluid ms-5"alt="Destination"style={{ width: "100%", height: "400px", objectFit: "cover" }} />
                                                                       </div>
                                                                     </div>
                                                                   </div>
                                                                 </div>
                                                                       {/*third  */}
                                                                       { /* Card */}
                                                                 <div className="container mt-5">
                                                                   <div
                                                                     className="card mb-3 shadow-lg"
                                                                     style={{ maxWidth: "1200px", minHeight: "300px", width: "100%", margin: "0 auto",  backgroundColor:" #FFFFFF",}}>
                                                                     <div className="row g-0 align-items-center">
                                                                       {/* Text Section (Left Side) */}
                                                                       <div className="col-md-6 p-3">
                                                                         <h5 className="card-title mt-4" style={{ fontSize: "28px", textAlign: "center", color: "#654321" }}>Standard Room</h5>
                                                                         <p className="card-text fs-24"style={{ lineHeight: "1.5", textAlign: "justify" }} >Created to offer memorable family holidays in Ooty, the Luxury Suite has ample space to accommodate families travelling with children.</p>.
                                                                         <p className="card-text fs-24"style={{ lineHeight: "1.5", textAlign: "justify" }} >Price per night : र 14,700 (Including Breakfast)<br /> Extra adult (without meal) – 2,500/- + 18% tax <br /> Extra child (without meal) – र 1,500/- + 18% tax</p>
                                                                         
                                                                         <button style={{ backgroundColor: "#ff6600", color: "white", padding: "8px 16px", border: "none", borderRadius: "8px", cursor: "pointer", float: "left", marginRight: "10px" }}>
  Read More
</button>

<button style={{ backgroundColor: "#ff6600", color: "white", padding: "8px 16px", border: "none", borderRadius: "8px",  cursor: "pointer",float: "left"}}>
        <a href="/BookNow" style={{ color: 'white', textDecoration: 'none' }}>Book Your Stay</a>
        </button>

                                                                       </div>
                                                                 
                                                                       {/* Image Section (Right Side) */}
                                                                       <div className="col-md-6">
                                                                         <img  src={glyn9}    className="img-fluid ms-5"alt="Destination"style={{ width: "100%", height: "400px", objectFit: "cover" }} />
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

export default Cottages;
