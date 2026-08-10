import { configureStore } from "@reduxjs/toolkit";

import appStateSlice from "./features/app.state.slice";

export const store = configureStore({
  reducer: {
    appState: appStateSlice,
  },
});
