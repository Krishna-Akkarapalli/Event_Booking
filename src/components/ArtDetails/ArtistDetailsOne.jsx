import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { fetchArtistById } from "../Rudux/User/artistSlice";

const ArtistDetailsOne = () => {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  
  const artist = location.state;
  const fetchedArtist = useSelector((state) => state.artists.artist);
  const status = useSelector((state) => state.artists.status);
  
  useEffect(() => {
    if (!artist) {
      dispatch(fetchArtistById(id));
    }
  }, [dispatch, id, artist]);

  if (status === 'loading') { 
    return <div>Loading...</div>;
  }

  const displayArtist = artist || fetchedArtist;

  if (!displayArtist) {
    return <div>No artist found</div>;
  }

  return (
    <div>
      <h1>{displayArtist.artistName}</h1>
      <p>Location: {displayArtist.location}</p>
      <p>Show Type: {displayArtist.showType}</p>
      <p>Price: {displayArtist.price}</p>
      <p>Show Name: {displayArtist.concertName}</p>
      <img src={displayArtist.artistImage} alt={displayArtist.artistName} />
    </div>
  );
};

export default ArtistDetailsOne;






















// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useParams } from "react-router-dom";
// import { fetchArtistById } from "../Rudux/User/artistSlice";

// const ArtistDetailsOne = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const dispatch = useDispatch();
  
//   const artist = location.state;
//   const fetchedArtist = useSelector((state) => state.artists.artist);
//   const status = useSelector((state) => state.artists.status);
  
//   useEffect(() => {
//     if (!artist) {
//       dispatch(fetchArtistById(id));
//     }
//   }, [dispatch, id, artist]);

//   if (status === 'loading') { 
//     return <div>Loading...</div>;
//   }

//   const displayArtist = artist || fetchedArtist;

//   if (!displayArtist) {
//     return <div>No artist found</div>;
//   }

//   return (
//     <div>
//       <h1>{displayArtist.artistName}</h1>
//       <p>Location: {displayArtist.location}</p>
//       <p>Show Type: {displayArtist.showType}</p>
//       <p>Price: {displayArtist.price}</p>
//       <p>Show Name: {displayArtist.concertName}</p>
//       <img src={displayArtist.artistImage} alt={displayArtist.artistName} />
//     </div>
//   );
// };

// export default ArtistDetailsOne;

