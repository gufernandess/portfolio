import Navbar from "../../components/navbar";
import Social from "../../components/social";
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
        document.body.style.overflow = menu === "true" ? 'hidden' : 'auto';
    }, [menu]);

    return (
        <>
            <HeaderContainer menu={menu}>
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
                <Navbar/>
                {desktop ? (
                    <Social />
                ) : (
                    <MenuToggle open={menu} handle={toggleMenu} />
                )}
            </HeaderContainer>
            {!desktop && menu === 'true' && <Menu />}
        </>
    );
};

export default Header;


