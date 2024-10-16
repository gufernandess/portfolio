import { Bar, BarButton, TerminalBar, TerminalContainer, TerminalString, TerminalText } from "./styles";
import terminalData from "../../../database/terminal.json";

const strings = terminalData.strings;
const gustavo = terminalData.gustavo;

function formatStringColor(input) {
    const formattedString = input.split('').map((char, index) => {
        if (input.startsWith('"') || input.startsWith('[')) {
            if (char === '[' || char === ']' || char === ',') {
                return `<span style="color: black;">${char}</span>`;
            }
            return `<span style="color: #F6C177;">${char}</span>`;
        }
        return `<span style="color: black;">${char}</span>`;
    }).join('');

    return formattedString;
}

const Terminal = () => {
    return (
        <>
            <TerminalContainer>
                <Bar>
                    <BarButton color="var(--terminal-exit)"/>
                    <BarButton color="var(--terminal-minimize)"/>
                    <BarButton color="var(--terminal-maximize)"/>
                </Bar>
                <TerminalText>
                    {strings[0]}
                    <br/>
                    <TerminalString>
                        {`"${gustavo.degree}"`}
                    </TerminalString>

                    <br/><br/>

                    {strings[1]}
                    <br/>
                    <TerminalString>
                        {`"${gustavo.university}"`}
                    </TerminalString>

                    <br/><br/>

                    {strings[2]}
                    <br/>
                    <TerminalString>
                        {`[${gustavo.skills}]`}
                    </TerminalString>

                    <br/><br/>

                    {strings[3]}
                    <br/>
                    <TerminalString>
                        {`[${gustavo.workspace}]`}
                    </TerminalString>

                    <br/><br/>

                    {strings[4]}
                    <br/>
                    <TerminalString>
                        {`[${gustavo.interests}]`}
                    </TerminalString>

                    <br/><br/>

                    {strings[5]}
                    <br/>
                    <TerminalString>
                        {`[${gustavo.languages}]`}
                    </TerminalString>

                    <br/><br/>

                    {"> "}
                    <TerminalBar />
                </TerminalText>
            </TerminalContainer>
        </>
    );
};

export default Terminal;