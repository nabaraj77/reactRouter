import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <h2>
        About Us page has two Sections. They are Address and Phone Section
      </h2>
      <div className="links">
        <Link to="Address">Address</Link>
        <Link to="Phone">Phone</Link>
      </div>
    </div>
  );
};

export default AboutUs;
