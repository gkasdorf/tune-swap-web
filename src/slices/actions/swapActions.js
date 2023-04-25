import {createAsyncThunk} from "@reduxjs/toolkit";
import SwapApi from "../../api/swap/SwapApi";

export const startSwap = createAsyncThunk(
    "swap/start",
    async (data, thunkAPI) => {
        const res = await SwapApi.start(data);

        if(res.success) {
            return res.data.swapId;
        }

        return thunkAPI.rejectWithValue(res.data.message);
    }
);