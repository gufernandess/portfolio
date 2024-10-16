import { keyframes } from 'styled-components';

export const blink = keyframes`
  0% {
    background: var(--almost-yellow);
  }
  50% {
    background: var(--almost-yellow);
  }
  51% {
    background: transparent;
  }
  100% {
    background: transparent;
  }
`;