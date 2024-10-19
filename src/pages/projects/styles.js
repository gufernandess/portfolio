import styled from "styled-components";
import { slideInLeft } from "../../animations/slide";

export const ProjectsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 10rem;
    color: white;
    width: 100%;
`;

export const ProjectsTitle = styled.h2`
  display: flex;
  justify-content: start;
  align-items: start;
  padding-bottom: 4rem;
  width: 90%;
  font-family: var(--subtitles-font);
  font-size: 4rem;

  &.slide-in-left {
    animation: ${slideInLeft} 1s forwards;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectsContent = styled.div`
    display: grid;
    width: 90%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: none;
    }
`;
