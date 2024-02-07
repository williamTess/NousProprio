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
  );
};

export default Header;
