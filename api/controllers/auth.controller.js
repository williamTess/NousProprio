import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res
      .status(201)
      .json({ success: true, message: "User created successfully" });
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found"));

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Invalid credentials"));

    const { password: hashedPassword, ...rest } = validUser._doc;

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ ...rest, success: true });
  } catch (err) {
    next(err);
  }
};

export const google = async (req, res, next) => {
  const { email, name, photo } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const { password: hashedPassword, ...rest } = user._doc;
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json({ ...rest, success: true });
    } else {
      const generatedPassword = Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          name.replace(" ", "").toLowerCase() +
          Math.floor(Math.random() * 1000).toString(),
        email,
        password: hashedPassword,
        profilePicture: photo,
      });
      await newUser.save();
      const { password: hashedPassword2, ...rest } = newUser._doc;
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json({ ...rest, success: true });
    }
  } catch (err) {
    next(err);
  }
};

export const signout = (req, res) => {
  res
    .clearCookie("access_token")
    .status(200)
    .json({ success: true, message: "Signout successfully" });
};
