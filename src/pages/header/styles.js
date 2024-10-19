import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    width: 100%;
    height: 100px;
    background-color: ${({ menu }) => (menu ? "var(--almost-black)" : "transparent")};

    @media (max-width: 768px) {
        & > :nth-child(2) {
            display: none;
        }
    }
`;
