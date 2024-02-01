import { useFormik } from "formik";
import * as yup from "yup";
import { InputFormik } from "../../components/InputFormik";
import Nav from "../../components/Nav";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { request } from "../../utils/request";
import { useNavigate } from "react-router-dom";
import { ButtonMUI } from "../../components/ButtonMUI";
import { OAuth } from "../../components/OAuth";

const validationSchema = yup.object({
  username: yup.string().required("username is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const SignUpPage = () => {
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setError(false);
      request("post", "/api/auth/signup", { body: JSON.stringify(values) })
        .then((data) => {
          data.json().then((d) => {
            if (!d.success) setError(true);
            else navigate("/sign-in");
          });
        })
        .catch(() => setError(true))
        .finally(() => formik.setSubmitting(false));
    },
  });

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Sign Up</h1>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <InputFormik name="username" formik={formik} />
        <InputFormik name="email" formik={formik} />
        <InputFormik name="password" formik={formik} />

        <ButtonMUI
          type="submit"
          disabled={!formik.isValid || formik.isSubmitting}
          value={
            formik.isSubmitting ? <CircularProgress size={25} /> : "Sign Up"
          }
        />
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account? </p>
        <Nav
          to="/sign-in"
          element={<span className="text-blue-500">Sign in</span>}
        />
      </div>
      {error && <p className="text-red-500">Something went wrong</p>}
    </div>
  );
};

export default SignUpPage;
