import styled from "styled-components";

export const NavbarContainer = styled.ul`
    display: flex;
    gap: 5rem;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0 0 0 120.52px;
    font-family: "Roboto", sans-serif;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0;
        margin: 0;
        width: 100%;
    }
`;

export const NavbarItem = styled.li`
    font-size: 1rem;
    font-weight: bold;
    color: var(--hot-pink);
    cursor: pointer;
    transition: 0.3s;

    &:hover { opacity: 0.7; }

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #80808080;
        font-size: 1.5rem;
        width: 100%;
        height: 3rem;
        padding: 5rem;
    }
`;