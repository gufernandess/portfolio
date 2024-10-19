import Navbar from "../../components/navbar";
import Social from "../../components/social";
import MenuToggle from "../../components/menu/menuToggle";
import Menu from "../../components/menu";
import { HeaderContainer } from "./styles";
import { Code } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [desktop, setDesktop] = useState(false);
    const [menu, setMenu] = useState("false");

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
        if (menu === "true") {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menu]);

    const handleMenuToggle = () => {
        setMenu(menu === "false" ? "true" : "false");
    };

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
                    <MenuToggle open={menu} handle={handleMenuToggle} />
                )}
            </HeaderContainer>
            {!desktop && menu === 'true' && <Menu />}
        </>
    );
};

export default Header;

