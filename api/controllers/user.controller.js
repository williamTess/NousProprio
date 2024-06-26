import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";

export const test = (req, res) => {
  res.json({ message: "Hello test" });
};

export const updateUser = async (req, res, next) => {
  if (!req.user) return next(errorHandler(401, "cannot find user"));
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only update your account"));

  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 12);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
          phoneNumber: req.body.phoneNumber,
          statusText: req.body.statusText,
        },
      },
      { new: true }
    );

    const { password, ...others } = updatedUser._doc;
    res.status(200).json({ ...others, success: true });
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  if (!req.user) return next(errorHandler(401, "cannot find user"));
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only delete your account"));

  try {
    await User.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Account has been deleted" });
  } catch (err) {
    next(err);
  }
};

export const approveTutorialUser = async (req, res, next) => {
  if (!req.user) return next(errorHandler(401, "cannot find user"));
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only use your account"));

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          firstConnexion: req.body.firstConnexion,
        },
      },
      { new: true }
    );

    const { password, ...others } = updatedUser._doc;
    res.status(200).json({ ...others, success: true });
  } catch (err) {
    next(err);
  }
};
