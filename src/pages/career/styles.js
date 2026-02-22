import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 0 rgba(0,0,0,0); }
  50% { transform: translate(-50%, -50%) scale(1.14); box-shadow: 0 0 12px var(--hot-pink); }
  100% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 0 rgba(0,0,0,0); }
`;

export const CareerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  color: white;
  padding: 4rem 0;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 3rem 0;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
    padding: 2rem 1rem;
    align-items: flex-start;

    &::before {
      left: 18px;
      right: auto;
      top: 0;
      bottom: 0;
      width: 4px;
      height: auto;
      transform: none;
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
    align-items: flex-start;
    justify-content: flex-start;
    min-height: auto;
    padding-left: 50px;
    position: relative;

    &[data-position="left"] {
      padding-left: 50px;
      padding-right: 0;
    }

    &[data-position="right"] {
      padding-left: 50px;
      padding-right: 0;
    }
  }
`;

export const TimelineDot = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--almost-black);
  border: 6px solid var(--hot-pink);
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  animation: ${pulse} 1.6s ease-in-out infinite;
  will-change: transform;
  cursor: pointer;
  z-index: 3;
  margin: 0;
  box-shadow: none;

  @media (max-width: 768px) {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(1);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
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
  &:hover > .dot {
    animation-play-state: paused;
    transform: translate(-50%, -50%) scale(1.22);
    box-shadow: 0 0 18px var(--hot-pink);
  }

  @media (max-width: 768px) {
    position: absolute;
    left: -15px;
    top: 0;
    width: 40px;
    height: 40px;
    transform: none;

    &:hover > .dot {
      transform: translate(-50%, -50%) scale(1.22);
    }
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
    display: none;
  }
`;

export const ItemTitle = styled.h3`
  color: var(--hot-pink);
  font-family: var(--subtitles-font);
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
`;

export const ItemSubtitle = styled.h4`
  color: var(--almost-yellow);
  font-family: var(--text-font);
  font-size: 0.95rem;
  font-weight: 300;
  margin-bottom: 0.35rem;
`;

export const ItemText = styled.p`
  color: var(--card-text);
  font-family: var(--text-font);
  font-size: 0.95rem;
  font-weight: 300;
`;

export const MobileDetail = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-top: 0.5rem;
    padding: 0.75rem;
    background: var(--terminal-background);
    border-radius: 6px;
    border-left: 3px solid var(--hot-pink);
  }
`;

export const TimelineContent = styled.div`
  font-family: var(--text-font);
  text-align: center;
  width: 100%;
  margin-bottom: ${(props) => (props.position === "top" ? "6rem" : "0")};
  margin-top: ${(props) => (props.position === "bottom" ? "13rem" : "0")};

  @media (max-width: 768px) {
    margin: 0;
    text-align: left;
    width: 100%;
    padding-bottom: 1rem;
  }
`;
