import { AnimationCard, CardContainer, CardDescription, CardForks, CardLanguage, CardStars, CardTitle } from "./styles";
import { Binary, GitFork, LinkSimple, Star } from "@phosphor-icons/react";

const Card = ({ title, description, stars, forks, language, url }) => {
    const handleCardClick = () => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <AnimationCard>
            <CardContainer onClick={handleCardClick}>
                <div style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    flexDirection: "column",
                    padding: "2rem 0",
                    gap: "1rem",
                    height: "50%",
                    width: "90%"
                }}>
                    <CardTitle><LinkSimple size={16} />{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    flexDirection: "row",
                    paddingRight: "2rem",
                    gap: "2rem",
                    height: "50%",
                    width: "90%",
                }}>
                    <CardStars><Star size={16} />{stars}</CardStars>
                    <CardForks><GitFork size={16} />{forks}</CardForks>
                    <CardLanguage><Binary size={16} />{language}</CardLanguage>
                </div>
            </CardContainer>
        </AnimationCard>
    );
};

export default Card;
