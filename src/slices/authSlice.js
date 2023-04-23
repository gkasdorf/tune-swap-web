import {createSlice} from "@reduxjs/toolkit";
import {load, login, signup} from "./actions/authActions";

const initialState = {
    loading: false,
    userAuthed: false,
    error: null,
    success: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearAuth: (state) => {
            state.loading = false;
            state.userAuthed = false;
            state.error = null;
            state.success = false;
        }
    },
    extraReducers: {
        [signup.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [signup.fulfilled]: (state) => {
            state.loading = false;
            state.userAuthed = true;
            state.error = null;
            state.success = true;
        },
        [signup.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [login.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [login.fulfilled]: (state) => {
            state.loading = false;
            state.userAuthed = true;
            state.error = null;
            state.success = true;
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [load.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [load.fulfilled]: (state) => {
            state.loading = false;
            state.userAuthed = true;
            state.error = null;
            state.success = true;
        },
        [load.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

const { reducer, actions } = authSlice;

export const { clearAuth } = actions;
export default reducer;