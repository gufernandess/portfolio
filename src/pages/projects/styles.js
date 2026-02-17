import styled from "styled-components";

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
  color: var(--almost-yellow) !important;
  font-family: var(--subtitles-font);
  font-size: 4rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectsContent = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    /* convert grid to a horizontal carousel on small screens */
    display: flex;
    flex-direction: row;
    gap: 16px;
    overflow-x: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 12px;

    > * {
      flex: 0 0 90%;
      scroll-snap-align: start;
      width: auto;
    }
  }
`;

export const CarouselWrapper = styled.div`
  width: 90%;
  position: relative;
`;

export const PrevButton = styled.button`
  display: none;
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const NextButton = styled.button`
  display: none;
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
