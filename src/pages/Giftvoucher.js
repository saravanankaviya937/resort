

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensures Bootstrap JS is loaded

import glyn15 from "./images/glyn15.jpg";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import "./Home.css";

const GiftVoucher = () => {
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
  Gift Voucher<span style={{content: '""', position: "absolute",    left: 0, bottom: 0, height: "2px", width: "100%",}} ></span></h6>
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
  Gift an open holiday hamper for 2 nights & 3 days.<br />
  To create your own holiday hamper, please contact our holiday expert @ +91 8110008877.
</p>

           
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

export default GiftVoucher;
