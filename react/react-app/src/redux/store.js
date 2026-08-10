import { configureStore } from "@reduxjs/toolkit";

import appStateSlice from "./features/app.state.slice";
import userReducer from "./features/user.slice";

export const store = configureStore({
  reducer: {
    appState: appStateSlice,
    user: userReducer,
  },
});
