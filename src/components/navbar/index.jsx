import { NavbarContainer, NavbarItem } from "./styles";
import { useMenu } from "../../context/menuContext";

const Navbar = () => {
    const { toggleMenu } = useMenu();

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
        smoothScrollTo(window.scrollY + 900, 1000);
        toggleMenu();
    };

    const handleScrollToProjects = () => {
        smoothScrollTo(window.scrollY + 1900, 1000);
        toggleMenu();
    };

    return (
        <NavbarContainer>
            <NavbarItem title='Sobre mim' onClick={handleScrollToAbout}>Sobre</NavbarItem>
            <NavbarItem title='Meus projetos' onClick={handleScrollToProjects}>Projetos</NavbarItem>
            <NavbarItem title='Meu currículo'>
                <a href="https://drive.google.com/file/d/1FW2SjIezG1pgHWcEmsEOxY23F99TiHbO/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    Currículo
                </a>
            </NavbarItem>
        </NavbarContainer>
    );
};

export default Navbar;


