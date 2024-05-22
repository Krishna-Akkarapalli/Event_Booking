import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaHome, FaInfoCircle, FaUserCircle, FaBars } from "react-icons/fa";
import img3 from "../../public/assets/img3.png";

import "./Navbar.css";

export default function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={img3} alt="logo" />
          </Link>
        </div>
        {/* <div className="navbar-links">
          <ul className="navbar-links">
            <Link to="/">
              <button className="navbar-item">
                <FaHome color="white" /> Home
              </button>
            </Link>
            <Link to="/about">
              <button className="navbar-item">
                <FaInfoCircle color="white" /> About
              </button>
            </Link>
            <Link to="/signin">
              <button className="navbar-item">
                <FaUserCircle color="white" /> Login
              </button>
            </Link>
          </ul>
        </div> */}
        <div className="navbar-profile">
        <Link to="/profile">
              <li style={{listStyle:"none"}}>
                {currentUser ? (
                  <img
                    src={currentUser.profilePicture}
                    alt="profile"
                    className="profile-img"
                  />
                ) : (
                  <profilePicture className="profile-icon"/>
                )}
              </li>
            </Link>

          <FaBars className="hamburger-icon" onClick={handleDropdownToggle} />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/">
                <button className="dropdown-item">
                  <FaHome /> Home
                </button>
              </Link>
              <Link to="/about">
                <button className="dropdown-item">
                  <FaInfoCircle /> About
                </button>
              </Link>
              <Link to="/signin">
                <button className="dropdown-item">
                  <FaUserCircle /> Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
