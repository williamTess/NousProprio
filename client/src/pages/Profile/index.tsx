import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const ProfilePage = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  return <div>{currentUser?.username}</div>;
};

export default ProfilePage;
