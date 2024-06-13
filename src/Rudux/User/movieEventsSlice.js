import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch movie events
export const fetchMovieEvents = createAsyncThunk('movieEvents/fetchMovieEvents', async () => {
  const response = await axios.get('http://localhost:4000/api/auth/consertTickGet');
  const data = await response.json();
  return data;
});

const movieEventsSlice = createSlice({
  name: 'movieEvents',
  initialState: {
    events: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieEvents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieEvents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.events = action.payload;
      })
      .addCase(fetchMovieEvents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default movieEventsSlice.reducer;
