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

const MotionAboutTitle = motion(AboutTitle);
const MotionAboutContent = motion(AboutContent);

const About = () => {
  return (
    <AboutContainer>
      <MotionAboutTitle
        initial="hidden"
        whileInView="visible"
        variants={fadeInFromLeft(0.2)}
      >
        Sobre mim
      </MotionAboutTitle>

      <TextContainer>
        <MotionAboutContent
          initial="hidden"
          whileInView="visible"
          variants={fadeInFromLeft(0.4)}
        >
          Olá! Meu nome é Gustavo Fernandes, sou um estudante de ciência da
          computação e engenheiro de software que pretende, recursivamente,
          aprender e evoluir cada vez mais.
          <br />
          <br />
          Apesar das minhas principais experiências consistirem em
          desenvolvimento web de maneira geral, como um bom generalista eu nunca
          largo mão de aprender sobre qualquer coisa. Seja passando por
          conceitos como aprendizado de máquina ou programação funcional ou
          participando de hackathons e competições de programação competitiva,
          estudar sobre essa área sempre me cativa.
          <br />
          <br />
          <LinkStyle>
            Desta forma, meu objetivo aqui é unir a ciência e a arte de
            programar para desenvolver soluções em forma de software e assim
            agregar valor a vida das pessoas. Além de obviamente me divertir no
            processo.
          </LinkStyle>
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
