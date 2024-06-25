import { Logo } from "../svg/Logo";

export const getHeaderStyle = (tab: string) => {
  return tab === "/formation"
    ? {
        gradient:
          "bg-gradient-to-b from-blue-dark/95 via-blue-dark/80 via-85% to-transparent",
        logo: <Logo color="white" />,
        textColor: "text-white",
      }
    : {
        gradient:
          "bg-gradient-to-b from-white/95 via-white/70 via-85% to-transparent",
        logo: <Logo />,
        textColor: "text-main",
      };
};
