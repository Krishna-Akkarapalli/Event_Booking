// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import { fetchArtistById } from "../../Rudux/User/artistSlice";


// const ArtoneMap = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const artist = location.state;
//   const fetchedArtist = useSelector((state) => state.artists.artist);
//   const status = useSelector((state) => state.artists.status);
  
//   useEffect(() => {
//     if (!artist) {
//       dispatch(fetchArtistById(id));
//     }
//   }, [dispatch, id, artist]);

//   const displayArtist = artist || fetchedArtist;

//   if (status === 'loading') { 
//     return <div>Loading...</div>;
//   }

//   if (!displayArtist) {
//     return <div>No artist found</div>;
//   }

//   const handleSeatSelection = () => {
//     navigate('/seats', { state: { artist: displayArtist } });
//   };

//   return (
//     <div className="ticket-booking-container">
//       <h1>{displayArtist.concertName}</h1>
//       <p>Location: {displayArtist.location}</p>
//       <p>Show Type: {displayArtist.showType}</p>
//       <p>Price: {displayArtist.price}</p>
//       <p>Show Name: {displayArtist.concertName}</p>
//       <img src={displayArtist.artistImage} alt={displayArtist.artistName} />
//       <button onClick={handleSeatSelection}>Select Seats</button>
//     </div>
//   );
// };

// export default ArtoneMap;

