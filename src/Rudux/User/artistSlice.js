import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch all artists
export const fetchArtists = createAsyncThunk('artists/fetchArtists', async () => {
  const response = await axios.get('http://localhost:4000/api/auth/getart'); 
  return response.data;
});

// Fetch a single artist by ID
export const fetchArtistById = createAsyncThunk('artists/fetchArtistById', async (id) => {
  const response = await axios.get(`http://localhost:4000/api/artists/${id}`);
  return response.data;
});

// Book tickets
export const bookTicket = createAsyncThunk('artists/bookTicket', async (bookingData) => {
  const response = await axios.post('http://localhost:4000/api/auth/bookings', bookingData);
  return response.data;
});

const artistSlice = createSlice({
  name: 'artists',
  initialState: {
    artists: [],
    artist: null,
    bookingStatus: 'idle',
    bookingError: null,
    status: 'idle',
    error: null
  },
  reducers: {
    reset: (state) => {
      state.artists = [];
      state.artist = null;
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtists.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArtists.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.artists = action.payload.artData;
      })
      .addCase(fetchArtists.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchArtistById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArtistById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.artist = action.payload;
      })
      .addCase(fetchArtistById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(bookTicket.pending, (state) => {
        state.bookingStatus = 'loading';
      })
      .addCase(bookTicket.fulfilled, (state, action) => {
        state.bookingStatus = 'succeeded';
        // You can handle the booked data here if needed
      })
      .addCase(bookTicket.rejected, (state, action) => {
        state.bookingStatus = 'failed';
        state.bookingError = action.error.message;
      });
  }
});

export const { reset } = artistSlice.actions;

export default artistSlice.reducer;














// // Rudux/User/artistSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Fetch all artists
// export const fetchArtists = createAsyncThunk('artists/fetchArtists', async () => {
//   const response = await axios.get('http://localhost:4000/api/auth/getart'); 
//   return response.data;
// });

// // Fetch a single artist by ID
// export const fetchArtistById = createAsyncThunk('artists/fetchArtistById', async (id) => {
//   const response = await axios.get(`http://localhost:4000/api/artists/${id}`);
//   return response.data;
// });

// const artistSlice = createSlice({
//   name: 'artists',
//   initialState: {
//     artists: [],
//     artist: null,
//     status: 'idle',
//     error: null
//   },
//   reducers: {
//     reset: (state) => {
//       state.artists = [];
//       state.artist = null;
//       state.status = 'idle';
//       state.error = null;
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchArtists.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchArtists.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.artists = action.payload.artData;
//       })
//       .addCase(fetchArtists.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(fetchArtistById.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchArtistById.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.artist = action.payload;
//       })
//       .addCase(fetchArtistById.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   }
// });

// export const { reset } = artistSlice.actions;

// export default artistSlice.reducer;






















// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Fetch all artists
// export const fetchArtists = createAsyncThunk('artists/fetchArtists', async () => {
//   const response = await axios.get('http://localhost:4000/api/auth/getart'); 
//   return response.data;
// });

// // Fetch a single artist by ID
// export const fetchArtistById = createAsyncThunk('artists/fetchArtistById', async (id) => {
//   const response = await axios.get(`/api/artists/${id}`);
//   return response.data;
// });

// const artistSlice = createSlice({
//   name: 'artists',
//   initialState: {
//     artists: [],
//     artist: null,
//     status: 'idle',
//     error: null
//   },
//   reducers: {
//     reset: (state) => {
//       state.artists = [];
//       state.artist = null;
//       state.status = 'idle';
//       state.error = null;
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchArtists.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchArtists.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.artists = action.payload.artData;
//       })
//       .addCase(fetchArtists.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(fetchArtistById.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchArtistById.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.artist = action.payload;
//       })
//       .addCase(fetchArtistById.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   }
// });

// export const { reset } = artistSlice.actions;

// export default artistSlice.reducer;