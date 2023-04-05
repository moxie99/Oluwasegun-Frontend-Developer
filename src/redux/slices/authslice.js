import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    apiKey: null,
  },
  reducers: {
    setApiKey: (state, action) => {
      state.apiKey = action.payload;
    },
  },
});

export const { setApiKey } = authSlice.actions;

export default authSlice.reducer;
