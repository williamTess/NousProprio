import YouTube from "react-youtube";
import Nav from "../../components/Nav";
import { ButtonMUI } from "../../components/MUI/ButtonMUI";
import { User } from "../../type";

type VideoProps = {
  sizeAccordingWidth: string;
  sizeAccordingHeight: string;
  currentUser: User | null;
};

export const Video = ({
  sizeAccordingHeight,
  sizeAccordingWidth,
  currentUser,
}: VideoProps) => {
  return (
    <div className={`${sizeAccordingWidth} flex flex-col max-w-7xl m-auto`}>
      <p className="text-blue-400 mb-6">Une vidéo vaut mieux que 10 000 mots</p>
      <h1 className="font-semibold text-3xl mb-4">Tu vas te reconnaitre</h1>
      <div className={`w-full ${sizeAccordingHeight} mb-5`}>
        <YouTube videoId="WqGJ6lUnJdI" className="w-full h-full" />
      </div>
      <p className="mb-8 text-center">
        En t'inscrivant aujourd'hui, tu seras automatiquement inscrit à une
        réunion privée où tu pourras poser toutes tes questions sur l'immobilier
        en plus d'avoir l'accès à notre accompagnement personnalisé.
        <br />
        <br />
        Nos formations sont bientôt disponibles !
      </p>
      {!currentUser && (
        <div className="max-w-24 self-center">
          <Nav to="/sign-up" element={<ButtonMUI value={"Inscription"} />} />
        </div>
      )}
    </div>
  );
};
