import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload ?? {};
      if (!action.payload) {
        localStorage.removeItem("access_token");
        state.user = null;
      } else {
        state.user = user ?? state.user;
        token && localStorage.setItem("access_token", token);
      }
      state.isLoadingUser = false;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
