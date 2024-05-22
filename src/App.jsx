import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/signin' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/artreso' element={<ArtistResOne />} />
              <Route element={<PrivateRoute />}>
                <Route path='/profile' element={<Profile />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
}
