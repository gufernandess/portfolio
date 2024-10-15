import Navbar from "./navbar";
import TranslateButton from "./translateButton";
import MenuToggle from "./menu/menuToggle";
import Menu from "./menu";
import { HeaderContainer } from "./styles";
import { Code } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

const Header = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <HeaderContainer isMenuOpen={isMenuOpen}>
                <Code
                    size={64}
                    weight="bold"
                    style={{
                        background: "transparent",
                        color: "var(--hot-pink)",
                        cursor: "pointer",
                    }}
                />
                <Navbar />
                {isDesktop ? (
                    <TranslateButton />
                ) : (
                    <MenuToggle isOpen={isMenuOpen} handleMenu={handleMenuToggle} />
                )}
            </HeaderContainer>
            {!isDesktop && isMenuOpen && <Menu />}
        </>
    );
};

export default Header;
