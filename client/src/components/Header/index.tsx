import { useSelector } from "react-redux";
import Nav from "../Nav";
import { RootState } from "../../redux/store";
import { Logo } from "../../svg/Logo";
import { useMediaQuery } from "react-responsive";
import { DesktopHeader } from "./DesktopHeader";
import DrawerMUI from "../MUI/DrawerMUI";

const Header = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  return (
    <div className="sticky top-0 z-10">
      <div
        className={`bg-gradient-to-b from-white/95 via-white/70 via-85% to-transparent  ${
          !isPortrait && "pl-14"
        }`}
      >
        <div className="flex justify-between items-center p-5 pb-6 max-w-[1450px] m-auto">
          <div>
            <Nav to="/" element={<Logo />} />
            <p className="font-bold text-main text-xs sm:text-lg">
              Tout comprendre de l’investissement immobilier
            </p>
          </div>
          {isPortrait ? <DrawerMUI /> : <DesktopHeader />}
        </div>
      </div>
      {currentUser && !currentUser?.statusText && (
        <div className=" bg-gradient-to-t from-emerald-500 to-teal-500 text-white flex justify-center text-center p-3">
          <p>
            N'oubliez pas de compléter votre profil en
            <Nav
              to="/profile"
              element={<span className="font-bold"> cliquant ici</span>}
            />
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
