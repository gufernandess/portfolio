import { Bar, BarButton, TerminalBar, TerminalContainer, TerminalString, TerminalText } from "./styles";
import { useEffect, useRef } from "react";

const Terminal = () => {
    const terminalRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                   if (entry.target === terminalRef.current) {
                        entry.target.classList.add('slide-in-right');
                    }
                }
            });
        }, options);

        if (terminalRef.current) observer.observe(terminalRef.current);

        return () => {
            if (terminalRef.current) observer.unobserve(terminalRef.current);
        };
    }, []);

    return (
        <TerminalContainer ref={terminalRef}>
            <Bar>
                <BarButton color="var(--terminal-exit)"/>
                <BarButton color="var(--terminal-minimize)"/>
                <BarButton color="var(--terminal-maximize)"/>
            </Bar>
            <TerminalText>
                {'> gustavo.degree'}
                <br/>
                <TerminalString>
                    "Ciência da Computação"
                </TerminalString>

                <br/><br/>

                {'> gustavo.university'}
                <br/>
                <TerminalString>
                    "Universidade Federal do Ceará"
                </TerminalString>

                <br/><br/>

                {'> gustavo.skills'}
                <br/>
                <TerminalString>
                    ["HTML", "CSS", "Javascript", "React", "Styled-Components", "C++", "Java", "Python", "PostgreSQL", "Git"]
                </TerminalString>

                <br/><br/>

                {'> gustavo.workspace'}
                <br/>
                <TerminalString>
                    ["Pop!OS", "Visual Studio Code", "Vim"]
                </TerminalString>

                <br/><br/>

                {'> gustavo.hobbies'}
                <br/>
                <TerminalString>
                    ["Leitura", "Trilhas", "Musculação", "Estudos", "Cinema", "Corrida"]
                </TerminalString>

                <br/><br/>

                {'> gustavo.languages'}
                <br/>
                <TerminalString>
                ["Português", "Inglês"]
                </TerminalString>

                <br/><br/>

                {"> "}
                <TerminalBar />
            </TerminalText>
        </TerminalContainer>
    );
};

export default Terminal;