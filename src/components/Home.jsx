import "./Home.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import img2 from "../../public/assets/img2.jpg";
import img5 from "../../public/assets/img5.png";
import img7 from "../../public/assets/img7.png";
import img9 from "../../public/assets/img9.png";
import img11 from "../../public/assets/img11.png";
import img13 from "../../public/assets/img13.png";
import img15 from "../../public/assets/img15.jpg";
import img16 from "../../public/assets/img16.jpg";
import img17 from "../../public/assets/img17.jpg";
import img18 from "../../public/assets/img18.jpg";
import img19 from "../../public/assets/img19.jpg";
import img20 from "../../public/assets/img20.jpg";
import img21 from "../../public/assets/img21.jpg";

// import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <div>
        <div className="nav-head">
          {/* <Navbar /> */}
          <header className="header">
            <img
              src={img2} // replace with your image URL
              className="header-image"
              alt="header"
            />
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
            <button className="but-nav">
              <i className="fas fa-music"></i>
            </button>
            <button className="but-nav">
              <i className="fas fa-microphone-alt"></i>
            </button>
            <button className="but-nav">
            <i className="fas fa-laugh-squint"></i>
            </button>
            <button className="but-nav">
              <i className="fas fa-comments"></i>
            </button>
            <button className="but-nav">
              <i className="fas fa-chalkboard-teacher"></i>
            </button>
            <button className="but-nav">
              <i className="fas fa-theater-masks"></i>
            </button>
            <button className="but-nav">
              <i className="fas fa-expo"></i>
            </button>
            <button className="but-nav">
              <i className="fas fa-sun"></i>
            </button>
            <button className="but-nav">
              <i className="fas fa-moon"></i>
            </button>
            <button className="but-nav">
              <i className="fas fa-comments"></i>
            </button>
            <button className="but-nav">
              <i className="fas fa-music"></i>
            </button>
            <button className="but-nav">
              <i className="fas fa-microphone-alt"></i>
            </button>
            <button className="but-nav">
              <i className="fas fa-laugh-squint"></i>
            </button>
            <button className="but-nav">
              <i className="fas fa-comments"></i>
            </button>
            <button className="but-nav">
              <i className="fas fa-chalkboard-teacher"></i>
            </button>
            <button className="but-nav">
              <i className="fas fa-theater-masks"></i>
            </button>
            <button className="but-nav">
              <i className="fas fa-expo"></i>
            </button>
            <button className="but-nav">
              <i className="fas fa-sun"></i>
            </button>
            <button className="but-nav">
              <i className="fas fa-moon"></i>
            </button>
            <button className="but-nav">
              <i className="fas fa-comments"></i>
            </button>
          </div>
          <div className="Event-hd">
            <h4 style={{ padding: "8px 0px 0px", margin: "1rem 2rem" }}>
              Recommended Events
            </h4>
          </div>

          <div className="Artist-cont-main">
            <div className="Artist-sub1">
              <a href={""} className="event-link custom-link">
                <div className="event-container custom-container">
                  <div className="promo-section custom-promo">
                    <div className="promo-indicator custom-indicator">
                      <div className="promo-text custom-text">PROMOTED</div>
                    </div>
                  </div>
                  <div className="event-image-container custom-image-container">
                    <div className="image-wrapper custom-image-wrapper">
                      <img src={img5} alt="hari" width="100%" height="100%" />
                    </div>
                  </div>
                  <div
                    className="event-details custom-details"
                    style={{ padding: "8px 0px 0px" }}
                  >
                    <div className="event-title custom-title">
                      <div className="title-text custom-title-text">
                       Avish Merol
                      </div>
                    </div>
                    <div className="event-location custom-location">
                      <div className="location-text custom-location-text">
                        Banglore
                      </div>
                    </div>
                    <div className="event-category custom-category">
                      <div className="category-text custom-category-text">
                        Comedy-Show
                      </div>
                    </div>
                    <div className="event-price custom-price">
                      <div className="price-text custom-price-text">
                        10,000/-
                      </div>
                    </div>
                    <h3 className="event-heading custom-heading">
                      Drive with Happy
                    </h3>
                    <Link to="/artreso">
                      <button  className="go-button">Go</button>
                    </Link>
                    
                  </div>
                </div>
              </a>
            </div>
            <div className="Artist-sub1">
              <a href={""} className="event-link custom-link">
                <div className="event-container custom-container">
                  <div className="promo-section custom-promo">
                    <div className="promo-indicator custom-indicator">
                      <div className="promo-text custom-text">PROMOTED</div>
                    </div>
                  </div>
                  <div className="event-image-container custom-image-container">
                    <div className="image-wrapper custom-image-wrapper">
                      <img src={img7} alt="hari" width="100%" height="100%" />
                    </div>
                  </div>
                  <div
                    className="event-details custom-details"
                    style={{ padding: "8px 0px 0px" }}
                  >
                    <div className="event-title custom-title">
                      <div className="title-text custom-title-text">
                        krishna
                      </div>
                    </div>
                    <div className="event-location custom-location">
                      <div className="location-text custom-location-text">
                        Banglore
                      </div>
                    </div>
                    <div className="event-category custom-category">
                      <div className="category-text custom-category-text">
                        Comedy-Show
                      </div>
                    </div>
                    <div className="event-price custom-price">
                      <div className="price-text custom-price-text">
                        10,000/-
                      </div>
                    </div>
                    <h3 className="event-heading custom-heading">
                      Drive with Happy
                    </h3>
                    <div className="go-button">Go</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="Artist-sub1">
              <a href={""} className="event-link custom-link">
                <div className="event-container custom-container">
                  <div className="promo-section custom-promo">
                    <div className="promo-indicator custom-indicator">
                      <div className="promo-text custom-text">PROMOTED</div>
                    </div>
                  </div>
                  <div className="event-image-container custom-image-container">
                    <div className="image-wrapper custom-image-wrapper">
                      <img src={img9} alt="hari" width="100%" height="100%" />
                    </div>
                  </div>
                  <div
                    className="event-details custom-details"
                    style={{ padding: "8px 0px 0px" }}
                  >
                    <div className="event-title custom-title">
                      <div className="title-text custom-title-text">
                        krishna
                      </div>
                    </div>
                    <div className="event-location custom-location">
                      <div className="location-text custom-location-text">
                        Banglore
                      </div>
                    </div>
                    <div className="event-category custom-category">
                      <div className="category-text custom-category-text">
                        Comedy-Show
                      </div>
                    </div>
                    <div className="event-price custom-price">
                      <div className="price-text custom-price-text">
                        10,000/-
                      </div>
                    </div>
                    <h3 className="event-heading custom-heading">
                      Drive with Happy
                    </h3>
                    <div className="go-button">Go</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="Artist-sub1">
              <a href={""} className="event-link custom-link">
                <div className="event-container custom-container">
                  <div className="promo-section custom-promo">
                    <div className="promo-indicator custom-indicator">
                      <div className="promo-text custom-text">PROMOTED</div>
                    </div>
                  </div>
                  <div className="event-image-container custom-image-container">
                    <div className="image-wrapper custom-image-wrapper">
                      <img src={img11} alt="hari" width="100%" height="100%" />
                    </div>
                  </div>
                  <div
                    className="event-details custom-details"
                    style={{ padding: "8px 0px 0px" }}
                  >
                    <div className="event-title custom-title">
                      <div className="title-text custom-title-text">
                        krishna
                      </div>
                    </div>
                    <div className="event-location custom-location">
                      <div className="location-text custom-location-text">
                        Banglore
                      </div>
                    </div>
                    <div className="event-category custom-category">
                      <div className="category-text custom-category-text">
                        Comedy-Show
                      </div>
                    </div>
                    <div className="event-price custom-price">
                      <div className="price-text custom-price-text">
                        10,000/-
                      </div>
                    </div>
                    <h3 className="event-heading custom-heading">
                      Drive with Happy
                    </h3>
                    <div className="go-button">Go</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="Artist-sub1">
              <a href={""} className="event-link custom-link">
                <div className="event-container custom-container">
                  <div className="promo-section custom-promo">
                    <div className="promo-indicator custom-indicator">
                      <div className="promo-text custom-text">PROMOTED</div>
                    </div>
                  </div>
                  <div className="event-image-container custom-image-container">
                    <div className="image-wrapper custom-image-wrapper">
                      <img src={img13} alt="hari" width="100%" height="100%" />
                    </div>
                  </div>
                  <div
                    className="event-details custom-details"
                    style={{ padding: "8px 0px 0px" }}
                  >
                    <div className="event-title custom-title">
                      <div className="title-text custom-title-text">
                        krishna
                      </div>
                    </div>
                    <div className="event-location custom-location">
                      <div className="location-text custom-location-text">
                        Banglore
                      </div>
                    </div>
                    <div className="event-category custom-category">
                      <div className="category-text custom-category-text">
                        Comedy-Show
                      </div>
                    </div>
                    <div className="event-price custom-price">
                      <div className="price-text custom-price-text">
                        10,000/-
                      </div>
                    </div>
                    <h3 className="event-heading custom-heading">
                      Drive with Happy
                    </h3>
                    <div className="go-button">Go</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="Artist-sub1">
              <a href={""} className="event-link custom-link">
                <div className="event-container custom-container">
                  <div className="promo-section custom-promo">
                    <div className="promo-indicator custom-indicator">
                      <div className="promo-text custom-text">PROMOTED</div>
                    </div>
                  </div>
                  <div className="event-image-container custom-image-container">
                    <div className="image-wrapper custom-image-wrapper">
                      <img src={img5} alt="hari" width="100%" height="100%" />
                    </div>
                  </div>
                  <div
                    className="event-details custom-details"
                    style={{ padding: "8px 0px 0px" }}
                  >
                    <div className="event-title custom-title">
                      <div className="title-text custom-title-text">
                        krishna
                      </div>
                    </div>
                    <div className="event-location custom-location">
                      <div className="location-text custom-location-text">
                        Banglore
                      </div>
                    </div>
                    <div className="event-category custom-category">
                      <div className="category-text custom-category-text">
                        Comedy-Show
                      </div>
                    </div>
                    <div className="event-price custom-price">
                      <div className="price-text custom-price-text">
                        10,000/-
                      </div>
                    </div>
                    <h3 className="event-heading custom-heading">
                      Drive with Happy
                    </h3>
                    <div className="go-button">Go</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="Artist-sub1">
              <a href={""} className="event-link custom-link">
                <div className="event-container custom-container">
                  <div className="promo-section custom-promo">
                    <div className="promo-indicator custom-indicator">
                      <div className="promo-text custom-text">PROMOTED</div>
                    </div>
                  </div>
                  <div className="event-image-container custom-image-container">
                    <div className="image-wrapper custom-image-wrapper">
                      <img src={img7} alt="hari" width="100%" height="100%" />
                    </div>
                  </div>
                  <div
                    className="event-details custom-details"
                    style={{ padding: "8px 0px 0px" }}
                  >
                    <div className="event-title custom-title">
                      <div className="title-text custom-title-text">
                        krishna
                      </div>
                    </div>
                    <div className="event-location custom-location">
                      <div className="location-text custom-location-text">
                        Banglore
                      </div>
                    </div>
                    <div className="event-category custom-category">
                      <div className="category-text custom-category-text">
                        Comedy-Show
                      </div>
                    </div>
                    <div className="event-price custom-price">
                      <div className="price-text custom-price-text">
                        10,000/-
                      </div>
                    </div>
                    <h3 className="event-heading custom-heading">
                      Drive with Happy
                    </h3>
                    <div className="go-button">Go</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="Artist-sub1">
              <a href={""} className="event-link custom-link">
                <div className="event-container custom-container">
                  <div className="promo-section custom-promo">
                    <div className="promo-indicator custom-indicator">
                      <div className="promo-text custom-text">PROMOTED</div>
                    </div>
                  </div>
                  <div className="event-image-container custom-image-container">
                    <div className="image-wrapper custom-image-wrapper">
                      <img src={img9} alt="hari" width="100%" height="100%" />
                    </div>
                  </div>
                  <div
                    className="event-details custom-details"
                    style={{ padding: "8px 0px 0px" }}
                  >
                    <div className="event-title custom-title">
                      <div className="title-text custom-title-text">
                        krishna
                      </div>
                    </div>
                    <div className="event-location custom-location">
                      <div className="location-text custom-location-text">
                        Banglore
                      </div>
                    </div>
                    <div className="event-category custom-category">
                      <div className="category-text custom-category-text">
                        Comedy-Show
                      </div>
                    </div>
                    <div className="event-price custom-price">
                      <div className="price-text custom-price-text">
                        10,000/-
                      </div>
                    </div>
                    <h3 className="event-heading custom-heading">
                      Drive with Happy
                    </h3>
                    <div className="go-button">Go</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="Artist-sub1">
              <a href={""} className="event-link custom-link">
                <div className="event-container custom-container">
                  <div className="promo-section custom-promo">
                    <div className="promo-indicator custom-indicator">
                      <div className="promo-text custom-text">PROMOTED</div>
                    </div>
                  </div>
                  <div className="event-image-container custom-image-container">
                    <div className="image-wrapper custom-image-wrapper">
                      <img src={img11} alt="hari" width="100%" height="100%" />
                    </div>
                  </div>
                  <div
                    className="event-details custom-details"
                    style={{ padding: "8px 0px 0px" }}
                  >
                    <div className="event-title custom-title">
                      <div className="title-text custom-title-text">
                        krishna
                      </div>
                    </div>
                    <div className="event-location custom-location">
                      <div className="location-text custom-location-text">
                        Banglore
                      </div>
                    </div>
                    <div className="event-category custom-category">
                      <div className="category-text custom-category-text">
                        Comedy-Show
                      </div>
                    </div>
                    <div className="event-price custom-price">
                      <div className="price-text custom-price-text">
                        10,000/-
                      </div>
                    </div>
                    <h3 className="event-heading custom-heading">
                      Drive with Happy
                    </h3>
                    <div className="go-button">Go</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="Artist-sub1">
              <a href={""} className="event-link custom-link">
                <div className="event-container custom-container">
                  <div className="promo-section custom-promo">
                    <div className="promo-indicator custom-indicator">
                      <div className="promo-text custom-text">PROMOTED</div>
                    </div>
                  </div>
                  <div className="event-image-container custom-image-container">
                    <div className="image-wrapper custom-image-wrapper">
                      <img src={img13} alt="hari" width="100%" height="100%" />
                    </div>
                  </div>
                  <div
                    className="event-details custom-details"
                    style={{ padding: "8px 0px 0px" }}
                  >
                    <div className="event-title custom-title">
                      <div className="title-text custom-title-text">
                        krishna
                      </div>
                    </div>
                    <div className="event-location custom-location">
                      <div className="location-text custom-location-text">
                        Banglore
                      </div>
                    </div>
                    <div className="event-category custom-category">
                      <div className="category-text custom-category-text">
                        Comedy-Show
                      </div>
                    </div>
                    <div className="event-price custom-price">
                      <div className="price-text custom-price-text">
                        10,000/-
                      </div>
                    </div>
                    <h3 className="event-heading custom-heading">
                      Drive with Happy
                    </h3>
                    <div className="go-button">Go</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="Artist-sub1">
              <a href={""} className="event-link custom-link">
                <div className="event-container custom-container">
                  <div className="promo-section custom-promo">
                    <div className="promo-indicator custom-indicator">
                      <div className="promo-text custom-text">PROMOTED</div>
                    </div>
                  </div>
                  <div className="event-image-container custom-image-container">
                    <div className="image-wrapper custom-image-wrapper">
                      <img src={img7} alt="hari" width="100%" height="100%" />
                    </div>
                  </div>
                  <div
                    className="event-details custom-details"
                    style={{ padding: "8px 0px 0px" }}
                  >
                    <div className="event-title custom-title">
                      <div className="title-text custom-title-text">
                        krishna
                      </div>
                    </div>
                    <div className="event-location custom-location">
                      <div className="location-text custom-location-text">
                        Banglore
                      </div>
                    </div>
                    <div className="event-category custom-category">
                      <div className="category-text custom-category-text">
                        Comedy-Show
                      </div>
                    </div>
                    <div className="event-price custom-price">
                      <div className="price-text custom-price-text">
                        10,000/-
                      </div>
                    </div>
                    <h3 className="event-heading custom-heading">
                      Drive with Happy
                    </h3>
                    <div className="go-button">Go</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="Artist-sub1">
              <a href={""} className="event-link custom-link">
                <div className="event-container custom-container">
                  <div className="promo-section custom-promo">
                    <div className="promo-indicator custom-indicator">
                      <div className="promo-text custom-text">PROMOTED</div>
                    </div>
                  </div>
                  <div className="event-image-container custom-image-container">
                    <div className="image-wrapper custom-image-wrapper">
                      <img src={img9} alt="hari" width="100%" height="100%" />
                    </div>
                  </div>
                  <div
                    className="event-details custom-details"
                    style={{ padding: "8px 0px 0px" }}
                  >
                    <div className="event-title custom-title">
                      <div className="title-text custom-title-text">
                        krishna
                      </div>
                    </div>
                    <div className="event-location custom-location">
                      <div className="location-text custom-location-text">
                        Banglore
                      </div>
                    </div>
                    <div className="event-category custom-category">
                      <div className="category-text custom-category-text">
                        Comedy-Show
                      </div>
                    </div>
                    <div className="event-price custom-price">
                      <div className="price-text custom-price-text">
                        10,000/-
                      </div>
                    </div>
                    <h3 className="event-heading custom-heading">
                      Drive with Happy
                    </h3>
                    <div className="go-button">Go</div>
                  </div>
                </div>
              </a>
            </div>
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
}

export default Home;
