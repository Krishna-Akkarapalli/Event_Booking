import { Link } from 'react-router-dom';
import './AoneSeatSelection.css';

const SuccessPage = () => {
  return (
    <div className="success-container"> 
      <h1 className="success-message">Booking Successful!</h1> 
      <p className="success-text">Thank you for your booking. Enjoy the show!</p>
      <Link to="/" className="success-link">Go to Home</Link>
    </div>
  );
};

export default SuccessPage;



