import React from "react";
import "./AboutUs.css";
import { Link, Outlet } from "react-router-dom";

const AboutUs = () => {
  const hoverMe = (e) => {
    e.target.style.background = "red";
  };
  const hoverMePhone = (e) => {
    e.target.style.background = "green";
  };
  return (
    <>
      <h2>
        About Us page has two Sections. They are Address and Phone Section.
      </h2>

      <div className="links">
        <Link to="Address">
          <button onMouseOver={hoverMe}> Address</button>
        </Link>
        <Link to="Phone">
          <button onMouseOver={hoverMePhone}> Phone</button>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default AboutUs;
