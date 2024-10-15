import styled from "styled-components";

export const TranslateButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 1.5rem;
    background: transparent;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
`;

export const LanguagesText = styled.span`
    font-family: var(--subtitles-font);
    font-size: 1rem;
    font-weight: 700;
    color: var(--hot-pink);
`;

export const ScrollContainer = styled.div`
    display: flex;
    align-items: center;
    background: var(--terminal-background);
    border-radius: 50px;
    height: 1.5rem;
    width: 4rem;
    padding: 0.25rem;
    position: relative;
    &:hover {
        opacity: 0.7;
    }
`;

export const ScrollButton = styled.button`
    background: var(--hot-pink);
    border: none;
    border-radius: 50%;
    width: 1.75rem;
    height: 1.75rem;
    position: absolute;
    left: ${(props) => (props.isEnglish ? '0.25rem' : '2rem')};
    transition: left 0.3s ease;
`;
