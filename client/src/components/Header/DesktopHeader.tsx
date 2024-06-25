import { headerTabs } from "../../constant";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getHeaderStyle } from "../../utils/getHeaderStyle";

export const DesktopHeader = () => {
  const { currentTab, currentUser } = useSelector(
    (state: RootState) => state.user
  );

  const { textColor } = getHeaderStyle(currentTab);

  return (
    <ul className="flex gap-6 lg:gap-12 mr-12">
      {headerTabs.map((tab) => (
        <Nav
          to={tab.to}
          key={tab.label}
          element={
            <li
              className={`${textColor} hover:text-main ${
                currentTab === tab.to && `font-bold !text-main`
              }`}
            >
              {tab.label}
            </li>
          }
        />
      ))}
      <Nav
        to="/profile"
        element={
          currentUser ? (
            <img
              src={currentUser.profilePicture}
              alt="profile-pic"
              className="h-7 w-7 rounded-full object-cover"
            />
          ) : (
            <li
              className={`${textColor} hover:text-main mr-6 ${
                (currentTab === "/sign-in" || currentTab === "/sign-up") &&
                "font-bold !text-main"
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
