import React from "react";
import Title from "../components/Title";

function Contact() {
  return (
    <div className="contact-container">
      {/* <Title name="Contact Us" />
      <h3>The list of places where our offices are located : </h3>
      <ul>
        <li>Bangalore, Karnatak</li>
        <li>Mumbai, Maharashtra</li>
        <li>Chennai, Tamilnadu</li>
        <li>Noida, UP</li>
        <li>New York, USA</li>
        <li>Paris, France</li>
        <li>Sydney, Australia</li>
        <li>Tokyo, Japan</li>
      </ul> */}

      <div className="left-side">
        <p className="main-text">Customer Care at Your Fingertips</p>

        <div className="contact-card">
          <p>Write to us</p>
          <p className="contact-text contact-info">info@ourbank.com</p>
        </div>

        <div className="contact-card">
          <p>Chat with us on WhatsApp</p>
          <p className="contact-text">
            Send a Hi to <span className="contact-info">+91 9876543211</span>
          </p>
        </div>

        <div className="contact-card">
          <p>Call us</p>
          <p className="contact-text contact-info">
            1800 123 1234{" "}
            <span className="normal-text">(Toll free number)</span>
          </p>
          <p className="contact-text contact-info">
            1800 234 4321{" "}
            <span className="normal-text">(Toll free number)</span>
          </p>
          <p className="contact-text contact-info">
            1800 345 9876 <span className="normal-text">(NRI)</span>
          </p>
        </div>
      </div>
      <div className="right-side">
        <p>Our branches</p>
        <ul className="branch-list">
          <li>Bangalore, Karnatak</li>
          <li>Mumbai, Maharashtra</li>
          <li>Chennai, Tamilnadu</li>
          <li>Noida, UP</li>
          <li>New York, USA</li>
          <li>Paris, France</li>
          <li>Sydney, Australia</li>
          <li>Tokyo, Japan</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
