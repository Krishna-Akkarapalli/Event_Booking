import React from 'react';
import PropTypes from 'prop-types';
import './AoneSeatSelection.css';

const AoneSeatSelection = ({ selectedSeats, onSeatSelect }) => {
  // Create an array of seat objects with 96 seats, and mark some as booked
  const seats = Array.from({ length: 96 }, (_, index) => ({
    id: index + 1,
    price: 470,
    isAvailable: index % 8 !== 0, // Example: Every 8th seat is booked
  }));

  return (
    <div className="seat-selection-container">
      <h2>Furiosa: A Mad Max Saga</h2>
      <div className="time-selection">
        <button className="time-button">03:50 PM 4DX</button>
        <button className="time-button">10:25 PM 4DX</button>
      </div>
      <div className="seat-grid">
        {seats.map((seat) => (
          <div
            key={seat.id}
            className={`seat ${
              !seat.isAvailable || selectedSeats.includes(seat.id)
                ? 'booked'
                : ''
            }`}
            onClick={() =>
              seat.isAvailable && onSeatSelect(seat.id, seat.price)
            }
          >
            <span className="seat-number">{seat.id}</span>
            <span className="seat-price">
              {seat.isAvailable && (
                <span
                  className="hover-price"
                  onMouseOver={(e) => {
                    e.target.style.animation = 'priceAnimation 0.5s ease-in-out';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.animation = 'none';
                  }}
                >
                  ₹ {seat.price}
                </span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

AoneSeatSelection.propTypes = {
  selectedSeats: PropTypes.arrayOf(PropTypes.number).isRequired,
  onSeatSelect: PropTypes.func.isRequired,
};

export default AoneSeatSelection;