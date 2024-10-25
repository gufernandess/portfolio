import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  color: white;
`;

export const AboutTitle = styled.h2`
  display: flex;
  justify-content: start;
  align-items: start;
  width: 90%;
  font-family: var(--subtitles-font);
  font-size: 4rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 425px) {
    font-size: 2rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-top: 2rem;
  width: 90%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const AboutContent = styled.p`
  font-family: var(--text-font);
  font-weight: 300;
  font-size: 1.5rem;
  width: 50%;
  max-height: 510px;
  overflow-y: auto;

  @media (max-width: 1440px) {
    font-size: 1.2rem;
    width: 70%;
  }

  @media (max-width: 768px) {
  font-size: 1rem;
    width: 100%;
  }

  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`;

export const LinkStyle = styled.a`
  color: var(--hot-pink);
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    color: var(--almost-yellow);
  }
`;