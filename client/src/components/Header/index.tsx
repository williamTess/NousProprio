import { useDispatch, useSelector } from "react-redux";
import Nav from "../Nav";
import { RootState } from "../../redux/store";
import { Logo } from "../../svg/Logo";
import { useMediaQuery } from "react-responsive";
import { DesktopHeader } from "./DesktopHeader";
import DrawerMUI from "../MUI/DrawerMUI";
import { setCurrentTab } from "../../redux/user/userSlice";
import { headerTabs } from "../../constant";

const Header = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const dispatch = useDispatch();

  return (
    <div className="sticky top-0 z-10">
      <div className={`bg-white ${!isPortrait && "pl-14"}`}>
        <div className="flex justify-between items-center p-5 ">
          <Nav
            to="/"
            element={<Logo />}
            onClick={() => dispatch(setCurrentTab(headerTabs[0].to))}
          />
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
