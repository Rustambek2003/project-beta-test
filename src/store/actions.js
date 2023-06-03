import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "./api";

export const getPosts = createAsyncThunk(
  "about/getPosts", 
  async () => {
    try {
      const {data} = await api.list();
      return data
    
    } catch (error) {
    
    }
});


const actionSlice = createSlice({
  name: "about",
  initialState: {
    items: [],
    
    status: "",
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.status = "PENDING";
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.status = "SUCCESS";
      state.items = action.payload;
    
    
    });
    builder.addCase(getPosts.rejected, (state, { payload }) => {
      state.status = "ERRORS";
      state.error = payload;
    });
  },
});

export const { reducer: actionReducer } = actionSlice;
