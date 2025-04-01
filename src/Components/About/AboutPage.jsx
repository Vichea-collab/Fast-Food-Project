import React from "react";
import "./AboutPage.css";

import about1 from "../../Assets/About/about1.avif";
import about2 from "../../Assets/About/about2.webp";

import Services from "../../Components/Home/Services/Services";

const AboutPage = () => {
  return (
    <>
      <div className="aboutSection">
        <h2>About Uomo</h2>
        <img src={about1} alt="" />
        <div className="aboutContent">
          <h3>Our Story</h3>
          <h4>
            Welcome to our fast food e-commerce platform, where convenience
            meets deliciousness. We aim to bring your favorite meals right to
            your doorstep with just a few clicks.
          </h4>
          <p>
            Our journey began with a vision to revolutionize the way people
            enjoy fast food. By combining technology and a passion for great
            taste, we’ve created a seamless online experience for food lovers
            everywhere. From burgers to pizzas, we ensure quality, speed, and
            satisfaction in every order.
          </p>
          <div className="content1">
            <div className="contentBox">
              <h5>Our Mission</h5>
              <p>
                To deliver fresh, high-quality fast food to our customers
                quickly and efficiently, while embracing innovation and
                sustainability.
              </p>
            </div>
            <div className="contentBox">
              <h5>Our Vision</h5>
              <p>
                To become the leading fast food e-commerce platform, connecting
                people with their favorite meals anytime, anywhere.
              </p>
            </div>
          </div>
          <div className="content2">
            <div className="imgContent">
              <img src={about2} alt="" />
            </div>
            <div className="textContent">
              <h5>The Company</h5>
              <p>
                We are a fast food e-commerce company dedicated to providing
                exceptional service and delicious meals. Our platform is
                designed to make ordering food simple, fast, and enjoyable. With
                a focus on customer satisfaction, we partner with top brands
                and local favorites to bring you the best options available.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Services />
    </>
  );
};

export default AboutPage;
