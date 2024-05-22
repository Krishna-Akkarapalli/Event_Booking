// src/EventComponent.jsx
import React from "react";
import "./../Artist/ArtistResOne.css";
import img6 from"../../../public/assets/img6.png"
import { FaLocationArrow, FaMusic } from "react-icons/fa";

const ArtistResOne = () => {
  return (
    <div className="artist-event-container">
      <nav className="artist-navbar">
        <h2>Event In Bangalore</h2>
      </nav>
      <div className="artist-event-content">
        <div className="artist-event-image-container">
          <a target="_self" className="artist-event-image-link" href="#">
            <div role="presentation" className="artist-event-image-wrapper">
              <img
                className="artist-event-image"
                src={img6}
                alt="Abhangwari by Mahesh Kale - Bangalore"
              />
            </div>
          </a>
        </div>
        <div className="artist-event-details">
          <header className="artist-event-header" style={{ height: "169px" }}>
            <div className="artist-event-details-container">
              <div className="artist-event-title-section">
                <div className="artist-event-title-wrapper">
                  <h1 className="artist-event-title">
                    Musical Concart by Avish Merol - Bengaluru
                  </h1>
                </div>
                <div className="artist-event-subtitle-wrapper">
                  <div className="artist-event-subtitle">
                    <FaMusic/>Devotional, Semi Classical | Marathi | 2hrs 30mins
                  </div>
                </div>
              </div>
              <div className="artist-event-book-button-wrapper">
                <div className="artist-book-button-container">
                  <button
                    className="artist-book-button"
                    id="artist-synopsis-book-button"
                    style={{ height: "60px", fontSize: "18px" }}
                  >
                    Book
                  </button>
                </div>
              </div>
              <div className="artist-event-info-wrapper">
                <div className="artist-event-info-inner">
                  <div className="artist-event-date-time">
                    <div className="artist-date-time-wrapper">
                      <div className="artist-event-date">Sun 21 Jul 2024</div>
                      <div className="artist-event-time">at 6:30 PM</div>
                    </div>
                  </div>
                  <div className="artist-event-location-price">
                    <div className="artist-location-wrapper">
                      <svg viewBox="0 0 18 22" className="artist-location-icon">
                        <use xlinkHref="#location-yellow"></use>
                      </svg>
                      <div className="artist-event-location">
                        Chowdiah Memorial Hall: Bengaluru
                      </div>
                      <div className="artist-price-wrapper">
                        <div className="artist-event-price">₹ 499</div>
                        <div className="artist-price-onwards">onwards</div>
                      </div>
                    </div>
                  </div>
                  <div className="artist-filling-fast-label-wrapper">
                    <label className="artist-filling-fast-label">
                      Filling Fast
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default ArtistResOne;

// import React from 'react'

// const ArtistResOne = () => {
//     return (
//         <div>
//             Artist
//         </div>
//     )
// }

// export default ArtistResOne
