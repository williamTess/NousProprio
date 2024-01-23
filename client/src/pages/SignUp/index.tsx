import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import { InputFormik } from "../../components/InputFormik";
import Nav from "../../components/Nav";

const validationSchema = yup.object({
  userName: yup.string().required("userName is required"),
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
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Sign Up</h1>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <InputFormik name="userName" formik={formik} />
        <InputFormik name="email" formik={formik} />
        <InputFormik name="password" formik={formik} />

        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          disabled={!formik.isValid}
        >
          Sign Up
        </Button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account? </p>
        <Nav
          to="/sign-in"
          element={<span className="text-blue-500">Sign in</span>}
        />
      </div>
    </div>
  );
};

export default SignUpPage;
