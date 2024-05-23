import React from "react";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const navigate = useNavigate();
  function navigateToNetbanking() {
    navigate("/netbanking");
  }

  const noOfRegisteredUsers = useSelector(
    (state) => state.registered_users.length
  );
  return (
    <div className="service-container">
      <div className="service">
        <div>
          <p className="service-title">Simplified banking experience</p>
          <p className="service-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            sapiente!
          </p>
          <button>Know more</button>
        </div>
        <img className="service-image" src="/services/simple-bank.png" />
      </div>

      {noOfRegisteredUsers ? (
        <div className="home-card">
          <div>
            <p className="service-title">Be a part of the digital experience</p>
            <p className="service-text">
              <span>{noOfRegisteredUsers}</span> users registered to our
              services.
            </p>
            <button onClick={navigateToNetbanking}>Register now</button>
          </div>
        <img className="service-image" src="/home/nri-banking-img.png" />
        </div>
      ) : (
        <div></div>
      )}

      <div className="home-card">
        <div>
          <p className="service-title">
            Live in the now with simplified payments
          </p>
          <p className="service-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            sapiente!
          </p>
          <button>Discover cards</button>
        </div>
        <img className="service-image" src="/home/seamless-img.png" />
      </div>
    </div>
  );
}

export default Home;
