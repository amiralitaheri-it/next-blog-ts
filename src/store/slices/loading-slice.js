import {createSlice} from '@reduxjs/toolkit'

let initialState = {
    show: false
}

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state, {payload}) => {
            state.show = payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const {setLoading} = loadingSlice.actions

export default loadingSlice.reducer