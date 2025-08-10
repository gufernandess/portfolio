import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5rem;
  flex-direction: column;
  position: fixed;
  background-color: var(--almost-black);
  height: calc(100vh - 100px);
  width: 100% !important;
  z-index: 100;
`;
