import React from "react";
import "./Header.css";
import { Link, Routes, Route } from "react-router-dom";
import ProgrammingLanguage from "./ProgrammingLanguage";
import ReactLanguage from "./ReactLanguage";
import HtmlLanguage from "./HtmlLanguage";
import AboutUs from "./About/AboutUs";
import Address from "./About/Address";
import Phone from "./About/Phone";

const Header = () => {
  return (
    <>
      <div className="header">
        <ul>
          <li>
            <Link to="ProgrammingLanguage">Programming Language</Link>
          </li>
          <li>
            <Link to="React">React</Link>
          </li>
          <li>
            <Link to="HTML">HTML</Link>
          </li>
          <li>
            <Link to="About">About</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="ProgrammingLanguage" element={<ProgrammingLanguage />} />
        <Route path="React" element={<ReactLanguage />} />
        <Route path="HTML" element={<HtmlLanguage />} />
        <Route path="About" element={<AboutUs />}>
          <Route path="Address" element={Address} />
          <Route path="Phone" element={Phone} />
        </Route>
      </Routes>
    </>
  );
};

export default Header;
