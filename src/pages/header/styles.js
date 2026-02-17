import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  height: 100px;
  background-color: ${({ menu }) =>
    menu ? "var(--almost-black)" : "transparent"};
  border-bottom: 2px solid
    ${({ isScrolled }) => (isScrolled ? "var(--hot-pink)" : "transparent")};
  transition:
    border-color 180ms ease,
    background-color 180ms ease;

  @media (min-width: 769px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2000;
  }

  @media (max-width: 768px) {
    height: 70px;
    padding: 0.75rem 1rem;
  }
  background-color: ${({ menu }) =>
    menu ? "var(--almost-black)" : "transparent"};
  border-bottom: 2px solid
    ${({ isScrolled }) => (isScrolled ? "var(--hot-pink)" : "transparent")};
  transition:
    border-color 180ms ease,
    background-color 180ms ease;

  @media (max-width: 768px) {
    & > :nth-child(2) {
      display: none;
    }
  }
`;
