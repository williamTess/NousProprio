import { Comment, HeaderTab, TeamMember } from "./type";
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

export const commentaries: Comment[] = [
  {
    username: "Louise Groyer",
    photo:
      "https://user-images.trustpilot.com/661647e89ec6010012932021/73x73.png",
    rate: 5,
    title: "Professionnalisme et pédagogie",
    description:
      "Les cours de reporting financier avec Mr Guims ont été très instructifs. De nombreux échanges sur l'actualité de la finance ou autre sujet rythmaient le cours. Des informations utiles pour le quotidien et transmises de manière très pédagogique. Un professeur à l'écoute et disponible pour ses élèves ! Je ne peux que recommander !",
    link: "https://fr.trustpilot.com/reviews/661647f893d13c9019df5b09",
    date: "10 avr. 2024",
  },
  {
    username: "Romane ARASSUS",
    photo:
      "https://user-images.trustpilot.com/6613f8e7dadc910012326bce/73x73.png",
    rate: 5,
    title: "Cours sur le reporting financier",
    description:
      "Les cours étaient interactifs. J'ai pu apprendre des éléments très concret. Merci pour votre accompagnement.",
    link: "https://fr.trustpilot.com/users/6613f8e7dadc910012326bce",
    date: "8 avr. 2024",
  },
  {
    username: "Jonathan Kabore",
    photo:
      "https://user-images.trustpilot.com/6614c55551b19f00129e290d/73x73.png",
    rate: 5,
    title: "Un projet prometteur",
    description:
      "L'initiative de Monsieur Guims qui a été mon professeur de finance, d'établir une entreprise immobilière démontre sa vision stratégique et son expertise dans le domaine financier. En combinant ses connaissances pointues en finance avec le secteur immobilier, cette entreprise promet d'apporter des solutions innovantes et rentables dans un marché en constante évolution.",
    link: "https://fr.trustpilot.com/reviews/66150c7e23ef91fe45427ae8",
    date: "9 avr. 2024",
  },
  {
    username: "Danawou kady",
    photo:
      "https://user-images.trustpilot.com/661e653aa2aa5500126adf1d/73x73.png",
    rate: 5,
    title: "Dispenser une bonne formation",
    description: "Dispenser une bonne formation",
    link: "https://fr.trustpilot.com/reviews/661e6563a99102abf08b697f",
    date: "16 avr. 2024",
  },
  {
    username: "Louise Groyer",
    photo:
      "https://user-images.trustpilot.com/661647e89ec6010012932021/73x73.png",
    rate: 5,
    title: "Professionnalisme et pédagogie",
    description:
      "Les cours de reporting financier avec Mr Guims ont été très instructifs. De nombreux échanges sur l'actualité de la finance ou autre sujet rythmaient le cours. Des informations utiles pour le quotidien et transmises de manière très pédagogique. Un professeur à l'écoute et disponible pour ses élèves ! Je ne peux que recommander !",
    link: "https://fr.trustpilot.com/reviews/661647f893d13c9019df5b09",
    date: "10 avr. 2024",
  },
  {
    username: "Louise Groyer",
    photo:
      "https://user-images.trustpilot.com/661647e89ec6010012932021/73x73.png",
    rate: 5,
    title: "Professionnalisme et pédagogie",
    description:
      "Les cours de reporting financier avec Mr Guims ont été très instructifs. De nombreux échanges sur l'actualité de la finance ou autre sujet rythmaient le cours. Des informations utiles pour le quotidien et transmises de manière très pédagogique. Un professeur à l'écoute et disponible pour ses élèves ! Je ne peux que recommander !",
    link: "https://fr.trustpilot.com/reviews/661647f893d13c9019df5b09",
    date: "10 avr. 2024",
  },
];

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

export const boss = {
  name: "Alex",
  role: "Fondateur",
  description:
    "J'enseigne dans des écoles de commerce sur Paris pour booster la motivation des étudiants et surtout changer le modèles d'enseignement: Faire apprendre des choses qui servent vraiments !",
  list: ["Gérant d'actifs financiers", "Intervenant en école de commerce"],
  img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/Equipe%2FAlex.jpeg?alt=media&token=48aa6765-e38c-49ac-8987-58b064598dc6",
  icon: <BusinessCenterIcon className="mb-1" />,
};
