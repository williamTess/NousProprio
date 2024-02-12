import { useMediaQuery } from "react-responsive";
import { ButtonMUI } from "../../components/MUI/ButtonMUI";
import Image from "/images/video-test.jpg";

const HomePage = () => {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  return (
    <div className="flex flex-col">
      <div className="bg-gray-light text-white flex flex-col py-44 px-20 mb-10 items-center">
        <div className="max-w-7xl">
          <p className="mb-6">Vous êtes au bon endroit !</p>
          <h1 className="font-bold text-4xl mb-10">Nos Propres Héros</h1>
          <p className="mb-16">
            Unissons nos forces pour aller vers un partage des connaissances.
            <br />
            Encore trop de non-dits sur l'immobilier et ses rouages: Avoir un
            bon taux, quelles assurances, rentabiliser mon bien, comment ne pas
            se faire arnaquer ...
            <br />
            Notre but : Vous apporter toutes ces informations.
          </p>
        </div>
        <div className={`flex flex-${isPortrait ? "col" : "row"} gap-3`}>
          <div className="max-w-xs">
            <ButtonMUI value={"Présentation"} />
          </div>
          <div className="max-w-xs">
            <ButtonMUI value={"Inscris-toi"} variant="outlined" />
          </div>
        </div>
      </div>
      <div className="py-16 px-20 flex flex-col items-center">
        <div className="flex flex-col max-w-7xl">
          <p className="text-blue-400 mb-8">
            Une vidéo vaut mieux que 10 000 mots
          </p>
          <h1 className="font-semibold text-3xl mb-8">Qui sommes nous ?</h1>
          <p className="mb-8">
            Inscris toi pour recevoir la date de la sortie de notre site et
            avoir l'accès à notre gamme complète qui te permettra de réussir tes
            premiers pas en immobilier.
            <br />
            Comme on dit une image vaut mieux que mille mots, alors regarde
            notre vidéo
          </p>
          <img
            className="mb-8 max-h-[600px]"
            src={Image}
            alt="vidéo immobilier"
            width={2000}
          />
          <div className="max-w-24 self-center">
            <ButtonMUI value={"Inscription"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
