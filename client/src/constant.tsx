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
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/logoOneSlap.png?alt=media&token=004ddbf1-cdb4-4593-b153-750ccddd942f",
    icon: <BusinessCenterIcon className="mb-1" />,
  },
  {
    name: "Valentine",
    role: "Banquière",
    description:
      "Acheteuse de biens résidentiels et locatifs\n2 biens immobiliers locatifs",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/Valentine.jpeg?alt=media&token=3634b46f-120f-477d-84b8-c367ad9cb78d",
    icon: <AccountBalanceIcon className="mb-1" />,
  },
  {
    name: "Sarah",
    role: "Banquière",
    description:
      "Banquière et investisseur dans l'immobilier locatif depuis 3 ans.\n2 biens immobiliers locatifs",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/Sarah%20photo%20Image%202024-03-12%20at%2012.16.54.jpeg?alt=media&token=3649df6e-9873-4ccb-bbb9-4c40359d39f4",
    icon: <AccountBalanceIcon className="mb-1" />,
  },
  {
    name: "Johanna",
    role: "Experte en immobilier",
    description:
      "Experte en financement immobilier depuis 6 ans.\n1 bien immobilier résidentiel",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/Johanna.jpeg?alt=media&token=4af7792d-6d15-428a-8f4e-a8c054902de9",
    icon: <ApartmentIcon className="mb-1" />,
  },
  {
    name: "Arold",
    role: "Expert en immobilier",
    description:
      "Expert dans le processus d'achat d'un bien en construction.\n1 bien immobilier résidentiel",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/Arold%20photo%20%20-%20copie.jpg?alt=media&token=9483c931-44d9-4bd3-957d-36a71af67b99",
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
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/Capture%20d%E2%80%99e%CC%81cran%202024-03-13%20a%CC%80%2022.20.21.png?alt=media&token=5b0f5a68-7c74-4703-ba2e-53bcbe5af020",
    icon: <CodeIcon className="mb-1" />,
  },
];
