import styled from "styled-components";

export const SocialContainer = styled.div`
  display: flex;    
  gap: 2rem;

  > * {
    color: var(--hot-pink);
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: var(--almost-yellow);
    }
  }
`;