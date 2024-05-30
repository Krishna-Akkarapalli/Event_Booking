import './../Artist/ArtistResOne.css';
import { FaMusic } from 'react-icons/fa';
import { useLocation, useParams,Link } from "react-router-dom";
import ArtoneDatepic from '../ArtistBook/ArtoneDatepic';

const ArtistResOne = () => {
  const { id } = useParams();
  const location = useLocation();
  const artist = location.state;

  if (!artist) {
    return <div>Loading...</div>;
  }

  

  return (
    <div className='artist-event-container'>
      <nav className='artist-navbar'>
        <h2></h2>
      </nav>
      <div className='artist-event-content'>
        <div className='artist-event-image-container'>
          <a
            target='_self'
            className='artist-event-image-link'
            href='#'
          >
            <div
              role='presentation'
              className='artist-event-image-wrapper'
            >
              <img
                className='artist-event-image'
                src={artist.artistBgImage}
                alt={`Musical Concert by ${artist.artistName}`}
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
                    Musical Concert by {artist.artistName} - {artist.concertName}
                  </h1>
                </div>
                <div className='artist-event-subtitle-wrapper'>
                  <div className='artist-event-subtitle'>
                    <FaMusic /> {artist.showType} |{artist.showLanguage}| {artist.duration}mins
                  </div>
                </div>
                <div className='artist-event-date-time'>
                  <div className='artist-date-time-wrapper'>
                    <div className='artist-event-date'>
                    {String(artist.concertDate).substring(0, 10)}
                    </div>
                    <div className='artist-event-time'>at {artist.concertTime}</div>
                  </div>
                </div>
                <div className='artist-event-location-price'>
                  <div className='artist-location-wrapper'>
                    <div className='artist-event-location'>
                    {artist.venue},{artist.location}
                    </div>
                    <div className='artist-price-wrapper'>
                      <div className='artist-event-price'>
                        {artist.price}/-
                      </div>
                      <div className='artist-price-onwards'>onwards</div>
                    </div>
                  </div>
                </div>
                <div className='artist-event-book-button-wrapper'>
                  <div className='artist-book-button-container'>
                    <Link to="/seats">
                        <button
                          className='artist-book-button'
                          id='artist-synopsis-book-button'
                          style={{ height: '40px', width: '90px' }}
                          // onClick={handleBookButtonClick}
                        >
                          Book
                        </button>
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
      { <ArtoneDatepic />}
    </div>
  );
};

export default ArtistResOne;
