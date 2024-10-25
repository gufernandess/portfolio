import { AboutContainer, AboutContent, AboutTitle, LinkStyle, TextContainer } from "./styles";
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
                    Aprendi muito sobre programação em um curso técnico que fiz no ensino médio, e isso me levou a graduação
                    que estou fazendo atualmente. Em ambos os casos, tive a oportunidade de realizar grandes projetos
                    e continuar aprendendo cada vez mais.
                    <br /><br />
                    Até agora já trabalhei como desenvolvedor backend Java na <LinkStyle href="https://gera3sistemas.com.br/"
                    target="_blank" rel="noreferrer"> Gera3 Sistemas</LinkStyle> e fui bolsista de iniciação acadêmica na
                    célula de desenvolvimento de software do <LinkStyle href="https://inove.quixada.ufc.br/" target="_blank"
                    rel="noreferrer">Núcleo de Inovação e Empreendedorismo</LinkStyle>, aprendendo muito sobre desenvolvimento
                    frontend. Além disso, ampliei minhas habilidades com frontend através de projetos pessoais e pequenos freelas.
                    <br /><br />
                     Atualmente estou estagiando como desenvolvedor backend na <LinkStyle href="https://jit.technology/"
                     target="_blank" rel="noreferrer">JIT Technology</LinkStyle>, utilizando tecnologias como Node e
                     MongoDB.
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
