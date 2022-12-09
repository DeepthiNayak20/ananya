import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  message: "",
  data: {},
  isSuccess: false,
  isFailed: false,
  loading: false,
  done: false,
  email: "",
};

export const emailAsyncThunk: any = createAsyncThunk(
  "recent/ emailAsyncThunk",
  async (email: any, { rejectWithValue }: any) => {
    console.log("args", email);

    try {
      const fetchedData: any = await axios({
        method: "put",
        url: "http://lorem-env.eba-vjfwziew.ap-northeast-1.elasticbeanstalk.com/Lorem/emails2fa",
        data: {
          emailId: email,
        },
      });
      console.log(fetchedData);

      return fetchedData;
    } catch (err) {
      let error: any = err;
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const emailSlice = createSlice({
  name: "verifyEmail",
  initialState,
  reducers: {
    storeEmail: (state: any, action: any) => {
      console.log("storedemail", action.payload);
      state.email = action.payload;
    },

    datafalse: (state) => {
      state.done = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(emailAsyncThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(emailAsyncThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isSuccess = true;
      state.done = true;
    });
    builder.addCase(emailAsyncThunk.rejected, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.isFailed = true;

      state.done = true;
    });
  },
});

export const { storeEmail, datafalse } = emailSlice.actions;

export default emailSlice;
