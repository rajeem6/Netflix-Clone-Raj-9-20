import React from "react";
import logo from "../assets/logo (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import profile__img from "../assets/profile_img (1).png";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav__left">
        <img src={logo} alt="" className="nav__left__img" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="nav__right">
        <FontAwesomeIcon icon={faSearch} className="icons" />
        <p>Children</p>
        <FontAwesomeIcon icon={faBell} className="icons" />
        <div className="navbar__profile">
          <img src={profile__img} alt="" className="profile" />
          <FontAwesomeIcon icon={faCaretDown} className="icons" />
          <div className="dropdown">
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
