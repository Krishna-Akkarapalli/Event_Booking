// import PropTypes from 'prop-types';
// import {  useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { bookTicket } from '../../Rudux/User/artistSlice';
// import './AoneSeatSelection.css';

// const AoneTicketBooking = ({ selectedSeats, totalPrice }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const bookingStatus = useSelector(state => state.artists.bookingStatus);
//   const bookingError = useSelector(state => state.artists.bookingError);

//   const currentUser = useSelector(state => state.user.currentUser);

//   const handleConfirmBooking = async () => {
//     try {
//       await dispatch(bookTicket({ userName: currentUser.username , email: currentUser.email,selectedSeats, totalPrice}));
//       navigate('/success');
//     } catch (error) {
//       console.error('Failed to save booking', error);
//     }
//   };

//   return (
//     <div className="booking-confirmation">
//       <div className="confirmation-container">
//         <h2 className="booking-title">Confirm Your Booking</h2>
//         <div className="confirmation-content">
//           <div className="user-details">
//             <p>User Name: {currentUser.username}</p>
//             <p>Email: {currentUser.email}</p>
//           </div>
//           <div className="selected-seats">
//             <p>Selected Seats: {selectedSeats.join(', ')}</p>
//           </div>
//           <div className="total-price">
//             <p>Total Price: ₹{totalPrice}</p>
//           </div>
//           <div className="confirm-button-container">
//             <button className="confirm-button" onClick={handleConfirmBooking}>
//               Confirm & Proceed
//             </button>
//           </div>
//         </div>
//         {bookingStatus === 'loading' && <p>Booking in progress...</p>}
//         {bookingStatus === 'failed' && <p>Error: {bookingError}</p>}
//       </div>
//     </div>
//   );
// };

// AoneTicketBooking.propTypes = {
//   selectedSeats: PropTypes.arrayOf(PropTypes.number).isRequired,
//   totalPrice: PropTypes.number.isRequired,
// };

// export default AoneTicketBooking;
























// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import './AoneSeatSelection.css';
// import { useLocation } from 'react-router-dom'; 

// const AoneSeatSelection = () => {
//   const location = useLocation();
//   const artist = location.state;

//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     // Calculate total price whenever selectedSeats changes
//     const newTotalPrice = selectedSeats.reduce((total, seatId) => {
//       const seat = seats.find(s => s.id === seatId);
//       return total + (seat ? seat.price : 0);
//     }, 0);
//     setTotalPrice(newTotalPrice);
//   }, [selectedSeats]);

//   // Create an array of seat objects with 96 seats, and mark some as booked
//   const seats = Array.from({ length: 96 }, (_, index) => ({
//     id: index + 1,
//     price: 470,
//     isAvailable: index % 8 !== 0, // Example: Every 8th seat is booked
//   }));

//   const handleSeatSelect = (seatId, price) => {
//     // Toggle seat selection
//     if (selectedSeats.includes(seatId)) {
//       setSelectedSeats(selectedSeats.filter(id => id !== seatId));
//     } else {
//       setSelectedSeats([...selectedSeats, seatId]);
//     }
//   };

//   // Function to handle booking (you'll need to implement actual booking logic)
//   const handleBookNow = () => {
//     // Example: Send selected seats and total price to a booking API or store in local storage
//     console.log('Booking:', selectedSeats, totalPrice);
//   };

//   return (
//     <div className="seat-selection-container">
//       <h2>{artist ? `${artist.artistName} - ${artist.concertName}` : 'Furiosa: A Mad Max Saga'}</h2>
//       <div className="time-selection">
//         <button className="time-button">03:50 PM 4DX</button>
//         <button className="time-button">10:25 PM 4DX</button>
//       </div>
//       <div className="seat-grid">
//         {seats.map((seat) => (
//           <div
//             key={seat.id}
//             className={`seat ${
//               !seat.isAvailable || (selectedSeats && selectedSeats.includes(seat.id))
//                 ? 'booked'
//                 : ''
//             }`}
//             onClick={() => handleSeatSelect(seat.id, seat.price)}
//           >
//             <span className="seat-number">{seat.id}</span>
//             <span className="seat-price">
//               {seat.isAvailable && (
//                 <span
//                   className="hover-price"
//                   onMouseOver={(e) => {
//                     e.target.style.animation = 'priceAnimation 0.5s ease-in-out';
//                   }}
//                   onMouseOut={(e) => {
//                     e.target.style.animation = 'none';
//                   }}
//                 >
//                   ₹ {seat.price}
//                 </span>
//               )}
//             </span>
//           </div>
//         ))}
//       </div>
//       <div className="total-price">
//         Total Price: ₹ {totalPrice}
//       </div>
//       <button className="book-now-button" onClick={handleBookNow}>
//         Book Now
//       </button>
//     </div>
//   );
// };

