import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtists } from "../Rudux/User/artistSlice";
import Footer from "../components/Footer";
import img2 from "../../public/assets/img2.jpg";
import img15 from "../../public/assets/img15.jpg";
import img16 from "../../public/assets/img16.jpg";
import img17 from "../../public/assets/img17.jpg";
import img18 from "../../public/assets/img18.jpg";
import img19 from "../../public/assets/img19.jpg";
import img20 from "../../public/assets/img20.jpg";
import img21 from "../../public/assets/img21.jpg";

const Home = () => {
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artists.artists);
  const status = useSelector((state) => state.artists.status);
  const error = useSelector((state) => state.artists.error);

  const [selectedFilter, setSelectedFilter] = useState("");
  const navigate = useNavigate();

  const [filteredArtists, setFilteredArtists] = useState([]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchArtists());
    } else if (artists) {
      const filtered = selectedFilter
        ? artists.filter((artist) => artist.showType === selectedFilter)
        : artists;
      setFilteredArtists(filtered);
      console.log("Filtered Artists:", filtered);  // Debugging line
    }
    console.log("Status:", status);  // Debugging line
    console.log("Artists:", artists);  // Debugging line
  }, [status, dispatch, artists, selectedFilter]);

  // const showTypes = [
  //   "stand-up-comedy",
  // ];

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const handleArtistClick = (artist) => {
    navigate(`/artist/${artist._id}`, { state: artist });
  };

  return (
    <>
      <div>
        <div className="nav-head">
          <header className="header">
            <img src={img2} className="header-image" alt="header" />
            <div className="header-content">
              <h1>The worlds best experiences curated just for you</h1>
              <input
                type="text"
                placeholder="Search for experiences and cities"
              />
            </div>
          </header>
        </div>
        <div className="art-main">
          <div className="cont-art">
            {/* {showTypes.map((showType) => (
              <button
                key={showType}
                className="but-nav"
                onClick={() => handleFilterChange(showType)}
              >
                <i className="fas fa-microphone"></i>
              </button>
            ))} */}
            <button className="but-nav" onClick={() => handleFilterChange("")}>
              <i className="fas fa-undo-alt"></i>
            </button>
            <button
              className="but-nav"
              onClick={() => handleFilterChange("stand-up-comedy")}
            >
              <i className="fas fa-microphone-alt"></i>
            </button>
            <button
              className="but-nav"
              onClick={() => handleFilterChange("comedy-show")}
            >
              <i className="fas fa-laugh"></i>
            </button>
            <button
              className="but-nav"
              onClick={() => handleFilterChange("musical-show")}
            >
              <i className="fas fa-music"></i>
            </button>
            <button
              className="but-nav"
              onClick={() => handleFilterChange("mime")}
            >
              <i className="fas fa-theater-masks"></i>
            </button>
            <button
              className="but-nav"
              onClick={() => handleFilterChange("kids-show")}
            >
              <i className="fas fa-child"></i>
            </button>
            <button
              className="but-nav"
              onClick={() => handleFilterChange("expo")}
            >
              <i className="fas fa-landmark"></i>
            </button>
            <button
              className="but-nav"
              onClick={() => handleFilterChange("drama")}
            >
              <i className="fas fa-theater-masks"></i>
            </button>
            <button
              className="but-nav"
              onClick={() => handleFilterChange("chit-chat")}
            >
              <i className="fas fa-comments"></i>
            </button>
            <button
              className="but-nav"
              onClick={() => handleFilterChange("concert")}
            >
              <i className="fas fa-guitar"></i>
            </button>
            <button
              className="but-nav"
              onClick={() => handleFilterChange("talkshow")}
            >
              <i className="fas fa-microphone"></i>
            </button>
          </div>
          <div className="Event-hd">
            <h4 style={{ padding: "8px 0px 0px", margin: "1rem 2rem" }}>
              Recommended Events
            </h4>
          </div>

          <div className="Artist-cont-main">
            {filteredArtists && filteredArtists.length > 0 ? (
              filteredArtists.map((artist) => (
                <div
                  key={artist._id}
                  className="Artist-sub1"
                  onClick={() => handleArtistClick(artist)}
                >
                  <a href={""} className="event-link custom-link">
                    <div className="event-container custom-container">
                      <div className="promo-section custom-promo">
                        <div className="promo-indicator custom-indicator">
                          <div className="promo-text custom-text">PROMOTED</div>
                        </div>
                      </div>
                      <div className="event-image-container custom-image-container">
                        <div className="image-wrapper custom-image-wrapper">
                          <img
                            src={artist.artistImage}
                            alt={artist.artistName}
                            width="100%"
                            height="100%"
                          />
                        </div>
                      </div>
                      <div
                        className="event-details custom-details"
                        style={{ padding: "8px 0px 0px" }}
                      >
                        <div className="event-title custom-title">
                          <div className="title-text custom-title-text">
                            {artist.artistName}
                          </div>
                        </div>
                        <div className="event-location custom-location">
                          <div className="location-text custom-location-text">
                            {artist.location}
                          </div>
                        </div>
                        <div className="event-category custom-category">
                          <div className="category-text custom-category-text">
                            {artist.showType}
                          </div>
                        </div>
                        <div className="event-price custom-price">
                          <div className="price-text custom-price-text">
                            {artist.price}
                          </div>
                        </div>
                        <h3 className="event-heading custom-heading">
                          {artist.concertName}
                        </h3>
                        <button className="go-button">Go</button>
                      </div>
                    </div>
                  </a>
                </div>
              ))
            ) : (
              <div>No artists found.</div>
            )}
          </div>
        </div>

        <div className="Live-trnd-hd">
          <div className="Best-li-Hd">
            <h2 style={{ padding: "8px 0px 0px", margin: "1rem 2rem" }}>
              The Best Of Live Events
            </h2>
          </div>
          <div className="Scroll-cont-main">
            <div className="card-container">
              <a href="" id="explore-food-drinks" className="card-link">
                <div className="card-content">
                  <div className="card-image-container">
                    <div
                      width="100%"
                      height="100%"
                      data-content="Food and Drinks"
                      className="card-image-wrapper"
                    >
                      <div className="card-image-inner">
                        <div
                          className="card-image"
                          style={{ background: "none" }}
                        >
                          <img
                            alt="Food and Drinks"
                            width="100%"
                            height="100%"
                            className="card-img"
                            src={img15}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-overlay"></div>
                </div>
              </a>
            </div>
            <div className="card-container">
              <a href="" id="explore-food-drinks" className="card-link">
                <div className="card-content">
                  <div className="card-image-container">
                    <div
                      width="100%"
                      height="100%"
                      data-content="Food and Drinks"
                      className="card-image-wrapper"
                    >
                      <div className="card-image-inner">
                        <div
                          className="card-image"
                          style={{ background: "none" }}
                        >
                          <img
                            alt="Food and Drinks"
                            width="100%"
                            height="100%"
                            className="card-img"
                            src={img16}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-overlay"></div>
                </div>
              </a>
            </div>
            <div className="card-container">
              <a href="" id="explore-food-drinks" className="card-link">
                <div className="card-content">
                  <div className="card-image-container">
                    <div
                      width="100%"
                      height="100%"
                      data-content="Food and Drinks"
                      className="card-image-wrapper"
                    >
                      <div className="card-image-inner">
                        <div
                          className="card-image"
                          style={{ background: "none" }}
                        >
                          <img
                            alt="Food and Drinks"
                            width="100%"
                            height="100%"
                            className="card-img"
                            src={img17}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-overlay"></div>
                </div>
              </a>
            </div>
            <div className="card-container">
              <a href="" id="explore-food-drinks" className="card-link">
                <div className="card-content">
                  <div className="card-image-container">
                    <div
                      width="100%"
                      height="100%"
                      data-content="Food and Drinks"
                      className="card-image-wrapper"
                    >
                      <div className="card-image-inner">
                        <div
                          className="card-image"
                          style={{ background: "none" }}
                        >
                          <img
                            alt="Food and Drinks"
                            width="100%"
                            height="100%"
                            className="card-img"
                            src={img18}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-overlay"></div>
                </div>
              </a>
            </div>
            <div className="card-container">
              <a href="" id="explore-food-drinks" className="card-link">
                <div className="card-content">
                  <div className="card-image-container">
                    <div
                      width="100%"
                      height="100%"
                      data-content="Food and Drinks"
                      className="card-image-wrapper"
                    >
                      <div className="card-image-inner">
                        <div
                          className="card-image"
                          style={{ background: "none" }}
                        >
                          <img
                            alt="Food and Drinks"
                            width="100%"
                            height="100%"
                            className="card-img"
                            src={img19}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-overlay"></div>
                </div>
              </a>
            </div>
            <div className="card-container">
              <a href="" id="explore-food-drinks" className="card-link">
                <div className="card-content">
                  <div className="card-image-container">
                    <div
                      width="100%"
                      height="100%"
                      data-content="Food and Drinks"
                      className="card-image-wrapper"
                    >
                      <div className="card-image-inner">
                        <div
                          className="card-image"
                          style={{ background: "none" }}
                        >
                          <img
                            alt="Food and Drinks"
                            width="100%"
                            height="100%"
                            className="card-img"
                            src={img20}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-overlay"></div>
                </div>
              </a>
            </div>
            <div className="card-container">
              <a href="" id="explore-food-drinks" className="card-link">
                <div className="card-content">
                  <div className="card-image-container">
                    <div
                      width="100%"
                      height="100%"
                      data-content="Food and Drinks"
                      className="card-image-wrapper"
                    >
                      <div className="card-image-inner">
                        <div
                          className="card-image"
                          style={{ background: "none" }}
                        >
                          <img
                            alt="Food and Drinks"
                            width="100%"
                            height="100%"
                            className="card-img"
                            src={img21}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-overlay"></div>
                </div>
              </a>
            </div>
            <div className="card-container">
              <a href="" id="explore-food-drinks" className="card-link">
                <div className="card-content">
                  <div className="card-image-container">
                    <div
                      width="100%"
                      height="100%"
                      data-content="Food and Drinks"
                      className="card-image-wrapper"
                    >
                      <div className="card-image-inner">
                        <div
                          className="card-image"
                          style={{ background: "none" }}
                        >
                          <img
                            alt="Food and Drinks"
                            width="100%"
                            height="100%"
                            className="card-img"
                            src={img19}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-overlay"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
