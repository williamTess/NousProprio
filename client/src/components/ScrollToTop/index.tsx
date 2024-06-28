import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentTab } from "../../redux/user/userSlice";
import { headerTabs } from "../../constant";

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const copiedTabs = [...headerTabs];
  copiedTabs.push({ to: "/sign-in", label: "Connexion", icon: <div></div> });
  copiedTabs.push({ to: "/sign-up", label: "Connexion", icon: <div></div> });

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    const tab = copiedTabs.find((tab) => {
      console.log(tab.to, pathname);
      return tab.to.includes(pathname.split("/", 2).join("/"));
    });

    window.scrollTo(0, 0);
    dispatch(setCurrentTab(tab ? tab.to : ""));
  }, [pathname]);

  return null;
};

export default ScrollToTop;
