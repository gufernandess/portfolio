import { MenuContainer } from "./styles";
import Navbar from "../navbar";
import TranslateButton from "../translateButton";


const Menu = () => {
    return (
        <MenuContainer>
            <Navbar />
            <TranslateButton />
        </MenuContainer>
    );
};

export default Menu;