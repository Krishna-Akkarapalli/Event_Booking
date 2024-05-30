import { useState } from "react";
import "./ArtoneDatepic.css";
import ArtoneShowcard from "./ArtoneShowcard";

const ArtoneDatepic = () => {
  const [selectedDate, setSelectedDate] = useState(0);

  const movieData = {
    title: "Musical Concart by John Doe - English",
    genres: ["Love", "Pathos"],
    dates: [
      { day: "FRI", date: "24", month: "MAY" },
      { day: "SAT", date: "25", month: "MAY" },
      { day: "SUN", date: "26", month: "MAY" },
    ],
    theaters: [
      {
        name: "MG Road,Central Bangalore,Bangalore: PNR Felicity Mall",
        mTicket: true,
        foodBeverage: false,
        showtimes: [
          { time: "11:05 AM", cancellationAvailable: true },
          { time: "04:05 PM", cancellationAvailable: true },
        ],
      },
      {
        name: "Cinepolis VIP: Lulu Mall, Bengaluru",
        mTicket: true,
        foodBeverage: true,
        showtimes: [
          {
            time: "10:20 AM",
            cancellationAvailable: false,
            format: "DOLBY 7.1",
          },
          {
            time: "07:35 PM",
            cancellationAvailable: false,
            format: "DOLBY 7.1",
          },
          {
            time: "10:30 PM",
            cancellationAvailable: false,
            format: "DOLBY 7.1",
          },
        ],
      },
      {
        name: "Cinepolis: Binnypet Mall",
        mTicket: true,
        foodBeverage: true,
        showtimes: [
          { time: "10:05 AM", cancellationAvailable: false, format: "QSC 7.1" },
          { time: "11:00 AM", cancellationAvailable: false, format: "QSC 7.1" },
          { time: "01:50 PM", cancellationAvailable: false, format: "QSC 7.1" },
          { time: "04:40 PM", cancellationAvailable: false, format: "QSC 7.1" },
          { time: "07:30 PM", cancellationAvailable: false, format: "QSC 7.1" },
          { time: "10:30 PM", cancellationAvailable: false, format: "QSC 7.1" },
        ],
      },
      // Add more theaters here
    ],
  };

  return (
    <div className="app-container">
      <div className="movie-header">
        {/* <div className="imgArtRes">
          <img src={img6} alt="" />
        </div> */}
        <h1>{movieData.title}</h1>
        <div className="genres">
          {movieData.genres.map((genre) => (
            <span key={genre} className="genre-tag">
              {genre}
            </span>
          ))}
        </div>

        <div className="date-selector">
          <button
            onClick={() =>
              setSelectedDate(selectedDate > 0 ? selectedDate - 1 : 0)
            }
          >
            {"<"}
          </button>
          {movieData.dates.map((date, index) => (
            <div
              key={index}
              className={`date-item ${
                selectedDate === index ? "selected" : ""
              }`}
              onClick={() => setSelectedDate(index)}
            >
              <span className="day">{date.day}</span>
              <span className="date">{date.date}</span>
              <span className="month">{date.month}</span>
            </div>
          ))}
          <button
            onClick={() =>
              setSelectedDate(
                selectedDate < movieData.dates.length - 1
                  ? selectedDate + 1
                  : movieData.dates.length - 1
              )
            }
          >
            {">"}
          </button>
        </div>
      </div>

      <div className="filter-bar">
        <div className="language">English - Live</div>
        {/* You can add more filter options here (price, timings) */}
        <div className="filter-options">
          <div className="filter-dropdown">
            <span>Filter Price Range</span>
            <select>
              <option>All Prices</option>
              <option>Under ₹1150</option>
              {/* Add more price options */}
            </select>
          </div>

          {/* <div className="filter-input">
            <input type="text" placeholder="Filter Show Timings" />
            <button><i className="fas fa-search"></i></button> 
          </div> */}
        </div>
      </div>

      <div className="legend">
        <div className="legend-item">
          <span className="dot available"></span> AVAILABLE
        </div>
        <div className="legend-item">
          <span className="dot fast-filling"></span> FAST FILLING
        </div>
        {/* Add more legend items (LAN, SUBTITLES LANGUAGE) */}
      </div>

      <div className="theaters-list">
        {movieData.theaters.map((theater, index) => (
          <ArtoneShowcard key={index} theater={theater} />
        ))}
      </div>
    </div>
  );
};

export default ArtoneDatepic;
