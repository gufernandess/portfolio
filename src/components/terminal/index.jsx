import {
  Bar,
  BarButton,
  TerminalBar,
  TerminalContainer,
  TerminalString,
  TerminalText,
} from "./styles";

const Terminal = () => {
  return (
    <TerminalContainer>
      <Bar>
        <BarButton color="var(--terminal-exit)" />
        <BarButton color="var(--terminal-minimize)" />
        <BarButton color="var(--terminal-maximize)" />
      </Bar>
      <TerminalText>
        {"> gustavo.degree"}
        <br />
        <TerminalString>"Ciência da Computação"</TerminalString>

        <br />
        <br />

        {"> gustavo.university"}
        <br />
        <TerminalString>"Universidade Federal do Ceará (UFC)"</TerminalString>

        <br />
        <br />

        {"> gustavo.skills"}
        <br />
        <TerminalString>
          ["NodeJS", "Jest", "MongoDB", "PostgreSQL", "Docker", "Git", "Java",
          "HTML", "CSS", "Javascript", "React", "Styled-Components",
          "Bootstrap"]
        </TerminalString>

        <br />
        <br />

        {"> gustavo.workspace"}
        <br />
        <TerminalString>["Manjaro Linux", "Zed", "Neovim"]</TerminalString>

        <br />
        <br />

        {"> gustavo.hobbies"}
        <br />
        <TerminalString>
          ["Leitura", "Academia", "Programação", "Cinema", "Escrita"]
        </TerminalString>

        <br />
        <br />

        {"> gustavo.languages"}
        <br />
        <TerminalString>["Português (C2)", "Inglês (B2)"]</TerminalString>

        <br />
        <br />

        {"> "}
        <TerminalBar />
      </TerminalText>
    </TerminalContainer>
  );
};

export default Terminal;
