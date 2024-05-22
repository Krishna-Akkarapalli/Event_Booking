import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../../components/OAuth';
import '../pages/Signup.css';

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate('/signin');
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className='signup-container'>
      <div className='signup-content'>
        <h1 className='signup-title'>Sign Up</h1>
        <form onSubmit={handleSubmit} className='Signup-form'>
          <input
            type='text'
            placeholder='Username'
            id='username'
            className='signup-input'
            onChange={handleChange}
          />
          <input
            type='email'
            placeholder='Email'
            id='email'
            className='signup-input'
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            id='password'
            className='signup-input'
            onChange={handleChange}
          />
          <button
            disabled={loading}
            className='signup-button'
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
          <OAuth />
        </form>
        <div className='signin-link'>
          <p>Have an account?</p>
          <Link to='/sign-in'>
            <span className='signin-text'>Sign in</span>
          </Link>
        </div>
        <p className='error-message'>
          {error && 'Something went wrong!'}
        </p>
      </div>
    </div>
  );
}
