import { ReactElement } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ButtonMUI } from "../ButtonMUI";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Logo } from "../../svg/Logo";

export const Footer = () => {
  const Column = ({
    title,
    children,
  }: {
    title: string;
    children?: ReactElement;
  }) => {
    return (
      <div className="flex flex-col max-w-56">
        <h3 className="text-blue-500 font-semibold mb-3 text-lg">{title}</h3>
        {children}
      </div>
    );
  };

  return (
    <>
      <div className="bg-slate-800 text-white p-10">
        <p className="mb-10">
          <Logo color="white" />
        </p>
        <div className="flex flex-row justify-between mb-10">
          <Column title="A propos">
            <>
              <p className="mb-3">
                NouProprio, une entreprise qui partage des informations
                immobilières pour répondre aux non-dits du domaine
              </p>
              <ButtonMUI className="max-w-24" value={"Accueil"} />
            </>
          </Column>
          <Column title="Notre SAV">
            <>
              <p className="mb-3">Bientôt disponible</p>
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
                <InstagramIcon /> Instagram
              </p>
              <p className="mb-1">
                <TwitterIcon /> Twitter
              </p>
              <p className="mb-5">
                <LinkedInIcon /> Linkedin
              </p>
              <div className="flex gap-2 max-w-10">
                <ButtonMUI value={<InstagramIcon />} />
                <ButtonMUI value={<TwitterIcon />} />
                <ButtonMUI value={<LinkedInIcon />} />
              </div>
            </>
          </Column>
          <Column title="Contactez nous">
            <>
              <p className="mb-3">Bientôt disponible</p>
              <ButtonMUI className="max-w-24" value={"Contact"} />
            </>
          </Column>
        </div>
        <p>NousProprios, notre entreprise</p>
      </div>
      <div className="bg-slate-900 text-white px-10 py-5">
        NousProprios . CGV . Mentions légales . Politique de confidentialité
      </div>
    </>
  );
};
