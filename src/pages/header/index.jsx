import Navbar from "../../components/navbar";
import LanguageSwitcher from "../../components/languageSwitcher";
import MenuToggle from "../../components/menu/menuToggle";
import Menu from "../../components/menu";
import { HeaderContainer } from "./styles";
import { Code } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMenu } from "../../context/menuContext";

const Header = () => {
  const { menu, toggleMenu } = useMenu();
  const [desktop, setDesktop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setDesktop(window.innerWidth > 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!desktop) {
      document.body.style.overflow = menu === "true" ? "hidden" : "auto";
    }
  }, [desktop, menu]);

  return (
    <>
      <HeaderContainer menu={menu} isScrolled={isScrolled}>
        <Link to="/">
          <Code
            size={64}
            weight="bold"
            style={{
              background: "transparent",
              color: "var(--hot-pink)",
              cursor: "pointer",
            }}
          />
        </Link>
        <Navbar />
        {desktop ? (
          <LanguageSwitcher />
        ) : (
          <MenuToggle open={menu} handle={toggleMenu} />
        )}
      </HeaderContainer>
      {!desktop && menu === "true" && <Menu />}
    </>
  );
};

export default Header;
