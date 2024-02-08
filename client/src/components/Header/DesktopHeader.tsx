import { headerTabs } from "../../constant";
import Nav from "../Nav";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setCurrentTab } from "../../redux/user/userSlice";

export const DesktopHeader = () => {
  const { currentTab, currentUser } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch();

  return (
    <ul className="flex gap-12 mr-12">
      {headerTabs.map((tab) => (
        <Nav
          to={tab.to}
          element={
            <li
              className={`hover:text-main ${
                currentTab === tab.to && "font-bold text-main"
              }`}
            >
              {tab.label}
            </li>
          }
          onClick={() => dispatch(setCurrentTab(tab.to))}
        />
      ))}
      <Nav
        to="/profile"
        onClick={() => dispatch(setCurrentTab("/sign-in"))}
        element={
          currentUser ? (
            <img
              src={currentUser.profilePicture}
              alt="profile-pic"
              className="h-7 w-7 rounded-full object-cover"
            />
          ) : (
            <li
              className={`hover:text-main ${
                currentTab === "/sign-in" && "font-bold text-main"
              }`}
            >
              Connexion
            </li>
          )
        }
      />
    </ul>
  );
};
