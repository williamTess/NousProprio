import { HeaderTab, TeamMember } from "./type";
import HomeIcon from "@mui/icons-material/Home";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

export const headerTabs: HeaderTab[] = [
  { to: "/", label: "Accueil", icon: <HomeIcon /> },
  { to: "/about", label: "A propos", icon: <Diversity3Icon /> },
];

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const team: TeamMember[] = [
  {
    name: "Valentine",
    role: "Banquière",
    description:
      "Un passé dans le milieu bancaire cumulé à l'achat résidentiel et locatif depuis 3 ans.",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/Valentine.jpeg?alt=media&token=3634b46f-120f-477d-84b8-c367ad9cb78d",
    icon: <AccountBalanceIcon className="mb-1" />,
  },
  {
    name: "Paul",
    role: "Investisseur",
    description:
      "Investisseur dans l'immobilier locatif et immeuble de rapport.",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/smiling-man_1098-15443.avif?alt=media&token=f8e66f7c-1294-4871-ad4b-2112a57c8333",
    icon: <AccountBalanceWalletIcon className="mb-1" />,
  },
  {
    name: "Sarah",
    role: "Banquière",
    description:
      "Banquière et investisseur dans l'immobilier locatif depuis 3 ans.",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/Sarah.jpeg?alt=media&token=d1518175-9e93-46a0-b5a1-d77827d0a34b",
    icon: <AccountBalanceIcon className="mb-1" />,
  },
  {
    name: "Arold",
    role: "Expert en immobilier",
    description: "Expert dans le processus d'achat d'un bien en construction.",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/360_F_242522709_ZhoDmO1L1PHkL6yvVVNutSBGsk1Ob7m0.jpg?alt=media&token=49363b84-5299-487b-b9c9-cce436615641",
    icon: <ApartmentIcon className="mb-1" />,
  },
  {
    name: "Johanna",
    role: "Experte en immobilier",
    description: "Experte en financement immobilier depuis 6 ans.",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/Johanna.jpeg?alt=media&token=4af7792d-6d15-428a-8f4e-a8c054902de9",
    icon: <ApartmentIcon className="mb-1" />,
  },
  {
    name: "Diego",
    role: "Graphiste",
    description: "Graphiste dans le domaine du social media",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/Diego.jpeg?alt=media&token=c99777be-255e-4880-af60-e7124c9c67d0",
    icon: <DesignServicesIcon className="mb-1" />,
  },
  {
    name: "William",
    role: "Developpeur & Designer",
    description:
      "Passionné par la programmation, a réalisé le site NousProprio.",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/photo-1500648767791-00dcc994a43e.jpg?alt=media&token=71e8a510-c6c4-4f3c-b744-8898571dcb70",
    icon: <CodeIcon className="mb-1" />,
  },
  {
    name: "Alex",
    role: "Fondateur",
    description:
      "Investi dans le monde de l'immobilier, souhaite partager ses connaissances.",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/360_F_242522709_ZhoDmO1L1PHkL6yvVVNutSBGsk1Ob7m0.jpg?alt=media&token=49363b84-5299-487b-b9c9-cce436615641",
    icon: <BusinessCenterIcon className="mb-1" />,
  },
];