// AoneSeatSelection.propTypes = {
//   selectedSeats: PropTypes.arrayOf(PropTypes.number).isRequired,
//   onSeatSelect: PropTypes.func.isRequired,
// };

// AoneSeatSelection.defaultProps = {
//   selectedSeats: [],
// };

// export default AoneSeatSelection;





// import React, { useEffect } from 'react';
// import { FaMusic } from 'react-icons/fa';
// import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchArtistById } from '../redux/artistSlice'; // Assuming your Redux slice is in 'artistSlice.js'

// const ArtistResOne = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const artist = useSelector((state) => state.artists.artist);

//   useEffect(() => {
//     dispatch(fetchArtistById(id));
//   }, [dispatch, id]); // Fetch artist data when the component mounts or 'id' changes

//   if (!artist) {
//     return <div>Loading...</div>; // Show a loading state while fetching
//   }

//   const handleBookButtonClick = () => {
//     navigate('/seats', { state: artist }); // Pass artist data to the seats page
//   };

//   return (
//     <div className='artist-event-container'>
//       <nav className='artist-navbar'>
//         <h2></h2> 
//       </nav>
//       <div className='artist-event-content'>
//         <div className='artist-event-image-container'>
//           <a
//             target='_self'
//             className='artist-event-image-link'
//             href='#'
//           >
//             <div
//               role='presentation'
//               className='artist-event-image-wrapper'
//             >
//               <img
//                 className='artist-event-image'
//                 src={artist.artistBgImage}
//                 alt={`Musical Concert by ${artist.artistName}`}
//               />
//             </div>
//           </a>
//         </div>
//         <div className='artist-event-details'>
//           <header className='artist-event-header'>
//             <div className='artist-event-details-container'>
//               <div className='artist-event-title-section'>
//                 <div className='artist-filling-fast-label-wrapper'>
//                   <label className='artist-filling-fast-label'>
//                     Filling Fast
//                   </label>
//                 </div>
//                 <div className='artist-event-title-wrapper'>
//                   <h1 className='artist-event-title'>
//                     Musical Concert by {artist.artistName} - {artist.concertName}
//                   </h1>
//                 </div>
//                 <div className='artist-event-subtitle-wrapper'>
//                   <div className='artist-event-subtitle'>
//                     <FaMusic /> {artist.showType} |{artist.showLanguage}| {artist.duration}mins
//                   </div>
//                 </div>
//                 <div className='artist-event-date-time'>
//                   <div className='artist-date-time-wrapper'>
//                     <div className='artist-event-date'>
//                       {String(artist.concertDate).substring(0, 10)}
//                     </div>
//                     <div className='artist-event-time'>at {artist.concertTime}</div>
//                   </div>
//                 </div>
//                 <div className='artist-event-location-price'>
//                   <div className='artist-location-wrapper'>
//                     <div className='artist-event-location'>
//                       {artist.venue},{artist.location}
//                     </div>
//                     <div className='artist-price-wrapper'>
//                       <div className='artist-event-price'>
//                         {artist.price}/-
//                       </div>
//                       <div className='artist-price-onwards'>onwards</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='artist-event-book-button-wrapper'>
//                   <div className='artist-book-button-container'>
//                     <Link to="/seats" onClick={handleBookButtonClick}>
//                         <button
//                           className='artist-book-button'
//                           id='artist-synopsis-book-button'
//                           style={{ height: '40px', width: '90px' }}
//                         >
//                           Book
//                         </button>
//                     </Link>
                    
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </header>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArtistResOne;


// import "./Home.css";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchArtists } from "../Rudux/User/artistSlice";
// import Footer from "../components/Footer";
// import img2 from "../../public/assets/img2.jpg";
// // import img5 from "../../public/assets/img5.png";
// // import img7 from "../../public/assets/img7.png";
// // import img9 from "../../public/assets/img9.png";
// // import img11 from "../../public/assets/img11.png";
// // import img13 from "../../public/assets/img13.png";
// import img15 from "../../public/assets/img15.jpg";
// import img16 from "../../public/assets/img16.jpg";
// import img17 from "../../public/assets/img17.jpg";
// import img18 from "../../public/assets/img18.jpg";
// import img19 from "../../public/assets/img19.jpg";
// import img20 from "../../public/assets/img20.jpg";
// import img21 from "../../public/assets/img21.jpg";

