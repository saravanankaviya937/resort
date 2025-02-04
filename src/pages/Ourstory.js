

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensures Bootstrap JS is loaded

import glyn15 from "./images/glyn15.jpg";
import glyn2 from "./images/glyn2.jpg";
import glyn1 from "./images/glyn1.jpg";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./Home.css";

const GiftVoucher = () => {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={glyn1} className="d-block w-100" alt="Apartment 1" height="500px" />
          </div>
          <div className="carousel-item">
            <img src={glyn2} className="d-block w-100" alt="Apartment 3" height="500px" />
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
  About Glyngarth Resort Ooty<span style={{content: '""', position: "absolute",    left: 0, bottom: 0, height: "2px", width: "100%",}} ></span></h6>
  </div>     
  <p
  className="card-text fs-24"
  style={{fontSize: "20px",     lineHeight: "1.8",  textAlign: "center", margin: "0 auto",   }}>
Reviving the legacy of the original Glyngarth Villa in Ooty, we have now evolved and welcome you, into the 4-star luxury, of ‘Glyngarth Resorts’. Overlooking the Masinagudi valley, home to a plethora of wildlife and birds, it is a paradise for bird watchers and animal conservationists.

We at Glyngarth Resorts ensure that you enjoy the perfect getaway, to unwind and de-stress in the arms of nature. We are located, in the charming Blue Mountains of the Nilgiris, on the Ooty – Mysore road via Masanagudi between the 8th and 9th hairpin bend, 13 Km before Ooty in a sleepy hamlet called Hullatti.
</p>
<div className="text-center mt-4">
  <h6 style={{ color: "black",   fontSize: "xx-large",  position: "relative",  display: "inline-block", paddingBottom: "5px", backgroundColor: "#f5f5f5",fontFamily: "'Arial', sans-serif" }}> 
  A note on Sustainability; responsible hospitality<span style={{content: '""', position: "absolute",    left: 0, bottom: 0, height: "2px", width: "100%",}} ></span></h6>
  </div>    
  <p
  className="card-text fs-24"
  style={{fontSize: "20px",     lineHeight: "1.8",  textAlign: "center", margin: "0 auto",   }}>A note on Sustainability; responsible hospitality

  Glyngarth Resorts takes pride in being eco-friendly across it’s two acre resort. By being more sustainable, we can limit or improve our impact on the environment, be more socially responsible and be more financially efficient and prosperous in the long term. To reduce our carbon footprint, we use the vegetables and herbs that are grown locally in Hullatti, the surrounding village, that we have adopted.</p>
  <p
  className="card-text fs-24"
  style={{fontSize: "20px",     lineHeight: "1.8",  textAlign: "center", margin: "0 auto",   }}>We also operate on 50% solar power, which is clean energy, in an endeavour to keep the planet green. To control the usage of carbon fuelled regular electricity, we use only 100 LED powered bulbs. Another ‘green’ step is segregating and sending all the waste generated from the resort, to the recycling plant, run by the Tamil Nadu government. Special care is also taken to see that no waste is disposed off, in the neighbouring villages or the jungle, which is home to a variety of wildlife.</p>
  {/* card */}
                              { /* Card */}
                              <div className="container mt-5">
                                <div
                                  className="card mb-3 shadow-lg"
                                  style={{ maxWidth: "1200px", minHeight: "300px", width: "100%", margin: "0 auto",  backgroundColor:" #FFFFFF",}}>
                                  <div className="row g-0 align-items-center">
                                    {/* Text Section (Left Side) */}
                                    <div className="col-md-6 p-3">
                                      <h5 className="card-title mt-4" style={{ fontSize: "28px", textAlign: "center", color: "#654321" }}>The best of Nilgiris</h5>
                                      <p className="card-text fs-24"style={{ lineHeight: "1.5", textAlign: "justify" }} >Offering you the individual service & attention to detail for 14 reputed years, Glyngarth Resorts has been highly regarded in the service industry, for our unwavering adherence to quality, in all aspects of our service to our guests.</p>
                                      
                                    </div>
                              
                                    {/* Image Section (Right Side) */}
                                    <div className="col-md-6">
                                      <img  src={glyn1}    className="img-fluid ms-5"alt="Destination"style={{ width: "100%", height: "400px", objectFit: "cover" }} />
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
                                      
                                      <h5 className="card-title mt-4" style={{ fontSize: "28px", textAlign: "center", color: "#654321" }} >Hill View Resort in Ooty  </h5>
                                      <p
                                        className="card-text fs-24"
                                        style={{ lineHeight: "1.5", textAlign: "justify" }}>The cottages in Glyngarth are the only ones among the hotels in Ooty that afford spectacular pool views with massive bay windows from floor to ceiling. Sit back in the comfortable chairs and let your eyes wander over the blue hazy mountain views, or star gaze at night, sipping a cup of tea or some soup.
                                      </p>
                                    </div>
                              
                                    {/* Image Section (Right Side) */}
                                    <div className="col-md-6">
                                      <img  src={glyn2}    className="img-fluid ms-5"alt="Destination"style={{ width: "100%", height: "400px", objectFit: "cover" }} />
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

export default GiftVoucher;
