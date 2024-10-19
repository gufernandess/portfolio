import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  padding-bottom: 3rem;
  gap: 5rem;
  height: 200px;
  width: 100%;
`;

export const Copyright = styled.p`
  font-family: var(--text-font);
  font-size: 1rem;
  font-weight: bold;
  font-style: italic;
  color: var(--hot-pink);

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;