import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import { InputFormik } from "../../components/InputFormik";
import Nav from "../../components/Nav";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { request } from "../../utils/request";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../../redux/user/userSlice";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const SignInPage = () => {
  const [error, setError] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setError("");
      request("post", "/api/auth/signin", { body: JSON.stringify(values) })
        .then((data) => {
          data.json().then((d) => {
            if (!d.success) setError(d.error);
            else dispatch(signInSuccess(d)) && navigate("/");
          });
        })
        .catch((err) => setError(err.message))
        .finally(() => formik.setSubmitting(false));
    },
  });

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Sign In</h1>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <InputFormik name="email" formik={formik} />
        <InputFormik name="password" formik={formik} />

        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          {formik.isSubmitting ? <CircularProgress size={25} /> : "Sign Up"}
        </Button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account? </p>
        <Nav
          to="/sign-up"
          element={<span className="text-blue-500">Sign in</span>}
        />
      </div>
      {error && (
        <p className="text-red-500">{error || "Something went wrong"}</p>
      )}
    </div>
  );
};

export default SignInPage;
