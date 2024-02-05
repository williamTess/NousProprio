import { ButtonMUI } from "../../components/ButtonMUI";
import Image from "/images/video-test.jpg";

const HomePage = () => {
  return (
    <div>
      <div className="bg-slate-500 text-white py-32 px-10">
        <p className="mb-4">Vous êtes au bon endroit !</p>
        <h1 className="font-bold text-4xl mb-10">Nos Propres Héros</h1>
        <p className="mb-10">
          Unissons-nous forces pour aller vers un partage des connaissances.
          <br />
          Encore trop de non-dits sur l'immobilier et ses rouages: Avoir un bon
          taux, quelles assurances, rentabiliser mon bien, comment ne pas se
          faire arnaquer ...
          <br />
          Notre but: Vous apporter toutes ces informations.
        </p>
        <div className="flex flex-row gap-3">
          <div className="max-w-xs">
            <ButtonMUI value={"Présentation"} />
          </div>
          <div className="max-w-xs">
            <ButtonMUI value={"Inscris toi"} variant="outlined" />
          </div>
        </div>
      </div>
      <div className="py-16 px-10 flex flex-col">
        <p className="text-blue-400 mb-5">
          Une vidéo vaut mieux que 10 000 mots
        </p>
        <h1 className="font-semibold text-3xl mb-5">Qui sommes nous ?</h1>
        <p className="mb-4">
          Inscris toi pour recevoir la date de la sortie de notre site et avoir
          l'accès à notre gamme complète qui te permettra de réussir tes
          premiers pas en immobilier.
          <br />
          Comme on dit une image vaut mieux que mille mots, alors regarde notre
          vidéo
        </p>
        <img className="mb-4" src={Image} alt="vidéo immobilier" width={800} />
        <div className="max-w-40">
          <ButtonMUI value={"Inscription"} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
