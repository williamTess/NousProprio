import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { useFormik } from "formik";
import * as yup from "yup";
import { InputFormik } from "../../components/InputFormik";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { ButtonMUI } from "../../components/ButtonMUI";
import { ImageFinder } from "../../components/FileFinder";

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

const ProfilePage = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  const [error, setError] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  const formik = useFormik({
    initialValues: {
      username: currentUser?.username,
      email: currentUser?.email,
      profilePicture: currentUser?.profilePicture,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setError("");
      if (imageUrl) values.profilePicture = imageUrl;
      console.log(values);
    },
  });

  if (!currentUser) return <div>Error</div>;

  return (
    <div className="p-3 max-w-lg mx-auto">
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
        <ImageFinder
          name="profilePicture"
          imageUrl={imageUrl || currentUser.profilePicture}
          onChange={setImageUrl}
        />
        <InputFormik name="username" formik={formik} />
        <InputFormik name="email" formik={formik} />

        <ButtonMUI
          type="submit"
          disabled={!formik.isValid || formik.isSubmitting}
          value={
            formik.isSubmitting ? <CircularProgress size={25} /> : "Update"
          }
        />
      </form>
      <div className="flex justify-between my-5">
        <span className="text-red-700 cursor-pointer">Delete this account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
      {error && (
        <p className="text-red-500">{error || "Something went wrong"}</p>
      )}
    </div>
  );
};

export default ProfilePage;
