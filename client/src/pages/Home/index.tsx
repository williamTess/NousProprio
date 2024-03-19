import { useMediaQuery } from "react-responsive";
import { ButtonMUI } from "../../components/MUI/ButtonMUI";
import YouTube from "react-youtube";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Nav from "../../components/Nav";
import { useRef } from "react";

const HomePage = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const videoRef = useRef<HTMLInputElement>(null);
  const sizeAccordingWidth = isPortrait ? "w-full" : "w-[80%]";
  const sizeAccordingHeight = isPortrait ? "h-[300px]" : "h-[450px]";

  const handleScrollToVideo = () => {
    if (videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col">
      <div className="bg-gray-light text-white flex flex-col py-44 px-20 mb-10">
        <div className={`${sizeAccordingWidth} max-w-7xl m-auto`}>
          <p className="mb-6">Vous êtes au bon endroit !</p>
          <h1 className="font-bold text-4xl mb-10">Nos Propres Héros</h1>
          <p className="mb-16">
            Unissons nos forces pour aller vers un partage des connaissances.
            <br />
            Encore trop de non-dits sur l'immobilier et ses rouages: avoir un
            bon taux, quelles assurances, comment rentabiliser mon bien?
            <br />
            Comment ne pas se faire arnaquer ...
            <br />
            <br />
            <b>Notre but</b>: Vous apporter toutes ces informations.
          </p>
          <div className={`flex flex-${isPortrait ? "col" : "row"} gap-3`}>
            <div className="max-w-xs">
              <ButtonMUI
                value={"Présentation"}
                onClick={() => handleScrollToVideo()}
              />
            </div>
            {!currentUser && (
              <div className="max-w-xs">
                <Nav
                  to="/sign-up"
                  element={
                    <ButtonMUI value={"Inscris-toi"} variant="outlined" />
                  }
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="py-16 px-20 flex flex-col" ref={videoRef}>
        <div className={`${sizeAccordingWidth} flex flex-col max-w-7xl m-auto`}>
          <p className="text-blue-400 mb-8">
            Une vidéo vaut mieux que 10 000 mots
          </p>
          <h1 className="font-semibold text-3xl mb-8">Qui sommes nous ?</h1>
          <p className="mb-8">
            Inscris toi pour recevoir la date d'ouverture de notre site internet
            et profiter de notre gamme personalisée de formations en immobilier.
            <br />
            Comme on dit une image vaut mieux que mille mots, alors regarde
            notre vidéo !
          </p>
          <div className={`w-full ${sizeAccordingHeight} mb-5`}>
            <YouTube videoId="vuZwSKmjyV0" className="w-full h-full" />
          </div>
          {!currentUser && (
            <div className="max-w-24 self-center">
              <Nav
                to="/sign-up"
                element={<ButtonMUI value={"Inscription"} />}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
