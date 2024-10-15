import styled from "styled-components";
import { floating } from "../../animations/floating";
import { fadeIn } from "../../animations/fade";

export const InitialPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 100px);
    width: 100%;
`;

export const InitialPageTitle = styled.h1`
    font-family: var(--title-font);
    font-size: 4rem;
    font-weight: 700;
    background: var(--title-gradient);
    -webkit-background-clip: text;
    color: transparent;
    opacity: 0;
    animation: ${fadeIn} 1.2s ease-out forwards, ${floating} 2.5s ease-in-out infinite; 
    animation-delay: 0.2s;
`;

export const InitialPageSubtitle = styled.h2`
    font-family: var(--title-font);
    font-size: 2rem;
    font-weight: 400;
    color: var(--almost-yellow);
    margin-top: 50px;
    opacity: 0;
    animation: ${fadeIn} 1.5s ease-out forwards, ${floating} 2.5s ease-in-out infinite;
    animation-delay: 0.4s;
`;


