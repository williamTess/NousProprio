import { useFormik } from "formik";
import * as yup from "yup";
import { InputFormik } from "../../components/MUI/InputFormik";
import Nav from "../../components/Nav";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user/userSlice";
import { ButtonMUI } from "../../components/MUI/ButtonMUI";
import { OAuth } from "../../components/OAuth";
import { signIn } from "../../redux/user/userActions";
import { getSignInNotif, myNotif } from "../../utils/myNotif";
import { Status } from "../../type";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signIn(values)
        .then((d) => {
          if (!d.success) myNotif(Status.ERROR, d.error);
          else {
            dispatch(setUser(d));
            getSignInNotif(d);
            navigate("/");
          }
        })
        .catch((err) =>
          myNotif(Status.ERROR, err.message || "Quelque chose s'est mal passé")
        )
        .finally(() => formik.setSubmitting(false));
    },
  });

  return (
    <div className="pb-3 max-w-lg mx-auto mb-36">
      <h1 className="text-center text-3xl font-bold p-5 mb-10">Connexion</h1>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
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
        <p>Vous n'avez pas de compte? </p>
        <Nav
          to="/sign-up"
          element={<span className=" text-main">S'inscrire</span>}
        />
      </div>
    </div>
  );
};

export default SignInPage;
