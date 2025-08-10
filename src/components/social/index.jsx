import { SocialContainer } from "./styles";
import {
  GithubLogo,
  LinkedinLogo,
  Mailbox,
  ReadCvLogo,
} from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const Social = () => {
  const { t, i18n } = useTranslation();

  const resumeUrls = {
    pt: import.meta.env.VITE_RESUME_URL_PT,
    en: import.meta.env.VITE_RESUME_URL_EN,
  };

  const resumeUrl = resumeUrls[i18n.language] || resumeUrls.pt;

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

      <a
        href={resumeUrl}
        title={t("footer.resume.text")}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ReadCvLogo size={32} />
      </a>
    </SocialContainer>
  );
};

export default Social;
