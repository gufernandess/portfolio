import styled from "styled-components";

export const CareerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  color: white;
`;

export const CareerTitle = styled.h2`
  width: 90%;
  color: var(--almost-yellow) !important;
  font-family: var(--subtitles-font);
  font-size: 3.2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const Timeline = styled.div`
  width: 90%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 1rem;
  margin-top: 6rem;

  &::before {
    content: "";
    position: absolute;
    left: 2.5%;
    right: 2.5%;
    top: 50%;
    transform: translateY(-50%);
    height: 6px;
    background: var(--hot-pink);
    border-radius: 6px;
    z-index: 1;
  }

  /* place dots and tooltips at fixed percentages across the timeline */
  /* dots/tooltips are positioned relative to each TimelineItem (centered in item) */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4rem;

    &::before {
      left: 20px;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      height: 6px;
    }
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16%;
  min-height: 320px;

  @media (max-width: 1024px) {
    width: 18%;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    min-height: 200px;
  }
`;

/* Hover wrapper removed — reverting to original timeline structure */

export const TimelineDot = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--almost-black);
  border: 6px solid var(--hot-pink);
  display: block;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  margin: 0;
  box-shadow: none;
`;

export const DotWrapper = styled.div`
  position: static;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover > .tooltip {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
    pointer-events: auto;
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%)
    translateY(${(props) => (props.position === "top" ? "10px" : "-10px")});
  top: ${(props) => (props.position === "top" ? "calc(50% + 22px)" : "auto")};
  bottom: ${(props) =>
    props.position === "top" ? "auto" : "calc(50% + 22px)"};
  background: var(--terminal-background);
  color: var(--some-white);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  width: 400px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
  opacity: 0;
  pointer-events: none;
  transition:
    opacity 180ms ease,
    transform 180ms ease;
  z-index: 4;

  @media (max-width: 768px) {
    position: relative;
    left: 0;
    transform: none;
    width: 100%;
    opacity: 1;
    pointer-events: auto;
    margin-top: 0.6rem;
  }
`;

export const ItemTitle = styled.h3`
  color: var(--hot-pink);
  font-family: var(--subtitles-font);
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
`;

export const ItemSubtitle = styled.h4`
  color: var(--almost-yellow);
  font-family: var(--text-font);
  font-size: 0.85rem;
  font-weight: 300;
  margin-bottom: 0.4rem;
`;

export const ItemText = styled.p`
  color: var(--card-text);
  font-family: var(--text-font);
  font-size: 0.85rem;
  font-weight: 300;
`;

export const TimelineContent = styled.div`
  font-family: var(--text-font);
  text-align: center;
  width: 100%;
  margin-bottom: ${(props) => (props.position === "top" ? "6rem" : "0")};
  margin-top: ${(props) => (props.position === "bottom" ? "13rem" : "0")};

  @media (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 2.4rem;
    text-align: left;
  }
`;
