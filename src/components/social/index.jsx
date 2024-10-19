import { SocialContainer } from "./styles";
import { GithubLogo, LinkedinLogo, Mailbox } from "@phosphor-icons/react";

const Social = () => {
    return (
        <SocialContainer>
            <a href="https://www.linkedin.com/in/gustafernandes/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <LinkedinLogo size={32} />
            </a>
            <a href="mailto:gustavofernandescc@gmail.com" title="E-mail" target="_blank" rel="noopener noreferrer">
                <Mailbox size={32} />
            </a>
            <a href="https://github.com/gufernandess" title="GitHub" target="_blank" rel="noopener noreferrer">
                <GithubLogo size={32} />
            </a>
        </SocialContainer>
    );
};

export default Social;