import { configureStore } from '@reduxjs/toolkit';
import tweetReducer from '../features/tweet.slice';

export const store = configureStore({
  reducer: {
    tweets: tweetReducer,
  },
});
