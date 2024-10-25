import { Bar, BarButton, TerminalBar, TerminalContainer, TerminalString, TerminalText } from "./styles";

const Terminal = () => {
    return (
        <TerminalContainer>
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
                    ["Leitura", "Academia", "Estudos", "Cinema", "Corrida"]
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