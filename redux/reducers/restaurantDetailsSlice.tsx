import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    message: "",
    restaurantHeader: {},
    restaurantMenu: {},
    restaurantOverview: {},
    restaurantGallery: {},
    restaurantReview: {},
    isSuccess: false,
    loading: false,
};

export const eachRestaurantHeaderAsyncThunk: any = createAsyncThunk(
    "recent/eachRestaurantHeaderAsyncThunk",

    async (payload: any, { rejectWithValue, getState, dispatch }) => {
        try {
            const { data } = await axios.get(`http://lorem-env.eba-vjfwziew.ap-northeast-1.elasticbeanstalk.com/Lorem/viewRestaurant?restaurantId=${payload}&latitude=13.437000&longitude=74.744499`);

            return data;
        } catch (error) {
            if (!error) {
                throw error
            }
            return rejectWithValue(error);
        }

    }
);

export const eachRestaurantMenuAsyncThunk: any = createAsyncThunk(
    "recent/eachRestaurantMenuAsyncThunk",

    async (payload: any, { rejectWithValue, getState, dispatch }) => {
        try {
            const { data } = await axios.get(`http://lorem-env.eba-vjfwziew.ap-northeast-1.elasticbeanstalk.com/Lorem/displayMenuItems?restaurantId=${payload}`);

            return data;
        } catch (error) {
            if (!error) {
                throw error
            }
            return rejectWithValue(error);
        }

    }
);
export const searchRestaurantMenuAsyncThunk: any = createAsyncThunk(
    "recent/searchRestaurantMenuAsyncThunk",

    async (payload: any, { rejectWithValue, getState, dispatch }) => {
        try {
            const { data } = await axios.get(`http://lorem-env.eba-vjfwziew.ap-northeast-1.elasticbeanstalk.com/Lorem/displayMenuItems?restaurantId=6`);

            return data;
        } catch (error) {
            if (!error) {
                throw error
            }
            return rejectWithValue(error);
        }

    }
);
export const restaurantDetailsListSlice = createSlice({
    name: "restaurantList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(eachRestaurantHeaderAsyncThunk.pending, (state, action) => {
            // Add user to the state array
            state.loading = true;
        });
        builder.addCase(eachRestaurantHeaderAsyncThunk.fulfilled, (state, action) => {
            console.log(action.payload)
            state.loading = false;
            state.restaurantHeader = action.payload;
            state.isSuccess = true;
        });
        builder.addCase(eachRestaurantHeaderAsyncThunk.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        });
        builder.addCase(eachRestaurantMenuAsyncThunk.pending, (state, action) => {
            // Add user to the state array
            state.loading = true;
        });
        builder.addCase(eachRestaurantMenuAsyncThunk.fulfilled, (state, action) => {
            console.log(action.payload)
            state.loading = false;
            state.restaurantMenu = action.payload;
            state.isSuccess = true;
        });
        builder.addCase(eachRestaurantMenuAsyncThunk.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        });
    },
});




export const { } = restaurantDetailsListSlice.actions;


export default restaurantDetailsListSlice;