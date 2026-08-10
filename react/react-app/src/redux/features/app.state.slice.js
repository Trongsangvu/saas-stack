import { createSlice } from "@reduxjs/toolkit";

import { APP_STATE } from "../../configs/constants";

export const appStateSlice = createSlice({
  name: "appState",
  initialState: {
    appState: APP_STATE.HOME, // Set a default initial state
  },
  reducers: {
    setAppState: (state, action) => {
      state.previousState = state.appState;
      state.appState = action.payload;
    },
  },
});

export const { setAppState } = appStateSlice.actions;

export default appStateSlice.reducer;
