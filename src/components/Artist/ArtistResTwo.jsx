import { useState, useEffect } from 'react';
import './../Artist/ArtistResOne.css';
// import img6 from '../../../public/assets/img6.png';
import { FaMusic } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArtistById } from '../../Rudux/User/artResOneSlice'; 
import ArtoneDatepic from '../ArtistBook/ArtoneDatepic';

const ArtistResTwo = () => {
  const dispatch = useDispatch();
  const artistId = '664ee1322b004830325a67b6';
  const artist = useSelector((state) => state.artists.artist);
  console.log(artist)
  const status = useSelector((state) => state.artists.status);
  const error = useSelector((state) => state.artists.error);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleBookButtonClick = () => {
    setShowDatePicker(true);
  };

  useEffect(() => {
    dispatch(fetchArtistById(artistId));
  }, [dispatch, artistId]);

  // Handle loading and error states
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  // Render the artist details only when successfully fetched
  if (artist) {
    return (
      <div className='artist-event-container'>
        <nav className='artist-navbar'>
          <h2></h2>
        </nav>
        <div key={artist.artData._id} className='artist-event-content'>
          <div className='artist-event-image-container'>
            <a
              target='_self'
              className='artist-event-image-link'
              href='#' // Replace with your link if needed
            >
              <div
                role='presentation'
                className='artist-event-image-wrapper'
              >
                <img
                  className='artist-event-image'
                  src={"https://cubezero1.s3.ap-south-1.amazonaws.com/img6.png"}
                  alt={`Musical Concert by ${artist.artData.name}`}
                />
              </div>
            </a>
          </div>
          <div className='artist-event-details'>
            <header className='artist-event-header'>
              <div className='artist-event-details-container'>
                <div className='artist-event-title-section'>
                  <div className='artist-filling-fast-label-wrapper'>
                    <label className='artist-filling-fast-label'>
                      Filling Fast
                    </label>
                  </div>
                  <div className='artist-event-title-wrapper'>
                    <h1 className='artist-event-title'>
                      Musical Concert by{' '}
                      {artist.artData.name} - {artist.artData.showname}
                    </h1>
                  </div>
                  <div className='artist-event-subtitle-wrapper'>
                    <div className='artist-event-subtitle'>
                      <FaMusic />{' '}
                      {artist.artData.showtype} | English | 2hrs 30mins
                    </div>
                  </div>
                  <div className='artist-event-date-time'>
                    <div className='artist-date-time-wrapper'>
                      <div className='artist-event-date'>
                        Sun 21 Jul 2024
                      </div>
                      <div className='artist-event-time'>at 6:30 PM</div>
                    </div>
                  </div>
                  <div className='artist-event-location-price'>
                    <div className='artist-location-wrapper'>
                      <div className='artist-event-location'>
                        {artist.artData.location}
                      </div>
                      <div className='artist-price-wrapper'>
                        <div className='artist-event-price'>
                          {artist.artData.price}/-
                        </div>
                        <div className='artist-price-onwards'>onwards</div>
                      </div>
                    </div>
                  </div>
                  <div className='artist-event-book-button-wrapper'>
                    <div className='artist-book-button-container'>
                      <button
                        className='artist-book-button'
                        id='artist-synopsis-book-button'
                        style={{ height: '40px', width: '90px' }}
                        onClick={handleBookButtonClick}
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
        {showDatePicker && <ArtoneDatepic />}
      </div>
    );
  }

  // Display a placeholder if the data is not available yet
  // return <div>Artist data is loading...</div>;
};

export default ArtistResTwo;