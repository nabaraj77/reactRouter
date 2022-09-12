import React from "react";
import "./Header.css";
import { Link, Routes, Route } from "react-router-dom";
import ProgrammingLanguage from "./ProgrammingLanguage";
import ReactLanguage from "./ReactLanguage";
import AboutUs from "./About/AboutUs";
import Address from "./About/Address";
import Phone from "./About/Phone";
import User from "./User";
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
            <Link to="About">About</Link>
          </li>
          <li>
            <Link to="User">User</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="ProgrammingLanguage" element={<ProgrammingLanguage />} />
        <Route path="React" element={<ReactLanguage />} />

        <Route path="About" element={<AboutUs />}>
          <Route path="Address" element={<Address />} />
          <Route path="Phone" element={<Phone />} />
        </Route>
        {/* Dynamic route exapme for user */}
        <Route path="User/:name" element={<User />} />
      </Routes>
    </>
  );
};

export default Header;
