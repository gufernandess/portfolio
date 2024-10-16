import styled from 'styled-components';
import { blink } from '../../../animations/blink';
import { slideInRight } from "../../../animations/slide";

export const TerminalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background: var(--terminal-background);
  border-radius: 10px;
  font-family: var(--terminal-font);
  font-size: 1rem;
  font-weight: 400;
  height: 510px;
  width: 700px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  &.slide-in-right {
    animation: ${slideInRight} 1s forwards;
  }
`;

export const Bar = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  padding: 0 10px;
  gap: 5px;
  background: var(--card-text);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 25px;
  width: 100%;
`;  

export const BarButton = styled.div`
  background: ${(props) => (props.color ? props.color : "white")};
  border-radius: 50%;
  height: 12px;
  width: 12px;
`;

export const TerminalText = styled.div`
  padding: 20px;
`;

export const TerminalString = styled.span`
  color: var(--terminal-string);
`;

export const TerminalBar = styled.span`
  display: inline-block;
  height: 15px;
  width: 5px;
  animation: ${blink} 1s infinite;
`;