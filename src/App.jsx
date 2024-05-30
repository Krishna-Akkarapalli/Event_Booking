import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Rudux/Store';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import Navbar from './components/Navbar';
import Signup from './components/pages/Signup';
import ErrorBoundary from './ErrorBoundary';
import ArtistResOne from './components/Artist/ArtistResOne';
import ArtoneDatepic from './components/ArtistBook/ArtoneDatepic';
import AoneSeatSelection from './components/SeatSelection/AoneSeatSelection';
import AoneTicketBooking from './components/SeatSelection/AoneTicketBooking';
import AoneSuccessPage from './components/SeatSelection/AoneSuccessPage';
import './App.css';






const App = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSeatSelect = (seat, price) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
      setTotalPrice(totalPrice - price);
    } else {
      setSelectedSeats([...selectedSeats, seat]);
      setTotalPrice(totalPrice + price);
    }
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/artist/:id" element={<ArtistResOne />} />
              {/* <Route path="/artreso" element={<ArtistResOne />} /> */}
              <Route path="/artonebook" element={<ArtoneDatepic />} />
              <Route element={<PrivateRoute />}>
                <Route path="/profile" element={<Profile />} />
              </Route>
              
              <Route
                path="/seats"
                element={
                  
                  <div>
                    <AoneSeatSelection
                      selectedSeats={selectedSeats}
                      onSeatSelect={handleSeatSelect}
                    />
                    <div className="ProMain">
                    <div className='TotPriOne'>
                      Total Price: ₹{totalPrice}
                      <Link to="/booking">
                        <button className='ProcBoOne'>Proceed to Book</button>
                      </Link>
                      </div>
                    </div>
                  </div>
                  
                }
              />
              <Route
                className="SelecSeat-Pr"
                path="/booking"
                element={<AoneTicketBooking selectedSeats={selectedSeats} totalPrice={totalPrice} />}
              />
              <Route path="/success" element={<AoneSuccessPage />} />
            </Routes>
          </BrowserRouter>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
};

export default App;