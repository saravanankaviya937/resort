
// // import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import apart1 from './images/apart1.jpg';
// import apart3 from './images/apart3.jpg';
// import './Home.css';
// const Home = () => {
//     return (
//         <div>
//             {/* <Carousel>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src={apart1}
//                         alt="First slide"
//                     />
//                     <Carousel.Caption>
//                         <h3>First Slide Label</h3>
//                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src={apart1}
//                         alt="Second slide"
//                     />
//                     <Carousel.Caption>
//                         <h3>Second Slide Label</h3>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src={c3}
//                         alt="Third slide"
//                     />
//                     <Carousel.Caption>
//                         <h3>Third Slide Label</h3>
//                         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             </Carousel> */} 


//           <div id="carouselExampleFade" class="carousel slide carousel-fade">
//             <div class="carousel-inner">
//             <div class="carousel-item active">
//             <img src={apart1} class="d-block w-100" alt="..." height="500px" width="100%"/>
            
//             </div>
//              <div class="carousel-item active">
//              <img src={apart3} class="d-block w-100" alt="..." height="500px" width="100%"/>
//                   </div>
//                 <div class="carousel-item active">
//                <img src="..." class="d-block w-100" alt="..."/>
//            </div>
//            </div>
//             <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span class="visually-hidden">Previous</span>
//            </button>
//              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//            <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                  <span class="visually-hidden">Next</span>
//           </button>
//          </div>
//         </div>
//     );
// };

// export default Home;
 

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensures Bootstrap JS is loaded
import apart1 from "./images/apart1.jpg";
import apart3 from "./images/apart3.jpg";
import apart2 from "./images/apart2.jpg";
import glyn1 from "./images/glyn1.jpg";
import glyn2 from "./images/glyn2.jpg";
import glyn3 from "./images/glyn3.jpg";
import glyn7 from "./images/glyn7.jpg";
import glyn9 from "./images/glyn9.jpg";
import glyn6 from "./images/glyn6.jpg";
import glyn16 from "./images/glyn16.jpg";
import glyn17 from "./images/glyn17.jpg";
import glyn18 from "./images/glyn18.jpg";

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import "./Home.css";

