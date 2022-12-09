import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    message: "",
    restaurants: {},
    isSuccess: false,
    loading: false,
    brands: {}
};

export const restaurantListAsyncThunk: any = createAsyncThunk(
    "recent/ restaurantListAsyncThunk",
    // async ({ rejectWithValue }: any) => {
    //     try {
    //         const fetchedData: any = await axios({
    //             method: "get",
    //             url: "https://lorem.herokuapp.com/Lorem/viewAllBrands",
    //         });
    //         console.log(fetchedData);

    //         return fetchedData;
    //     } catch (error) {
    //         rejectWithValue(error);
    //     }
    // }
    async (payload: any, { rejectWithValue, getState, dispatch }) => {
        try {
            const { data } = await axios.get(`http://lorem-env.eba-vjfwziew.ap-northeast-1.elasticbeanstalk.com/Lorem/Search?longitude=74.742142&latitude=13.340881`, {
                params: {
                    deliveryTime: payload && payload[0].deliveryTime,
                    maxAvgMealCost: payload && payload[0].averageMealCost,
                    maxMinOrderCost: payload && payload[0].minimumOrder,
                }
            });
            return data;
        } catch (error) {
            if (!error) {
                throw error
            }
            return rejectWithValue(error);
        }

    }
);

export const allBrandsAsyncThunk: any = createAsyncThunk(
    "recent/allBrandsAsyncThunk",

    async (payload, { rejectWithValue, getState, dispatch }) => {
        try {
            const { data } = await axios.get(`http://lorem-env.eba-vjfwziew.ap-northeast-1.elasticbeanstalk.com/Lorem/viewAllBrands/1/5`);
            console.log(data);
            return data;
        } catch (error) {
            if (!error) {
                throw error
            }
            return rejectWithValue(error);
        }

    }
);

export const restaurantListSlice = createSlice({
    name: "restaurantList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(restaurantListAsyncThunk.pending, (state, action) => {
            // Add user to the state array
            state.loading = true;
        });
        builder.addCase(restaurantListAsyncThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.restaurants = action.payload;
            state.isSuccess = true;
        });
        builder.addCase(restaurantListAsyncThunk.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        });
        builder.addCase(allBrandsAsyncThunk.pending, (state, action) => {
            // Add user to the state array
            state.loading = true;
        });
        builder.addCase(allBrandsAsyncThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.brands = action.payload;
            state.isSuccess = true;
        });
        builder.addCase(allBrandsAsyncThunk.rejected, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.isSuccess = false;
        });
    },
});




export const { } = restaurantListSlice.actions;


export default restaurantListSlice;