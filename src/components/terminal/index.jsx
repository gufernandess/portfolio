import {
  Bar,
  BarButton,
  TerminalBar,
  TerminalContainer,
  TerminalString,
  TerminalText,
} from "./styles";
import { useTranslation } from "react-i18next";

const Terminal = () => {
  const { t } = useTranslation();

  const terminalContent = t("details.terminal", { returnObjects: true });

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
        <TerminalString>"{terminalContent.degree}"</TerminalString>
        <br />
        <br />
        {"> gustavo.university"}
        <br />
        <TerminalString>"{terminalContent.university}"</TerminalString>
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
          {`[${terminalContent.hobbies
            .map((hobby) => `"${hobby}"`)
            .join(", ")}]`}
        </TerminalString>
        <br />
        <br />
        {"> gustavo.languages"}
        <br />
        <TerminalString>
          {`[${terminalContent.languages
            .map((lang) => `"${lang}"`)
            .join(", ")}]`}
        </TerminalString>
        <br />
        <br />
        {"> "}
        <TerminalBar />
      </TerminalText>
    </TerminalContainer>
  );
};

export default Terminal;
