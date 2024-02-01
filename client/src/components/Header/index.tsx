import { useSelector } from "react-redux";
import Nav from "../Nav";
import { RootState } from "../../redux/store";

const Header = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Nav to="/" element={<h1 className="font-bold">Header</h1>} />
        <ul className="flex gap-4">
          <Nav to="/" element={<li>Home</li>} />
          <Nav to="/about" element={<li>About</li>} />
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
                <li>Sign in</li>
              )
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Header;
