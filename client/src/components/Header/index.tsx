import { useSelector } from "react-redux";
import Nav from "../Nav";
import { RootState } from "../../redux/store";
import { Logo } from "../../svg/Logo";

const Header = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);

  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center p-3">
        <Nav to="/" element={<Logo />} />
        <ul className="flex gap-12 mr-12">
          <Nav to="/" element={<li>Accueil</li>} />
          <Nav to="/about" element={<li>A propos</li>} />
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
      </div>
    </div>
  );
};

export default Header;
