import { HeaderTab, TeamMember } from "./type";
import HomeIcon from "@mui/icons-material/Home";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

export const headerTabs: HeaderTab[] = [
  { to: "/", label: "Accueil", icon: <HomeIcon /> },
  { to: "/about", label: "A propos", icon: <Diversity3Icon /> },
];

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const team: TeamMember[] = [
  {
    name: "Alex",
    role: "Fondateur",
    description:
      "Mon objectif : faciliter vos investissements immobiliers et doper vos connaissances",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/Equipe%2FAlex.jpeg?alt=media&token=48aa6765-e38c-49ac-8987-58b064598dc6",
    icon: <BusinessCenterIcon className="mb-1" />,
  },
  {
    name: "Valentine",
    role: "Banquière",
    description:
      "Acheteuse de biens résidentiels et locatifs\n2 biens immobiliers locatifs",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/Equipe%2FValentine.jpeg?alt=media&token=369aaa4b-7364-4381-850f-f409568f2409",
    icon: <AccountBalanceIcon className="mb-1" />,
  },
  {
    name: "Sarah",
    role: "Banquière",
    description:
      "Banquière et investisseur dans l'immobilier locatif depuis 3 ans.\n2 biens immobiliers locatifs",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/Equipe%2FSarah.jpeg?alt=media&token=8c0d40b6-554a-4107-88f2-195f072322e3",
    icon: <AccountBalanceIcon className="mb-1" />,
  },
  {
    name: "Johanna",
    role: "Experte en immobilier",
    description:
      "Experte en financement immobilier depuis 6 ans.\n1 bien immobilier résidentiel",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/Equipe%2FJoahana.jpeg?alt=media&token=8920bee6-c102-4f25-a6b3-99e179bcd220",
    icon: <ApartmentIcon className="mb-1" />,
  },
  {
    name: "Arold",
    role: "Expert en immobilier",
    description:
      "Expert dans le processus d'achat d'un bien en construction.\n1 bien immobilier résidentiel",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/Equipe%2FArold.jpeg?alt=media&token=1f177f9d-f444-4ead-b68d-6e71382081a2",
    icon: <ApartmentIcon className="mb-1" />,
  },
  {
    name: "Diego",
    role: "Graphiste",
    description: "Graphiste dans le domaine du social media",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/Equipe%2FDiego.jpg?alt=media&token=25371da6-579e-49eb-916b-4e7a4fcbdf46",
    icon: <DesignServicesIcon className="mb-1" />,
  },
  {
    name: "William",
    role: "Developpeur & Designer",
    description:
      "Passionné par la programmation, a réalisé le site NousProprio.",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/Equipe%2FWilliam.png?alt=media&token=a94d140d-e8b3-456f-be7f-939ef1570d60",
    icon: <CodeIcon className="mb-1" />,
  },
];
