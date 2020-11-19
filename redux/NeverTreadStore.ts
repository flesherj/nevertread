import { configureStore } from '@reduxjs/toolkit';
import feedReducer from '../features/feed/FeedSlice';
import postReducer from '../features/post/PostSlice';

const store = configureStore({
    reducer: {
        feed: feedReducer,
        post: postReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
