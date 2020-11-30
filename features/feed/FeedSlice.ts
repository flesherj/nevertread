import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { PostData } from '../post/Post';

export interface FeedState {
    posts: Array<PostData>
}

const feedSlice: Slice = createSlice({
    name: 'feed',
    initialState: {
        posts: new Array<PostData>(),
    },
    reducers: {
        addPostsFromFeed(state: FeedState, action: PayloadAction<Array<PostData>> ) {
            state.posts = state.posts.concat(action.payload);
        },

        incrementReactionCount(state: FeedState, action: PayloadAction<string>) {
            const selectedPost: PostData | undefined = state.posts.find(post => post.id === action.payload);
            if(selectedPost) {
                selectedPost.reactionCount += 1;
            }
        }
    },
});

export const { addPostsFromFeed, incrementReactionCount } = feedSlice.actions;
export default feedSlice.reducer;