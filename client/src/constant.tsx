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
    username: "Chelabi katia",
    photo: "bg-orange-300",
    rate: 5,
    title: "Les cours étaient excellent",
    description:
      "Les cours étaient excellent , vraiment captivants et structurés de manière impeccable, offrant un équilibre parfait entre la théorie et la pratique, avec une participation active aux études de cas. Le professeur était extrêmement pédagogue et attentif, mettant tout en œuvre pour transmettre ses connaissances de manière efficace.",
  },
  {
    username: "Ahlem Jaha",
    photo: "bg-green-300",
    rate: 5,
    title: "Je recommande vivement",
    description:
      "Je recommande vivement ! La pédagogie employée est excellente, les informations sont claires, concises et adaptées à tout public, qu'il possède des connaissances approfondies sur le sujet ou non. Cela se distingue nettement des autres formations ou contenus disponibles sur Internet et les réseaux sociaux, qui offrent tous la même chose tant sur le fond que sur la forme.",
  },
  {
    username: "Damien D",
    photo: "bg-blue-300",
    rate: 5,
    title: "Pédagogie passionnante",
    description:
      "En tant que notre prof de reporting extra-financier, M.Guims a su être constamment créatif pour rendre son cours extrêmement intéressant et passionnant. Sa pédagogie permet une prise en main des sujets très facilement avec un grand niveau de compréhension. Merci pour ces séances !",
  },
  {
    username: "Manon Cochard",
    photo: "bg-pink-300",
    rate: 5,
    title: "pédagogue et captivant !",
    description:
      "Les leçons de ce professeur m’ont été très utiles. Sa méthode d’enseignement, cours TP et mise en relation avec l’actualité, favorise l’interaction et donc notre concentration. Cela m’a permis de retenir le contenu des cours plus facilement ainsi que de sortir de l’aspect théorique. Les explications sont claires et M. GUIMS s’adapte à notre rythme. Cette formation est un atout précieux. Je peux que la conseiller vivement !",
  },
  {
    username: "Regnault",
    photo: "bg-red-300",
    rate: 5,
    title: "Un professeur très formateur !",
    description:
      "Un professeur très formateur ! Les cours de Monsieur GUIMS ont été très intéressant et important pour notre formation. C’est un professeur qui aime ce qu’il fait et qui partage ses expériences ce qui permet de ne pas avoir un cours banale comme les autres mais un cours basé sur ce qui nous attends vraiment plus tard. Merci encore !",
  },
  {
    username: "Elsie KONAN",
    photo: "bg-orange-300",
    rate: 5,
    title: "Pédagogie remarquable",
    description:
      "Je souligne la remarquable approche pédagogique de M. Guims. Il se distingue véritablement par sa passion pour l’enseignement et son désir de partager ses connaissances avec ses étudiants. Le contenu accessible et engageant, facilitant ainsi une compréhension profonde des sujets étudiés. Chaque cours était une occasion d’apprendre de manière interactive, avec une attention particulière accordée à la stimulation de la curiosité et à l’encouragement de la réflexion critique.",
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
    role: "Juriste",
    description:
      "Acheteuse de biens résidentiels et locatifs\n2 biens immobiliers locatifs",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/Equipe%2FValentine.jpeg?alt=media&token=369aaa4b-7364-4381-850f-f409568f2409",
    icon: <AccountBalanceIcon className="mb-1" />,
  },
  {
    name: "Sarah",
    role: "Banquière",
    description:
      "Banquière et investisseur dans l'immobilier locatif depuis 3 ans\n2 biens immobiliers locatifs",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/Equipe%2FSarah.jpeg?alt=media&token=8c0d40b6-554a-4107-88f2-195f072322e3",
    icon: <AccountBalanceIcon className="mb-1" />,
  },
  {
    name: "Johanna",
    role: "Experte en immobilier",
    description:
      "Experte en financement immobilier depuis 6 ans\n1 bien immobilier résidentiel",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/Equipe%2FJoahana.jpeg?alt=media&token=8920bee6-c102-4f25-a6b3-99e179bcd220",
    icon: <ApartmentIcon className="mb-1" />,
  },
  {
    name: "Arold",
    role: "Expert en immobilier",
    description:
      "Expert dans le processus d'achat d'un bien en construction\n1 bien immobilier résidentiel",
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
      "Passionné par la programmation, a réalisé le site NousProprio",
    img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/Equipe%2FWilliam.png?alt=media&token=a94d140d-e8b3-456f-be7f-939ef1570d60",
    icon: <CodeIcon className="mb-1" />,
  },
];

export const boss = {
  name: "Alex",
  role: "Fondateur",
  description:
    "« J'enseigne dans des écoles de commerce sur Paris pour booster la motivation des étudiants et surtout changer le modèle d'enseignement: Faire apprendre des choses qui servent vraiment ! »",
  list: ["Gérant d'actifs financiers", "Intervenant en école de commerce"],
  img: "https://firebasestorage.googleapis.com/v0/b/nousproprio.appspot.com/o/Equipe%2FAlex.jpeg?alt=media&token=48aa6765-e38c-49ac-8987-58b064598dc6",
  icon: <BusinessCenterIcon className="mb-1" />,
};
