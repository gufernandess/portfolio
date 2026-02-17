import {
  AnimationCard,
  CardContainer,
  CardDescription,
  CardForks,
  CardLanguage,
  CardStars,
  CardTitle,
  ImageContainer,
  RightContent,
} from "./styles";
import { Binary, GitFork, LinkSimple, Star } from "@phosphor-icons/react";

const Card = ({ title, description, stars, forks, language, url, image }) => {
  const handleCardClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimationCard>
      <CardContainer onClick={handleCardClick}>
        <ImageContainer>
          <img
            src={image || "/card-placeholder.svg"}
            alt={title}
            loading="lazy"
          />
        </ImageContainer>
        <RightContent>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <CardTitle>
              <LinkSimple size={16} />
              {title}
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              flexDirection: "row",
              gap: "2rem",
            }}
          >
            {stars != null && (
              <CardStars>
                <Star size={16} />
                {stars}
              </CardStars>
            )}

            {forks != null && (
              <CardForks>
                <GitFork size={16} />
                {forks}
              </CardForks>
            )}

            {language && (
              <CardLanguage>
                <Binary size={16} />
                {language}
              </CardLanguage>
            )}
          </div>
        </RightContent>
      </CardContainer>
    </AnimationCard>
  );
};

export default Card;
