import { createSlice, Slice } from '@reduxjs/toolkit';
import { PostData } from '../post/Post';
import { v4 as uuid } from 'uuid';

const feedSlice: Slice = createSlice({
    name: 'feed',
    initialState: {
        posts: [
            {
                id: uuid(),
                timestamp: new Date(),
                content: 'post1',
                commentCount: 1,
                image: 'https://assets-global.website-files.com/5ebb0930dd82631397ddca92/5f0ce06d83f430659aef8bd6_element-formstack-dark-logo.svg'
            } as PostData,
            {
                id: uuid(),
                timestamp: new Date(),
                content: 'post2',
                commentCount: 0,
            } as PostData,
            {
                id: uuid(),
                timestamp: new Date(),
                content: 'post3',
                commentCount: 10,
            } as PostData,
            {
                id: uuid(),
                timestamp: new Date(),
                content: 'post4',
                commentCount: 100,
            } as PostData,
            {
                id: uuid(),
                timestamp: new Date(),
                content: 'post5',
                commentCount: 1000,
            } as PostData,
        ] as Array<PostData>,
    },
    reducers: {},
});

export const {} = feedSlice.actions;
export default feedSlice.reducer;
