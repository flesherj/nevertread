import { configureStore } from '@reduxjs/toolkit';
import feedReducer from '../features/feed/FeedSlice';
import postReducer from '../features/post/PostSlice';
import createPostReducer from '../features/post/CreatePostSlice';

const store = configureStore({
    reducer: {
        feed: feedReducer,
        post: postReducer,
        createPost: createPostReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
