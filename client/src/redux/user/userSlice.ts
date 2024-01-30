import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../type";

export interface UserStateType {
  currentUser: User | null;
  error: boolean;
}

const initialState: UserStateType = {
  currentUser: null,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInSuccess: (state, action) => {
      state.currentUser = {
        username: action.payload.username,
        email: action.payload.email,
      };
    },
  },
});

export const { signInSuccess } = userSlice.actions;

export default userSlice.reducer;
