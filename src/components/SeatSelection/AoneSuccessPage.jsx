import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div>
      <h1>Booking Successful!</h1>
      <p>Thank you for your booking. Enjoy the show!</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default SuccessPage;



