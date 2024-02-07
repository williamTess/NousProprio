import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      default: "",
    },
    statusText: {
      type: String,
      default: "",
    },
    profilePicture: {
      type: String,
      default:
        "https://e0.pxfuel.com/wallpapers/856/476/desktop-wallpaper-skull-skull-cool-profile.jpg",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
