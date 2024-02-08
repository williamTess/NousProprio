import { HeaderTab, TeamMember } from "./type";
import HomeIcon from "@mui/icons-material/Home";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

export const headerTabs: HeaderTab[] = [
  { to: "/", label: "Accueil", icon: <HomeIcon /> },
  { to: "/about", label: "A propos", icon: <Diversity3Icon /> },
];

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const team: TeamMember[] = [
  {
    name: "Jean",
    role: "Développeur",
    description: "Jean est un développeur passionné par la programmation.",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/360_F_242522709_ZhoDmO1L1PHkL6yvVVNutSBGsk1Ob7m0.jpg?alt=media&token=49363b84-5299-487b-b9c9-cce436615641",
    icon: <CodeIcon className="mb-1" />,
  },
  {
    name: "Paul",
    role: "Designer",
    description: "Paul est un designer passionné par le design.",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/photo-1500648767791-00dcc994a43e.jpg?alt=media&token=71e8a510-c6c4-4f3c-b744-8898571dcb70",
    icon: <DesignServicesIcon className="mb-1" />,
  },
  {
    name: "Jacques",
    role: "Développeur",
    description: "Jacques est un développeur passionné par la programmation.",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/smiling-man_1098-15443.avif?alt=media&token=f8e66f7c-1294-4871-ad4b-2112a57c8333",
    icon: <CodeIcon className="mb-1" />,
  },
];
