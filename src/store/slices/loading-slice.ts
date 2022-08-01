import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import Loading from "../../interfaces/loading";

let initialState: Loading = {
    show: false
}

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state, {payload}: PayloadAction<boolean>) => {
            state.show = payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const {setLoading} = loadingSlice.actions

export default loadingSlice.reducer