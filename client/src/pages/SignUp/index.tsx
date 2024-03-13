import { useFormik } from "formik";
import * as yup from "yup";
import { InputFormik } from "../../components/MUI/InputFormik";
import Nav from "../../components/Nav";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ButtonMUI } from "../../components/MUI/ButtonMUI";
import { OAuth } from "../../components/OAuth";
import { signUp } from "../../redux/user/userActions";
import { myNotif } from "../../utils/myNotif";
import { Status } from "../../type";

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
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signUp(values)
        .then((d) => {
          if (!d.success) myNotif(Status.ERROR, d.error);
          else {
            myNotif(
              Status.SUCCESS,
              "Félicitation pour votre inscription ! Vous pouvez maintenant vous connecter."
            );
            navigate("/sign-in");
          }
        })
        .catch((err) =>
          myNotif(Status.ERROR, err.message || "Quelque chose s'est mal passé")
        )
        .finally(() => formik.setSubmitting(false));
    },
  });

  return (
    <div className="p-3 max-w-lg mx-auto mb-36">
      <h1 className="text-center text-3xl font-bold p-5 mb-10">Inscription</h1>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <InputFormik name="username" formik={formik} />
        <InputFormik name="email" formik={formik} />
        <InputFormik name="password" formik={formik} />

        <ButtonMUI
          type="submit"
          disabled={!formik.isValid || formik.isSubmitting}
          value={
            formik.isSubmitting ? <CircularProgress size={25} /> : "Valider"
          }
        />
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Vous avez un compte? </p>
        <Nav
          to="/sign-in"
          element={<span className=" text-main">Connectez-vous</span>}
        />
      </div>
    </div>
  );
};

export default SignUpPage;
