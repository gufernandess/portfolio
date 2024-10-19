import { useEffect, useRef } from 'react';
import { AboutContainer, AboutContent, AboutTitle, TextContainer } from "./styles";
import Terminal from "../../components/terminal";

const About = () => {
    const titleRef = useRef(null);
    const aboutContentRef = useRef(null);
    const terminalRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === titleRef.current || entry.target === aboutContentRef.current) {
                        entry.target.classList.add('slide-in-left');
                    } else if (entry.target === terminalRef.current) {
                        entry.target.classList.add('slide-in-right');
                    }
                }
            });
        }, options);

        if (titleRef.current) observer.observe(titleRef.current);
        if (aboutContentRef.current) observer.observe(aboutContentRef.current);
        if (terminalRef.current) observer.observe(terminalRef.current);

        return () => {
            if (titleRef.current) observer.unobserve(titleRef.current);
            if (aboutContentRef.current) observer.unobserve(aboutContentRef.current);
            if (terminalRef.current) observer.unobserve(terminalRef.current);
        };
    }, []);

    return (
        <AboutContainer>
            <AboutTitle ref={titleRef}>Sobre mim</AboutTitle>
            <TextContainer>
                <AboutContent ref={aboutContentRef}>
                    Olá! Me chamo Gustavo Fernandes e gosto de resolver problemas através da programação para passar o tempo.
                    Foi isso que me trouxe até aqui a propósito.
                    <br/><br/>
                    Aprendi muito sobre programação em um curso técnico que fiz no ensino médio,
                    e isso me levou a graduação que estou fazendo atualmente.
                    Em ambos os casos, tive a oportunidade de realizar grandes projetos
                    e continuar aprendendo cada vez mais.
                    <br/><br/>
                    Atualmente estou trabalhando com desenvolvimento backend com Node e MongoDB,
                    porém estou sempre disposto a aprender qualquer coisa que envolva computação
                    (e outras coisas também).
                </AboutContent>
                <Terminal />
            </TextContainer>
        </AboutContainer>
    );
};

export default About;
