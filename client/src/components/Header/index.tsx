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
      <div className="bg-slate-200">
        <div className="flex justify-between items-center p-3">
          <Nav to="/" element={<Logo />} />
          {isPortrait ? (
            <DrawerMUI />
          ) : (
            <DesktopHeader currentUser={currentUser} />
          )}
        </div>
      </div>
      {!currentUser?.statusText && (
        <div className=" bg-gradient-to-t from-emerald-500 to-teal-500 text-white flex justify-center text-center p-3">
          <p>
            N'oubliez pas de compléter votre profile en
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
