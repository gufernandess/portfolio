import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5rem;
  flex-direction: column;
  position: fixed;
  background-color: var(--almost-black);
  top: 70px;
  height: calc(100vh - 70px);
  width: 100% !important;
  z-index: 1500;

  @media (min-width: 769px) {
    top: 100px;
    height: calc(100vh - 100px);
  }
`;
