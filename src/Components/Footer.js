import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-title">
          <h3>Footer Content</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cum
            praesentium beatae error officia blanditiis sint fuga laboriosam rem
            ipsa.
          </p>
        </div>
        <div className="links">
          <a href="">Link 1</a>
          <a href="">Link 2</a>
          <a href="">Link 3</a>
          <a href="">Link 4</a>
        </div>
        <div className="logo">
          <i className="fa-brands fa-facebook-f facebook"></i>
          <i className="fa-brands fa-instagram instagram"></i>
          <i className="fa-brands fa-youtube youtube"></i>
        </div>
      </div>
    </>
  );
};

export default Footer;
