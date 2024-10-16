import styled from "styled-components";
import { slideInLeft } from "../../animations/slide";

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

  &.slide-in-left {
    animation: ${slideInLeft} 1s forwards;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-top: 2rem;
  width: 90%;
`;

export const AboutContent = styled.p`
  font-family: var(--text-font);
  font-weight: 300;
  font-size: 1.5rem;
  width: 50%;

  &.slide-in-left {
    animation: ${slideInLeft} 1s forwards;
  }
`;