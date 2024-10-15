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
`;

export const NavbarItem = styled.li`
    font-size: 1rem;
    font-weight: bold;
    color: var(--hot-pink);
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        opacity: 0.7;
    }
`;