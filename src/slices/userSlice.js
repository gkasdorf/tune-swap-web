import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    isAuthed: false
};

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.data.name;
            state.email = action.payload.data.email;
            state.isAuthed = true;
        },
        clearUser: (state) => {
            state.name = "";
            state.email = "";
            state.isAuthed = false;

            localStorage.removeItem("token");
        }
    }
});

const { reducer, actions } = userSlice;

export const { setUser, clearUser } = actions;
export default reducer;