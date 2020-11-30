import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

const postSlice: Slice = createSlice({
    name: 'post',
    initialState: {
        timestamp: null,
        content: null,
    },
    reducers: {
        addReaction(state, action: PayloadAction) {
            // state.
        }
    },
});

export const {  } = postSlice.actions;
export default postSlice.reducer;