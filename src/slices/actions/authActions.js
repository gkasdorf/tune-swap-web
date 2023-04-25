import {createAsyncThunk} from "@reduxjs/toolkit";
import SignupApi from "../../api/user/SignupApi";
import LoginApi from "../../api/user/LoginApi";
import {setUser} from "../userSlice";

export const signup = createAsyncThunk(
    "auth/signup",
    async (data, thunkAPI) => {
        const res = await SignupApi.register(data);

        if(res.status === 200) {
            localStorage.setItem("token", res.data.api_token);

            thunkAPI.dispatch(setUser(res.data));

            return res.data;
        }

        return thunkAPI.rejectWithValue(res.data.message);
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (data, thunkAPI) => {
        console.log("here");
        const res = await LoginApi.login(data.email, data.password);

        console.log(res);

        if(res.status === 200) {

            localStorage.setItem("token", res.data.data.api_token);

            thunkAPI.dispatch(setUser(res.data));

            return res.data;
        }

        return thunkAPI.rejectWithValue(res.data.message);
    }
);

export const load = createAsyncThunk(
    "auth/load",
    async (data, thunkAPI) => {
        const token = localStorage.getItem("token");

        if(!token) {
            return thunkAPI.rejectWithValue("No token found.");
        }

        const res = await LoginApi.verify();

        if(res.status === 200) {
            return res.data;
        }

        return thunkAPI.rejectWithValue(res.data.message);
    }
);