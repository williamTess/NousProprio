import { useSelector } from "react-redux";
import { UnalignList } from "../../components/UnalignedList";
import { formationList } from "../../constant";
import { RootState } from "../../redux/store";
import { Backdrop } from "@mui/material";
import { Modal } from "../../components/Modal";
import { useNavigate } from "react-router-dom";

export const FormationPage = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const openModal = !!!currentUser;
  const isFirst = currentUser ? currentUser.firstConnexion : false;
  console.log(currentUser);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col px-10 sm:px-20 pb-10 items-center">
        <h1 className="text-center text-3xl font-bold p-5">Ma formation</h1>
        <p className="mb-8 text-center">
          Bienvenu dans ton onglet <b>formation</b> tu y retrouveras tout ton{" "}
          <b>contenu personalisé</b>, tes <b>achats</b> ou encore des{" "}
          <b>informations sur la suite</b>!
          <br />
          N'hésite pas à nous écrire si tu ne vois pas tes vidéo !
        </p>

        <div className="max-w-4xl">
          <UnalignList list={formationList} isFirstTime={isFirst} />
        </div>
        <Backdrop open={openModal}>
          <Modal
            text={
              "Vous devez vous connecter ou créer un compte pour acceder à ce contenu"
            }
            onClose={() => navigate("/")}
            onValidate={() => navigate("/sign-in")}
            textValidate="Se connecter"
            textCancel="Retour à l'accueil"
            isNotClosable
          />
        </Backdrop>
      </div>
    </div>
  );
};
