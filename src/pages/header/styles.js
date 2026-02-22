import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  background-color: ${({ menu, isScrolled }) =>
    menu === "true" || isScrolled ? "var(--almost-black)" : "transparent"};
  border-bottom: 2px solid
    ${({ isScrolled }) => (isScrolled ? "var(--hot-pink)" : "transparent")};
  transition:
    border-color 180ms ease,
    background-color 180ms ease;

  @media (max-width: 768px) {
    height: 70px;
    padding: 1rem 1rem 0.75rem 1rem;

    & > :nth-child(2) {
      display: none;
    }
  }
`;
