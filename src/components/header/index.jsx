import Navbar from "./navbar";
import TranslateButton from "./translateButton";
import { HeaderContainer } from "./styles";
import { Code } from "@phosphor-icons/react";

const Header = () => {
    return (
        <HeaderContainer>
            <Code size={64} weight="bold" style={{
                background: "transparent",
                color: "var(--hot-pink)",
                cursor: "pointer",
            }}/>
            <Navbar/>
            <TranslateButton/>
        </HeaderContainer>
    );
}

export default Header;