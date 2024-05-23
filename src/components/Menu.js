import React from "react";
import { Route, Routes, Link } from "react-router-dom";

function Menu(props) {
  let selectedComponent = props.selectedComponent;
  return (
    <div>
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/about" className="nav-item">About Us</Link>
      <Link to="/services" className="nav-item">Services</Link>
      <Link to="/netbanking" className="nav-item">Netbanking</Link>
      <Link to="/contact" className="nav-item">Contact Us</Link>
    </div>
  );
}

export default Menu;
