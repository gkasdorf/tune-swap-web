import {createSlice} from "@reduxjs/toolkit";
import {startSwap} from "./actions/swapActions";

const initialState = {
    from: null,
    to: null,
    playlistId: null,
    playlistName: null,
    playlistDescription: null,
    loading: false,
    success: false,
    error: null,
    swapId: null
};

const swapSlice = createSlice({
    name: "swap",
    initialState: initialState,
    reducers: {
        setSwapFrom: (state, action) => {
            state.from = action.payload;
        },
        setSwapTo: (state, action) => {
            state.to = action.payload;
        },
        setSwapPlaylist: (state, action) => {
            state.playlistId = action.payload.id;
            state.playlistName = action.payload.name;
            state.playlistDescription = action.payload.description;
        },
        clearSwap: (state) => {
            state.from = null;
            state.to = null;
            state.playlistId = null;
            state.playlistName = null;
            state.playlistDescription = null;
            state.loading = false;
            state.success = false;
            state.error = null;
            state.swapId = null;
        }
    },
    extraReducers: {
        [startSwap.fulfilled]: (state, action) => {
            state.loading = false;
            state.success = true;
            state.swapId = action.payload;
        },
        [startSwap.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [startSwap.pending]: (state) => {
            state.loading = true;
            state.error = null;
        }
    }
});

const {reducer, actions} = swapSlice;

export const {
    setSwapFrom,
    setSwapTo,
    setSwapPlaylist,
    clearSwap
} = actions;
export default reducer;