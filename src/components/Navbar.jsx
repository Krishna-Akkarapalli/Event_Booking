import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { FaHome, FaInfoCircle, FaUserCircle, FaBars, FaSignOutAlt, FaTicketAlt, FaShoppingCart } from "react-icons/fa";
import img3 from "../../public/assets/img3.png";
import { signOut } from "../Rudux/User/userSlice";

import "./Navbar.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const cartItems = useSelector(state => state.cart.cartItems);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    dispatch(signOut());
    setDropdownOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={img3} alt="logo" />
          </Link>
        </div>
        <div className="navbar-profile">
          <Link to="/profile">
            <li style={{ listStyle: "none" }}>
              {currentUser ? (
                <img
                  src={currentUser.profilePicture}
                  alt="profile"
                  className="profile-img"
                />
              ) : (
                <FaUserCircle className="profile-icon" />
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
              {currentUser && (
                <Link to="/my-bookings">
                  <button className="dropdown-item">
                    <FaTicketAlt /> My Bookings
                  </button>
                </Link>
              )}
              {currentUser && ( // Only show cart if user is logged in
                <Link to="/cart">
                  <button className="dropdown-item">
                    <FaShoppingCart /> Cart 
                    {/* {cartItems.length > 0 && (
                      <span className="cart-count">{cartItems.length}</span> 
                    )} */}
                  </button>
                </Link>
              )}
              {currentUser ? (
                <button className="dropdown-item" onClick={handleLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              ) : (
                <Link to="/signin">
                  <button className="dropdown-item">
                    <FaUserCircle /> Login
                  </button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}













// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import { FaHome, FaInfoCircle, FaUserCircle, FaBars, FaSignOutAlt } from "react-icons/fa";
// import img3 from "../../public/assets/img3.png";
// import { signOut } from "../Rudux/User/userSlice";

// import "./Navbar.css";

// export default function Navbar() {
//   const dispatch = useDispatch();
//   const { currentUser } = useSelector((state) => state.user);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const handleDropdownToggle = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const handleLogout = () => {
//     dispatch(signOut());
//     setDropdownOpen(false);
//   };

//   return (
//     <div className="navbar">
//       <div className="navbar-container">
//         <div className="navbar-logo">
//           <Link to="/">
//             <img src={img3} alt="logo" />
//           </Link>
//         </div>
//         <div className="navbar-profile">
//           <Link to="/profile">
//             <li style={{ listStyle: "none" }}>
//               {currentUser ? (
//                 <img
//                   src={currentUser.profilePicture}
//                   alt="profile"
//                   className="profile-img"
//                 />
//               ) : (
//                 <FaUserCircle className="profile-icon" />
//               )}
//             </li>
//           </Link>

//           <FaBars className="hamburger-icon" onClick={handleDropdownToggle} />
//           {dropdownOpen && (
//             <div className="dropdown-menu">
//               <Link to="/">
//                 <button className="dropdown-item">
//                   <FaHome /> Home
//                 </button>
//               </Link>
//               <Link to="/about">
//                 <button className="dropdown-item">
//                   <FaInfoCircle /> About
//                 </button>
//               </Link>
//               {currentUser ? (
//                 <button className="dropdown-item" onClick={handleLogout}>
//                   <FaSignOutAlt /> Logout
//                 </button>
//               ) : (
//                 <Link to="/signin">
//                   <button className="dropdown-item">
//                     <FaUserCircle /> Login
//                   </button>
//                 </Link>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
