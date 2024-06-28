import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../type";
import { headerTabs } from "../../constant";

export interface UserStateType {
  currentUser: User | null;
  currentTab: string;
}

const initialState: UserStateType = {
  currentUser: null,
  currentTab: headerTabs[0].to,
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
        firstConnexion: action.payload.firstConnexion,
      };
    },
    removeUser: (state) => {
      state.currentUser = null;
    },
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload;
    },
  },
});

export const { setUser, removeUser, setCurrentTab } = userSlice.actions;

export default userSlice.reducer;
