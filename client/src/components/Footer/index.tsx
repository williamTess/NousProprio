import { ReactElement } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ButtonMUI } from "../MUI/ButtonMUI";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Logo } from "../../svg/Logo";
import { useMediaQuery } from "react-responsive";

export const Footer = () => {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const styleAccordingToOrientation = isPortrait
    ? "flex flex-col text-center items-center mb-10"
    : "flex flex-row justify-between mb-10";

  const Column = ({
    title,
    children,
  }: {
    title: string;
    children?: ReactElement;
  }) => (
    <div
      className={`flex flex-col max-w-56 mb-10 ${isPortrait && "items-center"}`}
    >
      <h3 className=" text-main font-semibold justi mb-5 text-lg">{title}</h3>
      {children}
    </div>
  );

  return (
    <>
      <div
        className={`flex flex-col bg-footer text-white px-20 py-16 ${
          isPortrait && "items-center"
        }`}
      >
        <p className="mb-16">
          <Logo color="white" />
        </p>
        <div className={styleAccordingToOrientation}>
          <Column title="A propos">
            <>
              <p className="mb-5">
                NousProprio, une entreprise qui partage des informations
                immobilières pour répondre aux non-dits du domaine
              </p>
              <ButtonMUI className="max-w-24" value={"Accueil"} />
            </>
          </Column>
          <Column title="Notre SAV">
            <>
              <p className="mb-5">Bientôt disponible</p>
              <a
                className="text-blue-600 font-semibold hover:underline"
                href="mailto:will94290@yahoo.fr"
              >
                <ArrowForwardIcon fontSize="small" /> Nous contacter
              </a>
            </>
          </Column>
          <Column title="Suivez nous sur les réseaux sociaux">
            <>
              <p className="mb-1">Bientôt disponible: </p>
              <p className="mb-1">
                <InstagramIcon />
                <span className="font-semibold"> Instagram</span>
              </p>
              <p className="mb-1">
                <TwitterIcon /> <span className="font-semibold">Twitter</span>
              </p>
              <p className="mb-7">
                <LinkedInIcon /> <span className="font-semibold">Linkedin</span>
              </p>
              <div className={`flex gap-2 max-w-10 ${isPortrait && "mr-40"}`}>
                <ButtonMUI value={<InstagramIcon />} />
                <ButtonMUI value={<TwitterIcon />} />
                <ButtonMUI value={<LinkedInIcon />} />
              </div>
            </>
          </Column>
          <Column title="Contactez nous">
            <>
              <p className="mb-5">Bientôt disponible</p>
              <ButtonMUI className="max-w-24" value={"Contact"} />
            </>
          </Column>
        </div>
        <p>NousProprio, notre entreprise</p>
      </div>
      <div className="bg-underFooter text-white px-20 py-7">
        NousProprio . CGV . Mentions légales . Politique de confidentialité
      </div>
    </>
  );
};
