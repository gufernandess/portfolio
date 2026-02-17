import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
  cursor: pointer;
  background: var(--terminal-background);
  color: var(--card-text);
  border-radius: 20px;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  height: 200px;
  width: 100%;

  @media (max-width: 768px) {
    height: 400px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0;
  }
`;

export const ImageContainer = styled.div`
  width: 300px;
  min-width: 300px;
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.03),
    rgba(0, 0, 0, 0.08)
  );
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--card-text);
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
    height: 400px;
    border-radius: 12px;
  }
`;

export const RightContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    gap: 1rem;
  }
`;

export const AnimationCard = styled.div`
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-family: var(--text-font);
  font-size: 1.25rem;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const CardDescription = styled.p`
  font-family: var(--text-font);
  font-size: 1rem;
  font-weight: thin;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const CardStars = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--terminal-minimize);
  gap: 1rem;
  font-family: var(--text-font);
  font-size: 1rem;
  font-weight: bold;
`;

export const CardForks = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--terminal-maximize);
  gap: 1rem;
  font-family: var(--text-font);
  font-size: 1rem;
  font-weight: bold;
`;

export const CardLanguage = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #add8e6;
  gap: 1rem;
  font-family: var(--text-font);
  font-size: 1rem;
  font-weight: normal;
`;
