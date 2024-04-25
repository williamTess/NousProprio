import React from "react";
import { ButtonMUI } from "../../components/MUI/ButtonMUI";
import Nav from "../../components/Nav";
import { User } from "../../type";

type PresentationProps = {
  videoRef: React.RefObject<HTMLInputElement>;
  sizeAccordingWidth: string;
  currentUser: User | null;
  isPortrait: boolean;
};

export const Presentation = ({
  videoRef,
  sizeAccordingWidth,
  currentUser,
  isPortrait,
}: PresentationProps) => {
  const handleScrollToVideo = () => {
    if (videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={`${sizeAccordingWidth} max-w-7xl m-auto`}>
      <p className="mb-6">Pour toi,</p>
      <h1 className="font-bold text-4xl mb-10">L'immobilier c'est flou !</h1>
      <p className="mb-16">
        Parcequ'il est facile de se sentir perdu et dépassé par la quantité
        d'informations disponibles.
        <br />
        <br />
        Grâce à notre approche personalisée, nous{" "}
        <b>découvrons tes objectifs</b>, à travers un questionnaire intuitif et
        ciblé, qui te guide pas à pas <br />
        vers <b>notre formation sur mesure</b>.
        <br />
        <br />
        <b>Tes objectifs, Ta formation !</b>
        <br />
        <br />
        <b>Notre but</b>: T'aider à concrétiser.
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
              element={<ButtonMUI value={"Inscris-toi"} variant="outlined" />}
            />
          </div>
        )}
      </div>
    </div>
  );
};
