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
    setUser: (state, action) => {
      state.currentUser = {
        id: action.payload._id,
        username: action.payload.username,
        email: action.payload.email,
        profilePicture: action.payload.profilePicture,
        phoneNumber: action.payload.phoneNumber,
        statusText: action.payload.statusText,
      };
    },
    removeUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
