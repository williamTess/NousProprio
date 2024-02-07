import { HeaderTab } from "./type";
import HomeIcon from "@mui/icons-material/Home";
import Diversity3Icon from "@mui/icons-material/Diversity3";

export const headerTabs: HeaderTab[] = [
  { to: "/", label: "Accueil", icon: <HomeIcon /> },
  { to: "/about", label: "A propos", icon: <Diversity3Icon /> },
];

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