// // import Navbar from "./Navbar";

// const Home = () => {
//   const dispatch = useDispatch();
//   const artists = useSelector((state) => state.artists.artists);
//   const status = useSelector((state) => state.artists.status);
//   const error = useSelector((state) => state.artists.error);

//   const [selectedFilter, setSelectedFilter] = useState("");
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (status === "success") {
//       dispatch(fetchArtists());
//     }
//   }, [status, dispatch]);

//   // This is the showtypes you provided
//   const showTypes = [
//     "stand-up-comedy",
//     "comedy-show",
//     "musical-show",
//     "mime",
//     "kids-show",
//     "expo",
//     "drama",
//     "chit-chat",
//     "concert",
//     "talkshow",
//   ];

//   const handleFilterChange = (filter) => {
//     setSelectedFilter(filter);
//   };

//   const filteredArtists = selectedFilter
//     ? artists.filter((artist) => showTypes.includes(artist.showtype))
//     : artists;

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   if (status === "failed") {
//     return <div>Error: {error}</div>;
//   }

//   const handleArtistClick = (artist) => {
//     navigate(`/artist/${artist._id}`, { state: artist });
//   };

//   return (
//     <>
//       <div>
//         <div className="nav-head">
//           {/* <Navbar /> */}
//           <header className="header">
//             <img
//               src={img2} // replace with your image URL
//               className="header-image"
//               alt="header"
//             />
//             <div className="header-content">
//               <h1>The worlds best experiences curated just for you</h1>
//               <input
//                 type="text"
//                 placeholder="Search for experiences and cities"
//               />
//             </div>
//           </header>
//         </div>
//         <div className="art-main">
//           <div className="cont-art">
//             {/* Map over showTypes to create buttons */}
//             {showTypes.map((showType) => (
//               <button
//                 key={showType}
//                 className="but-nav"
//                 onClick={() => handleFilterChange(showType)}
//               >
//                 {/* Replace this with the appropriate icon based on the showType */}
//                 <i className="fas fa-microphone"></i>
//               </button>
//             ))}
//             <button className="but-nav" onClick={() => handleFilterChange("")}>
//               <i className="fas fa-undo-alt"></i>
//             </button>
//             <button
//               className="but-nav"
//               onClick={() => handleFilterChange("stand-up-comedy")}
//             >
//               <i className="fas fa-microphone-alt"></i>
//             </button>
//             <button
//               className="but-nav"
//               onClick={() => handleFilterChange("comedy-show")}
//             >
//               <i className="fas fa-laugh"></i>
//             </button>
//             <button
//               className="but-nav"
//               onClick={() => handleFilterChange("musical-show")}
//             >
//               <i className="fas fa-music"></i>
//             </button>
//             <button
//               className="but-nav"
//               onClick={() => handleFilterChange("mime")}
//             >
//               <i className="fas fa-theater-masks"></i>
//             </button>
//             <button
//               className="but-nav"
//               onClick={() => handleFilterChange("kids-show")}
//             >
//               <i className="fas fa-child"></i>
//             </button>
//             <button
//               className="but-nav"
//               onClick={() => handleFilterChange("expo")}
//             >
//               <i className="fas fa-landmark"></i>
//             </button>
//             <button
//               className="but-nav"
//               onClick={() => handleFilterChange("drama")}
//             >
//               <i className="fas fa-theater-masks"></i>
//             </button>
//             <button
//               className="but-nav"
//               onClick={() => handleFilterChange("chit-chat")}
//             >
//               <i className="fas fa-comments"></i>
//             </button>
//             <button
//               className="but-nav"
//               onClick={() => handleFilterChange("concert")}
//             >
//               <i className="fas fa-guitar"></i>
//             </button>
//             <button
//               className="but-nav"
//               onClick={() => handleFilterChange("talkshow")}
//             >
//               <i className="fas fa-microphone"></i>
//             </button>
//           </div>
//           <div className="Event-hd">
//             <h4 style={{ padding: "8px 0px 0px", margin: "1rem 2rem" }}>
//               Recommended Events
//             </h4>
//           </div>

//           <div className="Artist-cont-main">
//             {filteredArtists.map((artist) => (
//               <div
//                 key={artist._id}
//                 className="Artist-sub1"
//                 onClick={() => handleArtistClick(artist)}
//               >
//                 <a href={""} className="event-link custom-link">
//                   <div className="event-container custom-container">
//                     <div className="promo-section custom-promo">
//                       <div className="promo-indicator custom-indicator">
//                         <div className="promo-text custom-text">PROMOTED</div>
//                       </div>
//                     </div>
//                     <div className="event-image-container custom-image-container">
//                       <div className="image-wrapper custom-image-wrapper">
//                         <img
//                           src="https://cubezero.s3.ap-south-1.amazonaws.com/img5.png"
//                           alt={artist.name}
//                           width="100%"
//                           height="100%"
//                         />
//                       </div>
//                     </div>
//                     <div
//                       className="event-details custom-details"
//                       style={{ padding: "8px 0px 0px" }}
//                     >
//                       <div className="event-title custom-title">
//                         <div className="title-text custom-title-text">
//                           {artist.name}
//                         </div>
//                       </div>
//                       <div className="event-location custom-location">
//                         <div className="location-text custom-location-text">
//                           {artist.location}
//                         </div>
//                       </div>
//                       <div className="event-category custom-category">
//                         <div className="category-text custom-category-text">
//                           {artist.showtype}
//                         </div>
//                       </div>
//                       <div className="event-price custom-price">
//                         <div className="price-text custom-price-text">
//                           {artist.price}
//                         </div>
//                       </div>
//                       <h3 className="event-heading custom-heading">
//                         {artist.showname}
//                       </h3>
//                       <button className="go-button">Go</button>
//                     </div>
//                   </div>
//                 </a>
//               </div>
//             ))}
//             {/* <div className="Artist-sub1">
//               <a href={""} className="event-link custom-link">
//                 <div className="event-container custom-container">
//                   <div className="promo-section custom-promo">
//                     <div className="promo-indicator custom-indicator">
//                       <div className="promo-text custom-text">PROMOTED</div>
//                     </div>
//                   </div>
//                   <div className="event-image-container custom-image-container">
//                     <div className="image-wrapper custom-image-wrapper">
//                       <img src={img7} alt="hari" width="100%" height="100%" />
//                     </div>
//                   </div>
//                   <div
//                     className="event-details custom-details"
//                     style={{ padding: "8px 0px 0px" }}
//                   >
//                     <div className="event-title custom-title">
//                       <div className="title-text custom-title-text">
//                         krishna
//                       </div>
//                     </div>
//                     <div className="event-location custom-location">
//                       <div className="location-text custom-location-text">
//                         Banglore
//                       </div>
//                     </div>
//                     <div className="event-category custom-category">
//                       <div className="category-text custom-category-text">
//                         Comedy-Show
//                       </div>
//                     </div>
//                     <div className="event-price custom-price">
//                       <div className="price-text custom-price-text">
//                         10,000/-
//                       </div>
//                     </div>
//                     <h3 className="event-heading custom-heading">
//                       Drive with Happy
//                     </h3>
//                     <div className="go-button">Go</div>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="Artist-sub1">
//               <a href={""} className="event-link custom-link">
//                 <div className="event-container custom-container">
//                   <div className="promo-section custom-promo">
//                     <div className="promo-indicator custom-indicator">
//                       <div className="promo-text custom-text">PROMOTED</div>
//                     </div>
//                   </div>
//                   <div className="event-image-container custom-image-container">
//                     <div className="image-wrapper custom-image-wrapper">
//                       <img src={img9} alt="hari" width="100%" height="100%" />
//                     </div>
//                   </div>
//                   <div
//                     className="event-details custom-details"
//                     style={{ padding: "8px 0px 0px" }}
//                   >
//                     <div className="event-title custom-title">
//                       <div className="title-text custom-title-text">
//                         krishna
//                       </div>
//                     </div>
//                     <div className="event-location custom-location">
//                       <div className="location-text custom-location-text">
//                         Banglore
//                       </div>
//                     </div>
//                     <div className="event-category custom-category">
//                       <div className="category-text custom-category-text">
//                         Comedy-Show
//                       </div>
//                     </div>
//                     <div className="event-price custom-price">
//                       <div className="price-text custom-price-text">
//                         10,000/-
//                       </div>
//                     </div>
//                     <h3 className="event-heading custom-heading">
//                       Drive with Happy
//                     </h3>
//                     <div className="go-button">Go</div>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="Artist-sub1">
//               <a href={""} className="event-link custom-link">
//                 <div className="event-container custom-container">
//                   <div className="promo-section custom-promo">
//                     <div className="promo-indicator custom-indicator">
//                       <div className="promo-text custom-text">PROMOTED</div>
//                     </div>
//                   </div>
//                   <div className="event-image-container custom-image-container">
//                     <div className="image-wrapper custom-image-wrapper">
//                       <img src={img11} alt="hari" width="100%" height="100%" />
//                     </div>
//                   </div>
//                   <div
//                     className="event-details custom-details"
//                     style={{ padding: "8px 0px 0px" }}
//                   >
//                     <div className="event-title custom-title">
//                       <div className="title-text custom-title-text">
//                         krishna
//                       </div>
//                     </div>
//                     <div className="event-location custom-location">
//                       <div className="location-text custom-location-text">
//                         Banglore
//                       </div>
//                     </div>
//                     <div className="event-category custom-category">
//                       <div className="category-text custom-category-text">
//                         Comedy-Show
//                       </div>
//                     </div>
//                     <div className="event-price custom-price">
//                       <div className="price-text custom-price-text">
//                         10,000/-
//                       </div>
//                     </div>
//                     <h3 className="event-heading custom-heading">
//                       Drive with Happy
//                     </h3>
//                     <div className="go-button">Go</div>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="Artist-sub1">
//               <a href={""} className="event-link custom-link">
//                 <div className="event-container custom-container">
//                   <div className="promo-section custom-promo">
//                     <div className="promo-indicator custom-indicator">
//                       <div className="promo-text custom-text">PROMOTED</div>
//                     </div>
//                   </div>
//                   <div className="event-image-container custom-image-container">
//                     <div className="image-wrapper custom-image-wrapper">
//                       <img src={img13} alt="hari" width="100%" height="100%" />
//                     </div>
//                   </div>
//                   <div
//                     className="event-details custom-details"
//                     style={{ padding: "8px 0px 0px" }}
//                   >
//                     <div className="event-title custom-title">
//                       <div className="title-text custom-title-text">
//                         krishna
//                       </div>
//                     </div>
//                     <div className="event-location custom-location">
//                       <div className="location-text custom-location-text">
//                         Banglore
//                       </div>
//                     </div>
//                     <div className="event-category custom-category">
//                       <div className="category-text custom-category-text">
//                         Comedy-Show
//                       </div>
//                     </div>
//                     <div className="event-price custom-price">
//                       <div className="price-text custom-price-text">
//                         10,000/-
//                       </div>
//                     </div>
//                     <h3 className="event-heading custom-heading">
//                       Drive with Happy
//                     </h3>
//                     <div className="go-button">Go</div>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="Artist-sub1">
//               <a href={""} className="event-link custom-link">
//                 <div className="event-container custom-container">
//                   <div className="promo-section custom-promo">
//                     <div className="promo-indicator custom-indicator">
//                       <div className="promo-text custom-text">PROMOTED</div>
//                     </div>
//                   </div>
//                   <div className="event-image-container custom-image-container">
//                     <div className="image-wrapper custom-image-wrapper">
//                       <img src={img5} alt="hari" width="100%" height="100%" />
//                     </div>
//                   </div>
//                   <div
//                     className="event-details custom-details"
//                     style={{ padding: "8px 0px 0px" }}
//                   >
//                     <div className="event-title custom-title">
//                       <div className="title-text custom-title-text">
//                         krishna
//                       </div>
//                     </div>
//                     <div className="event-location custom-location">
//                       <div className="location-text custom-location-text">
//                         Banglore
//                       </div>
//                     </div>
//                     <div className="event-category custom-category">
//                       <div className="category-text custom-category-text">
//                         Comedy-Show
//                       </div>
//                     </div>
//                     <div className="event-price custom-price">
//                       <div className="price-text custom-price-text">
//                         10,000/-
//                       </div>
//                     </div>
//                     <h3 className="event-heading custom-heading">
//                       Drive with Happy
//                     </h3>
//                     <div className="go-button">Go</div>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="Artist-sub1">
//               <a href={""} className="event-link custom-link">
//                 <div className="event-container custom-container">
//                   <div className="promo-section custom-promo">
//                     <div className="promo-indicator custom-indicator">
//                       <div className="promo-text custom-text">PROMOTED</div>
//                     </div>
//                   </div>
//                   <div className="event-image-container custom-image-container">
//                     <div className="image-wrapper custom-image-wrapper">
//                       <img src={img7} alt="hari" width="100%" height="100%" />
//                     </div>
//                   </div>
//                   <div
//                     className="event-details custom-details"
//                     style={{ padding: "8px 0px 0px" }}
//                   >
//                     <div className="event-title custom-title">
//                       <div className="title-text custom-title-text">
//                         krishna
//                       </div>
//                     </div>
//                     <div className="event-location custom-location">
//                       <div className="location-text custom-location-text">
//                         Banglore
//                       </div>
//                     </div>
//                     <div className="event-category custom-category">
//                       <div className="category-text custom-category-text">
//                         Comedy-Show
//                       </div>
//                     </div>
//                     <div className="event-price custom-price">
//                       <div className="price-text custom-price-text">
//                         10,000/-
//                       </div>
//                     </div>
//                     <h3 className="event-heading custom-heading">
//                       Drive with Happy
//                     </h3>
//                     <div className="go-button">Go</div>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="Artist-sub1">
//               <a href={""} className="event-link custom-link">
//                 <div className="event-container custom-container">
//                   <div className="promo-section custom-promo">
//                     <div className="promo-indicator custom-indicator">
//                       <div className="promo-text custom-text">PROMOTED</div>
//                     </div>
//                   </div>
//                   <div className="event-image-container custom-image-container">
//                     <div className="image-wrapper custom-image-wrapper">
//                       <img src={img9} alt="hari" width="100%" height="100%" />
//                     </div>
//                   </div>
//                   <div
//                     className="event-details custom-details"
//                     style={{ padding: "8px 0px 0px" }}
//                   >
//                     <div className="event-title custom-title">
//                       <div className="title-text custom-title-text">
//                         krishna
//                       </div>
//                     </div>
//                     <div className="event-location custom-location">
//                       <div className="location-text custom-location-text">
//                         Banglore
//                       </div>
//                     </div>
//                     <div className="event-category custom-category">
//                       <div className="category-text custom-category-text">
//                         Comedy-Show
//                       </div>
//                     </div>
//                     <div className="event-price custom-price">
//                       <div className="price-text custom-price-text">
//                         10,000/-
//                       </div>
//                     </div>
//                     <h3 className="event-heading custom-heading">
//                       Drive with Happy
//                     </h3>
//                     <div className="go-button">Go</div>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="Artist-sub1">
//               <a href={""} className="event-link custom-link">
//                 <div className="event-container custom-container">
//                   <div className="promo-section custom-promo">
//                     <div className="promo-indicator custom-indicator">
//                       <div className="promo-text custom-text">PROMOTED</div>
//                     </div>
//                   </div>
//                   <div className="event-image-container custom-image-container">
//                     <div className="image-wrapper custom-image-wrapper">
//                       <img src={img11} alt="hari" width="100%" height="100%" />
//                     </div>
//                   </div>
//                   <div
//                     className="event-details custom-details"
//                     style={{ padding: "8px 0px 0px" }}
//                   >
//                     <div className="event-title custom-title">
//                       <div className="title-text custom-title-text">
//                         krishna
//                       </div>
//                     </div>
//                     <div className="event-location custom-location">
//                       <div className="location-text custom-location-text">
//                         Banglore
//                       </div>
//                     </div>
//                     <div className="event-category custom-category">
//                       <div className="category-text custom-category-text">
//                         Comedy-Show
//                       </div>
//                     </div>
//                     <div className="event-price custom-price">
//                       <div className="price-text custom-price-text">
//                         10,000/-
//                       </div>
//                     </div>
//                     <h3 className="event-heading custom-heading">
//                       Drive with Happy
//                     </h3>
//                     <div className="go-button">Go</div>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="Artist-sub1">
//               <a href={""} className="event-link custom-link">
//                 <div className="event-container custom-container">
//                   <div className="promo-section custom-promo">
//                     <div className="promo-indicator custom-indicator">
//                       <div className="promo-text custom-text">PROMOTED</div>
//                     </div>
//                   </div>
//                   <div className="event-image-container custom-image-container">
//                     <div className="image-wrapper custom-image-wrapper">
//                       <img src={img13} alt="hari" width="100%" height="100%" />
//                     </div>
//                   </div>
//                   <div
//                     className="event-details custom-details"
//                     style={{ padding: "8px 0px 0px" }}
//                   >
//                     <div className="event-title custom-title">
//                       <div className="title-text custom-title-text">
//                         krishna
//                       </div>
//                     </div>
//                     <div className="event-location custom-location">
//                       <div className="location-text custom-location-text">
//                         Banglore
//                       </div>
//                     </div>
//                     <div className="event-category custom-category">
//                       <div className="category-text custom-category-text">
//                         Comedy-Show
//                       </div>
//                     </div>
//                     <div className="event-price custom-price">
//                       <div className="price-text custom-price-text">
//                         10,000/-
//                       </div>
//                     </div>
//                     <h3 className="event-heading custom-heading">
//                       Drive with Happy
//                     </h3>
//                     <div className="go-button">Go</div>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="Artist-sub1">
//               <a href={""} className="event-link custom-link">
//                 <div className="event-container custom-container">
//                   <div className="promo-section custom-promo">
//                     <div className="promo-indicator custom-indicator">
//                       <div className="promo-text custom-text">PROMOTED</div>
//                     </div>
//                   </div>
//                   <div className="event-image-container custom-image-container">
//                     <div className="image-wrapper custom-image-wrapper">
//                       <img src={img7} alt="hari" width="100%" height="100%" />
//                     </div>
//                   </div>
//                   <div
//                     className="event-details custom-details"
//                     style={{ padding: "8px 0px 0px" }}
//                   >
//                     <div className="event-title custom-title">
//                       <div className="title-text custom-title-text">
//                         krishna
//                       </div>
//                     </div>
//                     <div className="event-location custom-location">
//                       <div className="location-text custom-location-text">
//                         Banglore
//                       </div>
//                     </div>
//                     <div className="event-category custom-category">
//                       <div className="category-text custom-category-text">
//                         Comedy-Show
//                       </div>
//                     </div>
//                     <div className="event-price custom-price">
//                       <div className="price-text custom-price-text">
//                         10,000/-
//                       </div>
//                     </div>
//                     <h3 className="event-heading custom-heading">
//                       Drive with Happy
//                     </h3>
//                     <div className="go-button">Go</div>
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div className="Artist-sub1">
//               <a href={""} className="event-link custom-link">
//                 <div className="event-container custom-container">
//                   <div className="promo-section custom-promo">
//                     <div className="promo-indicator custom-indicator">
//                       <div className="promo-text custom-text">PROMOTED</div>
//                     </div>
//                   </div>
//                   <div className="event-image-container custom-image-container">
//                     <div className="image-wrapper custom-image-wrapper">
//                       <img src={img9} alt="hari" width="100%" height="100%" />
//                     </div>
//                   </div>
//                   <div
//                     className="event-details custom-details"
//                     style={{ padding: "8px 0px 0px" }}
//                   >
//                     <div className="event-title custom-title">
//                       <div className="title-text custom-title-text">
//                         krishna
//                       </div>
//                     </div>
//                     <div className="event-location custom-location">
//                       <div className="location-text custom-location-text">
//                         Banglore
//                       </div>
//                     </div>
//                     <div className="event-category custom-category">
//                       <div className="category-text custom-category-text">
//                         Comedy-Show
//                       </div>
//                     </div>
//                     <div className="event-price custom-price">
//                       <div className="price-text custom-price-text">
//                         10,000/-
//                       </div>
//                     </div>
//                     <h3 className="event-heading custom-heading">
//                       Drive with Happy
//                     </h3>
//                     <div className="go-button">Go</div>
//                   </div>
//                 </div>
//               </a>
//             </div> */}
//           </div>
//         </div>
//         <div className="Live-trnd-hd">
//           <div className="Best-li-Hd">
//             <h2 style={{ padding: "8px 0px 0px", margin: "1rem 2rem" }}>
//               The Best Of Live Events
//             </h2>
//           </div>
//           <div className="Scroll-cont-main">
//             <div className="card-container">
//               <a href="" id="explore-food-drinks" className="card-link">
//                 <div className="card-content">
//                   <div className="card-image-container">
//                     <div
//                       width="100%"
//                       height="100%"
//                       data-content="Food and Drinks"
//                       className="card-image-wrapper"
//                     >
//                       <div className="card-image-inner">
//                         <div
//                           className="card-image"
//                           style={{ background: "none" }}
//                         >
//                           <img
//                             alt="Food and Drinks"
//                             width="100%"
//                             height="100%"
//                             className="card-img"
//                             src={img15}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="card-overlay"></div>
//                 </div>
//               </a>
//             </div>
//             <div className="card-container">
//               <a href="" id="explore-food-drinks" className="card-link">
//                 <div className="card-content">
//                   <div className="card-image-container">
//                     <div
//                       width="100%"
//                       height="100%"
//                       data-content="Food and Drinks"
//                       className="card-image-wrapper"
//                     >
//                       <div className="card-image-inner">
//                         <div
//                           className="card-image"
//                           style={{ background: "none" }}
//                         >
//                           <img
//                             alt="Food and Drinks"
//                             width="100%"
//                             height="100%"
//                             className="card-img"
//                             src={img16}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="card-overlay"></div>
//                 </div>
//               </a>
//             </div>
//             <div className="card-container">
//               <a href="" id="explore-food-drinks" className="card-link">
//                 <div className="card-content">
//                   <div className="card-image-container">
//                     <div
//                       width="100%"
//                       height="100%"
//                       data-content="Food and Drinks"
//                       className="card-image-wrapper"
//                     >
//                       <div className="card-image-inner">
//                         <div
//                           className="card-image"
//                           style={{ background: "none" }}
//                         >
//                           <img
//                             alt="Food and Drinks"
//                             width="100%"
//                             height="100%"
//                             className="card-img"
//                             src={img17}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="card-overlay"></div>
//                 </div>
//               </a>
//             </div>
//             <div className="card-container">
//               <a href="" id="explore-food-drinks" className="card-link">
//                 <div className="card-content">
//                   <div className="card-image-container">
//                     <div
//                       width="100%"
//                       height="100%"
//                       data-content="Food and Drinks"
//                       className="card-image-wrapper"
//                     >
//                       <div className="card-image-inner">
//                         <div
//                           className="card-image"
//                           style={{ background: "none" }}
//                         >
//                           <img
//                             alt="Food and Drinks"
//                             width="100%"
//                             height="100%"
//                             className="card-img"
//                             src={img18}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="card-overlay"></div>
//                 </div>
//               </a>
//             </div>
//             <div className="card-container">
//               <a href="" id="explore-food-drinks" className="card-link">
//                 <div className="card-content">
//                   <div className="card-image-container">
//                     <div
//                       width="100%"
//                       height="100%"
//                       data-content="Food and Drinks"
//                       className="card-image-wrapper"
//                     >
//                       <div className="card-image-inner">
//                         <div
//                           className="card-image"
//                           style={{ background: "none" }}
//                         >
//                           <img
//                             alt="Food and Drinks"
//                             width="100%"
//                             height="100%"
//                             className="card-img"
//                             src={img19}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="card-overlay"></div>
//                 </div>
//               </a>
//             </div>
//             <div className="card-container">
//               <a href="" id="explore-food-drinks" className="card-link">
//                 <div className="card-content">
//                   <div className="card-image-container">
//                     <div
//                       width="100%"
//                       height="100%"
//                       data-content="Food and Drinks"
//                       className="card-image-wrapper"
//                     >
//                       <div className="card-image-inner">
//                         <div
//                           className="card-image"
//                           style={{ background: "none" }}
//                         >
//                           <img
//                             alt="Food and Drinks"
//                             width="100%"
//                             height="100%"
//                             className="card-img"
//                             src={img20}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="card-overlay"></div>
//                 </div>
//               </a>
//             </div>
//             <div className="card-container">
//               <a href="" id="explore-food-drinks" className="card-link">
//                 <div className="card-content">
//                   <div className="card-image-container">
//                     <div
//                       width="100%"
//                       height="100%"
//                       data-content="Food and Drinks"
//                       className="card-image-wrapper"
//                     >
//                       <div className="card-image-inner">
//                         <div
//                           className="card-image"
//                           style={{ background: "none" }}
//                         >
//                           <img
//                             alt="Food and Drinks"
//                             width="100%"
//                             height="100%"
//                             className="card-img"
//                             src={img21}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="card-overlay"></div>
//                 </div>
//               </a>
//             </div>
//             <div className="card-container">
//               <a href="" id="explore-food-drinks" className="card-link">
//                 <div className="card-content">
//                   <div className="card-image-container">
//                     <div
//                       width="100%"
//                       height="100%"
//                       data-content="Food and Drinks"
//                       className="card-image-wrapper"
//                     >
//                       <div className="card-image-inner">
//                         <div
//                           className="card-image"
//                           style={{ background: "none" }}
//                         >
//                           <img
//                             alt="Food and Drinks"
//                             width="100%"
//                             height="100%"
//                             className="card-img"
//                             src={img19}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="card-overlay"></div>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Home;
