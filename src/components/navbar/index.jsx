import { NavbarContainer, NavbarItem } from "./styles";
import { useMenu } from "../../context/menuContext";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { toggleMenu } = useMenu();
  const { t } = useTranslation();

  const smoothScrollTo = (targetY, duration) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, startY + distance * easeInOutQuad(progress));
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };
    requestAnimationFrame(animation);
  };

  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const handleScrollToAbout = () => {
    scrollToId("about");
  };

  const handleScrollToProjects = () => {
    scrollToId("projects");
  };

  const handleScrollToContacts = () => {
    scrollToId("contacts");
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // fallback to previous hardcoded offsets if element not found
      if (id === "about") smoothScrollTo(window.scrollY + 900, 1000);
      else if (id === "projects") smoothScrollTo(window.scrollY + 1900, 1000);
      else if (id === "contacts")
        smoothScrollTo(document.documentElement.scrollHeight, 1000);
    }
    toggleMenu();
  };

  return (
    <NavbarContainer>
      <NavbarItem title={t("header.menu.about")} onClick={handleScrollToAbout}>
        {t("header.menu.about")}
      </NavbarItem>
      <NavbarItem
        title={t("header.menu.projects")}
        onClick={handleScrollToProjects}
      >
        {t("header.menu.projects")}
      </NavbarItem>

      {/* <NavbarItem
        title={t("header.menu.career")}
        onClick={handleScrollToProjects}
      >
        {t("header.menu.career")}
      </NavbarItem> */}

      <NavbarItem
        title={t("header.menu.contacts")}
        onClick={handleScrollToContacts}
      >
        {t("header.menu.contacts")}
      </NavbarItem>
    </NavbarContainer>
  );
};

export default Navbar;
