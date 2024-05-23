import React from "react";

function Services() {
  return (
    <div className="services-container">
      <div className="service">
        <div>
          <p className="service-title">
            Account for everyone, whether personal or business
          </p>
          <p className="service-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            sapiente!
          </p>
          <button>Apply now</button>
        </div>
        <img className="service-image" src="/services/account.png" />
      </div>

      <div className="service">
        <div>
          <p className="service-title">Accumulate Wealth with Our Deposits</p>
          <p className="service-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            sapiente!
          </p>
          <button>Know more</button>
        </div>
        <img className="service-image" src="/services/deposit.png" />
      </div>

      <div className="service">
        <div>
          <p className="service-title">
            Bank on your card for easy transaction
          </p>
          <p className="service-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            sapiente!
          </p>
          <button>Know more</button>
        </div>
        <img className="service-image" src="/services/card.png" />
      </div>
    </div>
  );
}

export default Services;
