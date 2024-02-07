import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { ButtonMUI } from "../MUI/ButtonMUI";
import { app } from "../../firebase";
import { request } from "../../utils/request";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

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
      if (data.success) dispatch(setUser(data)) && navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ButtonMUI
      type="button"
      value="Continue with google"
      color="error"
      onClick={() => handleGoogleClick()}
    />
  );
};
