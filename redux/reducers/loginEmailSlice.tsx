import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  message: "",
  data: {},
  isSuccess: false,
  loading: false,
  emailId: "",
};

export const loginEmailAsyncThunk: any = createAsyncThunk(
  "recent/ loginEmailAsyncThunk",
  async (arg: any, { rejectWithValue }: any) => {
    console.log(arg);

    try {
      const fetchedData: any = await axios({
        method: "post",
        url: "http://lorem-env.eba-vjfwziew.ap-northeast-1.elasticbeanstalk.com/Lorem/authenticate",
        data: {
          emailId: arg.emailId,
          password: arg.password,
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

export const loginEmailSlice = createSlice({
  name: "verifyLoginEmail",
  initialState,
  reducers: {
    storeEmail: (state: any, action: any) => {
      console.log("storedemaillogin", action.payload);
      state.emailId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginEmailAsyncThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginEmailAsyncThunk.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.data = action.payload;
      state.isSuccess = true;
    });
    builder.addCase(loginEmailAsyncThunk.rejected, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.isSuccess = false;
    });
  },
});

export const { storeEmail } = loginEmailSlice.actions;

export default loginEmailSlice;
