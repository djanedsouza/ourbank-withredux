import React from "react";
import Title from "../components/Title";
import Employee from "../components/Employee";

function Gallery() {
  return (
    <div>
      {/* <Title name="Our Employees" />
        <Employee /> */}

      <div className="service">
        <div>
          <p className="service-title">
            Cultivating Trust and Innovation since 1924
          </p>
          <p className="service-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo,
            odit rem ipsam magni ex adipisci qui architecto iste nam sapiente,
            deserunt distinctio maiores! Asperiores fuga veniam obcaecati error
            id. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
            delectus, ipsa cum mollitia eos sed explicabo quidem nobis harum
            quod impedit esse, consequuntur culpa officia voluptatum? Dolorum
            ullam fugit aperiam.
          </p>
        </div>
        <img className="service-image" src="/aboutus/banner-about.png" />
      </div>

      <div className="service">
        <div>
          <p className="service-title">About us</p>
          <p className="service-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo,
            odit rem ipsam magni ex adipisci qui architecto iste nam sapiente,
            deserunt distinctio maiores! Asperiores fuga veniam obcaecati error
            id. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio amet nemo incidunt voluptates nam? Vitae consequuntur
            dicta, alias numquam voluptatum provident ratione quam eligendi
            fugiat aut labore tempora vero in?
          </p>
        </div>
        <img className="service-image" src="/aboutus/numbers.svg" />
      </div>

      <div className="service">
        <img className="service-image" src="/user.png" />
        <div className="ceo-text">
          <p className="service-title">Mr Rajesh, MD & CEO</p>
          <p className="service-text">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo,
            odit rem ipsam magni ex adipisci qui architecto iste nam sapiente,
            deserunt distinctio maiores! Asperiores fuga veniam obcaecati error
            id. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis soluta fugiat perspiciatis aliquam laborum dolorum non
            magnam! Obcaecati saepe, praesentium fugiat quae tenetur vitae
            accusantium quaerat perspiciatis asperiores nesciunt maxime dolore
            dolor veniam aspernatur eaque, exercitationem iure, voluptatibus
            est. Sint? "
          </p>
        </div>
      </div>

      <div className="team">
        <p className="service-title">Meet our dedicated team</p>
        <Employee />
      </div>
    </div>
  );
}

export default Gallery;
