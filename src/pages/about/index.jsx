import {
  AboutContainer,
  AboutContent,
  AboutTitle,
  LinkStyle,
  TextContainer,
} from "./styles";
import Terminal from "../../components/terminal";
import { fadeInFromLeft, fadeInFromRight } from "../../animations/fade";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import React from "react";

const MotionAboutTitle = motion(AboutTitle);
const MotionAboutContent = motion(AboutContent);

const About = () => {
  const { t } = useTranslation();
  const aboutContent = t("about", { returnObjects: true });

  return (
    <AboutContainer id="about">
      <MotionAboutTitle
        initial="hidden"
        whileInView="visible"
        variants={fadeInFromLeft(0.2)}
      >
        {aboutContent.title}
      </MotionAboutTitle>

      <TextContainer>
        <MotionAboutContent
          initial="hidden"
          whileInView="visible"
          variants={fadeInFromLeft(0.4)}
        >
          {aboutContent.paragraphs.map((paragraph, index) => {
            const isLastParagraph =
              index === aboutContent.paragraphs.length - 1;

            if (isLastParagraph) {
              return <LinkStyle key={index}>{paragraph}</LinkStyle>;
            }

            return (
              <React.Fragment key={index}>
                {paragraph}
                <br />
                <br />
              </React.Fragment>
            );
          })}
        </MotionAboutContent>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInFromRight(0.4)}
        >
          <Terminal />
        </motion.div>
      </TextContainer>
    </AboutContainer>
  );
};

export default About;
