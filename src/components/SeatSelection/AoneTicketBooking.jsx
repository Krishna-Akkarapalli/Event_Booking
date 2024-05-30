import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './AoneSeatSelection.css';

const AoneTicketBooking = ({ selectedSeats, totalPrice }) => {
  return (
    <div className="booking-confirmation">
      <div className="confirmation-container">
        <h2 className="booking-title">Confirm Your Booking</h2>
        <div className="confirmation-content">
          <div className="selected-seats">
            <p>Selected Seats: {selectedSeats.join(', ')}</p>
          </div>
          <div className="total-price">
            <p>Total Price: ₹{totalPrice}</p>
          </div>
          <div className="confirm-button-container">
            <Link to="/success">
              <button className="confirm-button">Confirm & Proceed</button>
            </Link>
          </div>
        </div>
        <div className="confirmation-tick">
          <div className="tick-circle"></div>
          <div className="tick-mark"></div>
        </div>
      </div>
    </div>
  );
};

AoneTicketBooking.propTypes = {
  selectedSeats: PropTypes.arrayOf(PropTypes.number).isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default AoneTicketBooking;