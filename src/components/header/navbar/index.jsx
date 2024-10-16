import React from 'react';
import { NavbarContainer, NavbarItem } from "./styles";

const Navbar = () => {
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
        smoothScrollTo(window.scrollY + 1024, 1000);
    };

    return (
        <NavbarContainer>
            <NavbarItem onClick={handleScrollToAbout}>About</NavbarItem>
            <NavbarItem>Projects</NavbarItem>
            <NavbarItem>Resume</NavbarItem>
        </NavbarContainer>
    );
};

export default Navbar;