const Home = () => {
  return (
    <div>
      
      
      <div className="text-center mt-4">
       <h6 style={{ color: "orange", fontSize: "x-large", position: "relative", display: "inline-block", paddingBottom: "5px" }}>
         Welcome to Glyngarth
        <span style={{content: '""', position: "absolute",left: 0,bottom: 0, height: "2px",width: "100%",backgroundColor: "orange", }}></span>
      </h6>
      <p className="fs-5" style={{ fontSize: "95px" }}> Resort in Ooty with a glorious view of the blue mountains</p>
      </div>
   {/* card */}
         <div className="container mt-5">
         <div className="card mb-3 shadow-lg" style={{ maxWidth: "1200px", minHeight: "300px", width: "100%", margin: "0 auto"  }}>  {/* Increased maxWidth */}
         <div className="row g-0 align-items-center">
      
      {/* Text Section (Left Side) */}
      <div className="col-md-6 p-3"> {/* Increased padding for better spacing */}
      <h5 className="card-title mt-4" style={{ fontSize: "28px", textAlign: "center" }}>Beautiful Destination</h5>
      <p className="card-text fs-24" style={{ lineHeight: "1.5", textAlign: "justify" }}> Glyngarth Resort offers a luxurious stay in Ooty with glorious views of the surrounding hills and curated local.experiences for the discerning traveller who seeks a mindful, uncluttered & stylish holiday with authentic and attentive service.
        We are at a short distance slow down and enjoy some tic lives in the lap of nature.<br></br> We are at a short distance from Ooty which gives us a superior edge over other resorts in Ooty, being away from the crowded tourist spots yet close enough for a day excursion. Our environmentally friendly resort is the perfect place to take a break, slow down and enjoy some distance from your frenetic lives in the lap of nature.</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={{ backgroundColor: "#ff6600", color: "white", padding: "8px 16px", border: "none", borderRadius: "8px",  cursor: "pointer",float: "left"}}>
          Learn More
        </button>
        </div>
      </div>

      {/* Image Section (Right Side) */}
      <div className="col-md-6">
        <img src={glyn1}   className="img-fluid ms-5"   alt="Destination" style={{ width: "100%", height: "400px", objectFit: "cover" }} />
      </div>
    </div>
  </div>
</div>
                      {/* cadr carsoual  */}
  <div className="text-center mt-4">
  <h6 style={{ color: "orange",  fontSize: "x-large",     position: "relative",   display: "inline-block", paddingBottom: "5px", textDecoration: "none" }}>Our Cottages<span  style={{   content: '""',position: "absolute",}}></span>
  </h6>
  <p className="fs-5" style={{ fontSize: "40px",  fontFamily: "'Georgia', serif",textDecoration: "underline",  fontWeight: "bold",}}>
  An epitome of Comfort & Luxury
   </p>
  <p className="fs-5" 
  style={{fontSize: "30px",  fontFamily: "'Georgia', serif", }}>Featuring a pleasant blend of natural materials and elegance, the decor and furnishings create an inviting ambience</p>
   </div>
{/* rooms card */}
<div class="row row-cols-1 row-cols-md-3 g-4">
<div className="col">
  <div className="card h-100">
    <img src={glyn2} className="card-img-top" alt="Hill View Room" /> 
    <div className="card-body">
    <h5 className="card-title" style={{ fontSize: "25px", fontWeight: "bold",}}> Hill View Room</h5>
    <p className="card-text" style={{fontSize: "18px",lineHeight: "1.6", }}>The Rooms are tastefully created by our passionate interior designers with high ceilings and large windows offering spectacular views of the mountains.</p>


      {/* Price and Button in the same line */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h6 style={{ color: "brown", fontWeight: "bold", margin: "0"}}>Price: $150/OneDay</h6>

        <button style={{ backgroundColor: "#ff6600", color: "white", padding: "8px 16px", border: "none", borderRadius: "8px",  cursor: "pointer",float: "left"}}>
        <a href="/BookNow" style={{ color: 'white', textDecoration: 'none' }}>Book Your Stay</a>
        </button>
      </div>
    </div>
  </div>
</div>
<div className="col">
  <div className="card h-100">
    <img src={glyn3} className="card-img-top" alt="Hill View Room" /> 
    <div className="card-body">
    <h5 className="card-title" style={{ fontSize: "25px", fontWeight: "bold",}}> Luxury Room & Private Jucuzzi</h5>
    <p className="card-text" style={{fontSize: "18px",lineHeight: "1.6", }}>The Rooms are tastefully created by our passionate interior designers with high ceilings and large windows offering spectacular views of the mountains.</p>
      {/* Price and Button in the same line */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h6 style={{ color: "brown", fontWeight: "bold", margin: 0 }}>Price: $350/OneNight</h6>
        <button style={{ backgroundColor: "#ff6600", color: "white", padding: "8px 16px", border: "none", borderRadius: "8px",  cursor: "pointer",float: "left"}}>
        <a href="/BookNow" style={{ color: 'white', textDecoration: 'none' }}>Book Your Stay</a>
        </button>
      </div>
    </div>
    </div>
   </div>
   <div className="col">
  <div className="card h-100">
    <img src={glyn7} className="card-img-top" alt="Hill View Room" /> 
    <div className="card-body">
    <h5 className="card-title" style={{ fontSize: "25px", fontWeight: "bold",}}>Luxury Pavilion Rooms</h5>
    <p className="card-text" style={{fontSize: "18px",lineHeight: "1.6", }}>The Rooms are tastefully created by our passionate interior designers with high ceilings and large windows offering spectacular views of the mountains.</p>
      {/* Price and Button in the same line */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h6 style={{ color: "brown", fontWeight: "bold", margin: 0 }}>Price: $550/TwoDays</h6>
        <button style={{ backgroundColor: "#ff6600", color: "white", padding: "8px 16px", border: "none", borderRadius: "8px",  cursor: "pointer",float: "left"}}>
        <a href="/BookNow" style={{ color: 'white', textDecoration: 'none' }}>Book Your Stay</a>
        </button>
      </div>
    </div>
    </div>
   </div>
   <div className="col">
  <div className="card h-100">
    <img src={glyn9} className="card-img-top" alt="Hill View Room"  /> 
    <div className="card-body">
    <h5 className="card-title" style={{ fontSize: "25px", fontWeight: "bold",}}> Heritage Lake View Private Pool</h5>
    <p className="card-text" style={{fontSize: "18px",lineHeight: "1.6", }}>The Rooms are tastefully created by our passionate interior designers with high ceilings and large windows offering spectacular views of the mountains.</p>
      {/* Price and Button in the same line */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h6 style={{ color: "brown", fontWeight: "bold", margin: 0 }}>Price: $850/One Day</h6>
        <button style={{ backgroundColor: "#ff6600", color: "white", padding: "8px 16px", border: "none", borderRadius: "8px",  cursor: "pointer",float: "left"}}>
        <a href="/BookNow" style={{ color: 'white', textDecoration: 'none' }}>Book Your Stay</a>
        </button>
      </div>
    </div>
    </div>
   </div>
   <div className="col">
  <div className="card h-100">
    <img src={glyn6} className="card-img-top" alt="Hill View Room" /> 
    <div className="card-body">
    <h5 className="card-title" style={{ fontSize: "25px", fontWeight: "bold",}}>Meandering Pool Villas</h5>
    <p className="card-text" style={{fontSize: "18px",lineHeight: "1.6", }}>The Rooms are tastefully created by our passionate interior designers with high ceilings and large windows offering spectacular views of the mountains.</p>
      {/* Price and Button in the same line */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h6 style={{ color: "brown", fontWeight: "bold", margin: 0 }}>Price: $650/night</h6>
        <button style={{ backgroundColor: "#ff6600", color: "white", padding: "8px 16px", border: "none", borderRadius: "8px",  cursor: "pointer",float: "left"}}>
        <a href="/BookNow" style={{ color: 'white', textDecoration: 'none' }}>Book Your Stay</a>
        </button>
      </div>
    </div>
    </div>
   </div>
   <div className="col">
  <div className="card h-100">
    <img src={glyn3} className="card-img-top" alt="Hill View Room" /> 
    <div className="card-body">
    <h5 className="card-title" style={{ fontSize: "25px", fontWeight: "bold",}}> Luxury Room & Private Jucuzzi</h5>
    <p className="card-text" style={{fontSize: "18px",lineHeight: "1.6", }}>The Rooms are tastefully created by our passionate interior designers with high ceilings and large windows offering spectacular views of the mountains.</p>
      {/* Price and Button in the same line */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h6 style={{ color: "brown", fontWeight: "bold", margin: 0 }}>Price: $350/TwoNight</h6>
        <button style={{ backgroundColor: "#ff6600", color: "white", padding: "8px 16px", border: "none", borderRadius: "8px",  cursor: "pointer",float: "left"}}>
        <a href="/BookNow" style={{ color: 'white', textDecoration: 'none' }}>Book Your Stay</a>
        </button>
      </div>
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

export default Home;
