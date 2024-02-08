import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { ButtonMUI } from "../MUI/ButtonMUI";
import { app } from "../../firebase";
import { request } from "../../utils/request";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { getSignInNotif, myNotif } from "../../utils/myNotif";
import { Status } from "../../type";

export const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    try {
      const resFromGoogle = await signInWithPopup(auth, provider);

      const resFromApi = await request("post", "api/auth/google", {
        body: JSON.stringify({
          name: resFromGoogle.user.displayName,
          email: resFromGoogle.user.email,
          photo: resFromGoogle.user.photoURL,
        }),
      });

      const data = await resFromApi.json();
      if (data.success) {
        dispatch(setUser(data));
        getSignInNotif(data);
        navigate("/");
      }
    } catch (err) {
      myNotif(
        Status.ERROR,
        JSON.stringify(err) || "Quelque chose s'est mal passé"
      );
    }
  };
  return (
    <ButtonMUI
      type="button"
      value="Continuer avec Google"
      color="error"
      onClick={() => handleGoogleClick()}
    />
  );
};
