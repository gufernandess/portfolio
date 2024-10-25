import { AboutContainer, AboutContent, AboutTitle, TextContainer } from "./styles";
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
                    Olá! Me chamo Gustavo Fernandes e gosto de resolver problemas através da programação para passar o tempo.
                    Foi isso que me trouxe até aqui a propósito.
                    <br /><br />
                    Aprendi muito sobre programação em um curso técnico que fiz no ensino médio,
                    e isso me levou a graduação que estou fazendo atualmente.
                    Em ambos os casos, tive a oportunidade de realizar grandes projetos
                    e continuar aprendendo cada vez mais.
                    <br /><br />
                    Atualmente estou trabalhando com desenvolvimento backend com Node e MongoDB,
                    porém estou sempre disposto a aprender qualquer coisa que envolva computação
                    (e outras coisas também).
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
