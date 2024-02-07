import { headerTabs } from "../../constant";
import { User } from "../../type";
import Nav from "../Nav";

export const DesktopHeader = ({
  currentUser,
}: {
  currentUser: User | null;
}) => {
  return (
    <ul className="flex gap-12 mr-12">
      {headerTabs.map((tab) => (
        <Nav to={tab.to} element={<li>{tab.label}</li>} />
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
            <li>Connexion</li>
          )
        }
      />
    </ul>
  );
};
