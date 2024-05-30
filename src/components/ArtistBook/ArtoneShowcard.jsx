import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../ArtistBook/ArtoneDatepic.css';
const ArtoneShowcard = ({ theater }) => {
  return (
    <div className="theater-card">
      <h2>{theater.name}</h2>
      <div className="showtimes">
        {theater.showtimes.map((showtime, index) => (
          <Link key={index} to="/seats">
            <button className="showtime">
              {showtime.time}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};
ArtoneShowcard.propTypes = {
    theater: PropTypes.shape({
      name: PropTypes.string.isRequired,
      mTicket: PropTypes.bool,
      foodBeverage: PropTypes.bool,
      showtimes: PropTypes.arrayOf(PropTypes.shape({
        time: PropTypes.string.isRequired,
        format: PropTypes.string,
        cancellationAvailable: PropTypes.bool.isRequired,
      })).isRequired,
    }).isRequired,
  };

export default ArtoneShowcard;