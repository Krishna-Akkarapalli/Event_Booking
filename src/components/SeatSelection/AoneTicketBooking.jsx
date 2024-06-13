import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bookTicket } from '../../Rudux/User/artistSlice';
import './AoneSeatSelection.css';

const AoneTicketBooking = ({ selectedSeats, totalPrice }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bookingStatus = useSelector(state => state.artists.bookingStatus);
  const bookingError = useSelector(state => state.artists.bookingError);

  const currentUser = useSelector(state => state.user.currentUser);

  const handleConfirmBooking = async () => {
    try {
      await dispatch(bookTicket({ userName: currentUser.username , email: currentUser.email,selectedSeats, totalPrice}));
      navigate('/success');
    } catch (error) {
      console.error('Failed to save booking', error);
    }

      
    } ;

  return (
    <div className="booking-confirmation">
      <div className="confirmation-container">
        <h2 className="booking-title">Confirm Your Booking</h2>
        <div className="confirmation-content">
          <div className="user-details">
          
            <p>User Name: {String(currentUser.username).substring(0, 18)}</p>
            <p>Email: {currentUser.email}</p>
          </div>
          <div className="selected-seats">
            <p>Selected Seats: {selectedSeats.join(', ')}</p>
          </div>
          <div className="total-price">
            <p>Total Price: ₹{totalPrice}</p>
          </div>
          <div className="confirm-button-container">
            <button className="confirm-button" onClick={handleConfirmBooking}>
              Confirm & Proceed
            </button>
          </div>
        </div>
        {bookingStatus === 'loading' && <p>Booking in progress...</p>}
        {bookingStatus === 'failed' && <p>Error: {bookingError}</p>}
      </div>
    </div>
  );
};

AoneTicketBooking.propTypes = {
  selectedSeats: PropTypes.arrayOf(PropTypes.number).isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default AoneTicketBooking;
