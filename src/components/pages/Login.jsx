import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../../Rudux/User/userSlice';
import "../pages/Login.css"
import { useDispatch, useSelector } from 'react-redux';
import OAuth from '../../components/OAuth'
import './Login.css';

export default function Login() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };
  return (
    <div className='login-container'>
      <div className='login-content'>
        <h1 className='login-title'>Sign In</h1>
        <form onSubmit={handleSubmit} className='login-form'>
          <input
            type='email'
            placeholder='Email'
            id='email'
            className='login-input'
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            id='password'
            className='login-input'
            onChange={handleChange}
          />
          <button
            disabled={loading}
            className='login-button'
          >
            {loading ? 'Loading...' : 'Sign In'}
          </button>
          <OAuth />
        </form>
        <div className='signup-link'>
          <p>Dont have an account?</p>
          <Link to='/signup'>
            <span className='signup-text'>Sign up</span>
          </Link>
        </div>
        <p className='error-message'>
          {error ? error.message || 'Something went wrong!' : ''}
        </p>
      </div>
    </div>
  );
}
