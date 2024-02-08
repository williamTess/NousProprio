import { headerTabs } from "../constant";

export const getCurrentTab = () => {
  const tmp = [
    ...headerTabs,
    { to: "/sign-in", label: "Connexion" },
    { to: "/profile", label: "Profile" },
  ];
  const current = tmp.reverse().find((tab) => {
    if (window.location.pathname.includes(tab.to)) {
      return tab.to;
    }
  });
  return current || headerTabs[0];
};
