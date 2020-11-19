import { createSlice, Slice } from '@reduxjs/toolkit';

const postSlice: Slice = createSlice({
    name: 'post',
    initialState: {
        timestamp: null,
        content: null,
    },
    reducers: {

    },
});

export const {  } = postSlice.actions;
export default postSlice.reducer;