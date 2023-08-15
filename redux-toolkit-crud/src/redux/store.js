import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'; // Import the logger middleware
import authorsReducer from './reducers/authorsSlice'; // Adjust the import path

const store = configureStore({
  reducer: {
    authors: authorsReducer,
    // Add other reducers here if needed
  },
  middleware: [...getDefaultMiddleware(), logger], // Add the logger middleware
});

export default store;