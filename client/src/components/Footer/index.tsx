import { ReactElement } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ButtonMUI } from "../MUI/ButtonMUI";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Logo } from "../../svg/Logo";
import { useMediaQuery } from "react-responsive";
import Nav from "../Nav";

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
          isPortrait && "text-center"
        }`}
      >
        <div className={`flex flex-col w-full max-w-[1350px] m-auto`}>
          <p className={`mb-16 ${isPortrait && "self-center"}`}>
            <Logo color="white" />
          </p>
          <div className={styleAccordingToOrientation}>
            <Column title="A propos">
              <>
                <p className="mb-5">
                  NousProprio, une entreprise qui partage des informations
                  immobilières pour répondre aux non-dits du domaine
                </p>
                <Nav
                  to="/"
                  element={<ButtonMUI className="max-w-24" value={"Accueil"} />}
                />
              </>
            </Column>
            <Column title="Notre SAV">
              <>
                <a
                  className="text-blue-600 font-semibold hover:underline"
                  href="mailto:equipe@nousproprio.fr"
                >
                  <ArrowForwardIcon fontSize="small" /> Nous contacter
                </a>
              </>
            </Column>
            <Column title="Suivez nous sur les réseaux sociaux">
              <>
                <p className="mb-1">
                  <InstagramIcon />
                  <span className="font-semibold"> Instagram</span>
                </p>
                <p className="mb-1">
                  <TwitterIcon /> <span className="font-semibold">Twitter</span>
                </p>
                <p className="mb-7">
                  <LinkedInIcon />{" "}
                  <span className="font-semibold">Linkedin</span>
                </p>
                <div className={`flex gap-2 max-w-10 ${isPortrait && "mr-40"}`}>
                  <a
                    href="https://www.instagram.com/nousproprio?igsh=MTJwaDgxc2NyNGF4Zw%3D%3D&utm_source=gr"
                    target="_blank"
                  >
                    <ButtonMUI value={<InstagramIcon />} />
                  </a>
                  <a href="https://twitter.com/nousproprio" target="_blank">
                    <ButtonMUI value={<TwitterIcon />} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/nousproprio/about/"
                    target="_blank"
                  >
                    <ButtonMUI value={<LinkedInIcon />} />
                  </a>
                </div>
              </>
            </Column>
            <Column title="Contactez-nous">
              <>
                <a href="mailto:equipe@nousproprio.fr">
                  <ButtonMUI className="max-w-24" value={"Contact"} />
                </a>
              </>
            </Column>
          </div>
          <p>NousProprio, notre entreprise</p>
        </div>
      </div>
      <div className="bg-underFooter text-white px-20 py-7 flex">
        <div className="max-w-[1350px] m-auto">
          NousProprio . CGV . Mentions légales . Politique de confidentialité
        </div>
      </div>
    </>
  );
};
