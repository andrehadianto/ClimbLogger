import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_USER = {
  auth_date: 0,
  first_name: "",
  hash: "",
  id: 0,
  last_name: "",
  photo_url: "",
  username: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: DEFAULT_USER,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = DEFAULT_USER;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
