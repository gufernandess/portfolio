import React, { useEffect, useRef } from 'react';
import { AboutContainer, AboutContent, AboutTitle, TextContainer } from "./styles";
import { TerminalContainer } from "./terminal/styles";
import Terminal from "./terminal";

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
            <AboutTitle ref={titleRef}>About me</AboutTitle>
            <TextContainer>
                <AboutContent ref={aboutContentRef}>
                    Hey there! I’m Gustavo Fernandes and I like to solve problems through programming to spend time.
                    That's what brought me here by the way.
                    <br/><br/>
                    I learned a lot about programming in a technical course I took in high school,
                    and that led me to the computer science degree I'm currently doing.
                    In both cases, I've had the opportunity to do some great projects
                    and continue learning on an ongoing basis.
                    <br/><br/>
                    I'm currently working on backend development, so I'm studying Node and MongoDB,
                    but I'm always willing to learn anything that involves computing
                    (and other things too).
                </AboutContent>
                <TerminalContainer ref={terminalRef}>
                    <Terminal />
                </TerminalContainer>
            </TextContainer>
        </AboutContainer>
    );
};

export default About;
