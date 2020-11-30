import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

const createPostSlice: Slice = createSlice({
    name: 'post',
    initialState: {
        height: 0
    },
    reducers: {
        setHeight(state, action: PayloadAction<number>) {
            console.log('setting text height', action.payload);
            state.height = action.payload;
        }
    },
});

export const { setHeight } = createPostSlice.actions;
export default createPostSlice.reducer;