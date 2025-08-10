import { SocialContainer } from "./styles";
import { GithubLogo, LinkedinLogo, Mailbox } from "@phosphor-icons/react";

const Social = () => {
  return (
    <SocialContainer>
      <a
        href={import.meta.env.VITE_LINKEDIN_URL}
        title="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinLogo size={32} />
      </a>
      <a
        href={import.meta.env.VITE_EMAIL_URL}
        title="E-mail"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Mailbox size={32} />
      </a>
      <a
        href={import.meta.env.VITE_GITHUB_URL}
        title="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubLogo size={32} />
      </a>
    </SocialContainer>
  );
};

export default Social;
