import YouTube from "react-youtube";
import { ButtonMUI } from "../../../components/MUI/ButtonMUI";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { getStatus } from "../../../utils/getStatus";
import { validateTutorialUser } from "../../../redux/user/userActions";
import { myNotif } from "../../../utils/myNotif";
import { Status } from "../../../type";
import { setUser } from "../../../redux/user/userSlice";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { getWelcomeVideoId } from "../../../utils/getWelcomeVideoId";

export const WelcomePage = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  if (!currentUser) return null;

  const handleValidateTuto = () => {
    setDisabled(true);
    validateTutorialUser(currentUser.id)
      .then((d) => {
        if (!d.success) myNotif(Status.ERROR, d.error);
        else {
          dispatch(setUser(d));
          myNotif(
            Status.SUCCESS,
            "Vous avez validé le tutorial, vous pouvez accéder à la suite"
          );
        }
      })
      .catch((err) =>
        myNotif(Status.ERROR, err.message || "Quelque chose s'est mal passé")
      )
      .finally(() => setDisabled(false));
  };

  return (
    <div className="flex flex-col max-w-7xl m-auto">
      <div className="flex flex-col px-10 sm:px-20 pb-10 items-center">
        <h1 className="text-center text-3xl font-bold p-5">
          Vidéo d'introduction
        </h1>
        <p className="mb-8 text-center">
          Bienvenu dans ta <b>vidéo d'introduction</b>, c'est une vidéo faites
          sur mesure pour un <b>{getStatus(currentUser.statusText)}</b>, cela te
          permettra de comprendre la suite du contenu
          <br />
          Après avoir visionné la vidéo, tu pourras valider le visionnage pour
          acceder à la suite de l'onglet <b>ma formation</b> !
        </p>
        <div className={`w-full sm:w-[80%] h-[400px] mb-10`}>
          <YouTube
            videoId={getWelcomeVideoId(currentUser.statusText)}
            className="w-full h-full mb-5"
          />

          {currentUser.firstConnexion && (
            <ButtonMUI
              value={
                disabled ? <CircularProgress size={25} /> : "J'ai vu la vidéo"
              }
              onClick={() => handleValidateTuto()}
              disabled={disabled}
            />
          )}
        </div>
      </div>
    </div>
  );
};
