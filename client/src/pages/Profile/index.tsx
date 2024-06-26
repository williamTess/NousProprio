import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { useFormik } from "formik";
import * as yup from "yup";
import { InputFormik } from "../../components/MUI/InputFormik";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { ButtonMUI } from "../../components/MUI/ButtonMUI";
import { ImageFinder } from "../../components/FileFinder";
import { removeUser, setUser } from "../../redux/user/userSlice";
import { deleteUser, signOut, updateUser } from "../../redux/user/userActions";
import { phoneRegExp } from "../../constant";
import { myNotif } from "../../utils/myNotif";
import { Status } from "../../type";
import { Modal } from "../../components/Modal";
import { SelectFormik } from "../../components/MUI/SelectFormik";

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

const ProfilePage = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: currentUser?.username,
      email: currentUser?.email,
      profilePicture: currentUser?.profilePicture,
      phoneNumber: currentUser?.phoneNumber,
      statusText: currentUser?.statusText,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (imageUrl) values.profilePicture = imageUrl;

      updateUser(values, currentUser?.id)
        .then((d) => {
          if (!d.success) myNotif(Status.ERROR, d.error);
          else {
            dispatch(setUser(d));
            myNotif(
              Status.SUCCESS,
              "Votre compte a été mis à jour avec succès."
            );
          }
        })
        .catch((err) =>
          myNotif(Status.ERROR, err.message || "Quelque chose s'est mal passé")
        )
        .finally(() => formik.setSubmitting(false));
    },
  });

  const handleDeleteAccount = () => {
    deleteUser(currentUser?.id)
      .then((d) => {
        if (!d.success) myNotif(Status.ERROR, d.error);
        else {
          dispatch(removeUser());
          myNotif(Status.SUCCESS, "Votre compte a été supprimé avec succès.");
        }
      })
      .catch((err) =>
        myNotif(Status.ERROR, err.message || "Quelque chose s'est mal passé")
      );
  };

  const handleSignout = () => {
    signOut()
      .then(() => {
        dispatch(removeUser());
        myNotif(Status.SUCCESS, "Vous êtes maintenant déconnecté.");
      })
      .catch((err) =>
        myNotif(Status.ERROR, err.message || "Quelque chose s'est mal passé")
      );
  };

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
        <InputFormik name="phoneNumber" formik={formik} />
        {/* <InputFormik name="statusText" formik={formik} multiline rows={4} /> */}
        <SelectFormik name="statusText" formik={formik} />

        <ButtonMUI
          type="submit"
          disabled={!formik.isValid || formik.isSubmitting}
          value={
            formik.isSubmitting ? <CircularProgress size={25} /> : "Sauvegarder"
          }
        />
      </form>
      <div className="flex justify-between my-5">
        <span
          className="text-red-700 cursor-pointer"
          onClick={() => setDisplayModal(true)}
        >
          Supprimer ce compte
        </span>
        <span className="text-red-700 cursor-pointer" onClick={handleSignout}>
          Déconnexion
        </span>
        {displayModal && (
          <Modal
            text={"Voulez-vous vraiment supprimer ce compte ?"}
            onClose={() => setDisplayModal(false)}
            onValidate={handleDeleteAccount}
          />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
