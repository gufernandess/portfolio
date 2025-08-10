import { MenuContainer } from "./styles";
import Navbar from "../navbar";
import LanguageSwitcher from "../languageSwitcher";

const Menu = () => {
  return (
    <MenuContainer>
      <Navbar />
      <LanguageSwitcher />
    </MenuContainer>
  );
};

export default Menu;
