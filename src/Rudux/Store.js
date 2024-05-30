// store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../Rudux/User/userSlice';
import artistReducer, { fetchArtists } from '../Rudux/User/artistSlice';
// import movieEventsReducer from '../Rudux/User/movieEventsSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const rootReducer = combineReducers({
  user: userReducer,
  artists: artistReducer,
  // movieEvents: movieEventsReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Fetch artist details when rehydration is complete
persistor.subscribe(() => {
  if (persistor.getState().bootstrapped) {
    store.dispatch(fetchArtists());
  }
});

















// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import userReducer from '../Rudux/User/userSlice';
// import artistReducer from '../Rudux/User/artistSlice';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';


// const rootReducer = combineReducers({ 
//   user: userReducer,
//   artists: artistReducer
// });

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

// persistor.purge().then(() => {
//   store.dispatch({ type: 'artists/reset' });
// });
