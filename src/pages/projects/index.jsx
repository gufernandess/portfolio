import Card from "../../components/card";
import {
  ProjectsContainer,
  ProjectsContent,
  ProjectsTitle,
  CarouselWrapper,
  PrevButton,
  NextButton,
} from "./styles";
import fetchPinnedRepositories from "../../api/github";
import istudyImage from "../../assets/istudy.png";
import spaceImage from "../../assets/space.png";
import tropaImage from "../../assets/tropa.png";
import vertexCoverImage from "../../assets/vertex_cover.webp";
import avlSearchImage from "../../assets/avl_search.webp";
import lexicalAnalyzerImage from "../../assets/lexical_analyzer.jpg";
import { useEffect, useState } from "react";
import { fadeInFromLeft, fadeInFromRight } from "../../animations/fade";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const MotionProjectsTitle = motion(ProjectsTitle);
const MotionProjectsContent = motion(ProjectsContent);

const Projects = () => {
  const [repositories, setRepositories] = useState([]);
  const { t } = useTranslation();
  const contentRef = useRef(null);

  useEffect(() => {
    fetchPinnedRepositories().then((data) => {
      const repos = data.map((repo) => ({
        title: repo.name,
        description: repo.description,
        image: repo.image,
        stars: repo.stars,
        forks: repo.forks,
        language: repo.language,
        url: repo.homepage ? repo.homepage : repo.url,
      }));
      if (repos.length > 1) {
        repos[1].image = istudyImage;
      }
      if (repos.length > 2) {
        repos[2].image = spaceImage;
      }
      if (repos.length > 0) {
        repos[0].image = tropaImage;
      }
      if (repos.length > 3) {
        repos[3].image = vertexCoverImage;
      }
      if (repos.length > 4) {
        repos[4].image = avlSearchImage;
      }
      if (repos.length > 5) {
        repos[5].image = lexicalAnalyzerImage;
      }

      setRepositories(repos);
    });
  }, []);

  return (
    <ProjectsContainer id="projects">
      <MotionProjectsTitle
        initial="hidden"
        whileInView="visible"
        variants={fadeInFromLeft(0.2)}
      >
        {t("projects.title")}
      </MotionProjectsTitle>
      <CarouselWrapper>
        <PrevButton
          aria-label="Previous project"
          onClick={() => {
            if (contentRef.current) {
              const amount = Math.round(contentRef.current.clientWidth * 0.9);
              contentRef.current.scrollBy({
                left: -amount,
                behavior: "smooth",
              });
            }
          }}
        >
          <CaretLeft size={20} />
        </PrevButton>

        <MotionProjectsContent
          ref={contentRef}
          initial="hidden"
          whileInView="visible"
          variants={fadeInFromRight(0.4)}
        >
          {repositories.map((repo, index) => (
            <Card
              key={index}
              title={repo.title}
              description={repo.description}
              image={repo.image}
              stars={repo.stars}
              forks={repo.forks}
              language={repo.language}
              url={repo.url}
            />
          ))}
        </MotionProjectsContent>

        <NextButton
          aria-label="Next project"
          onClick={() => {
            if (contentRef.current) {
              const amount = Math.round(contentRef.current.clientWidth * 0.9);
              contentRef.current.scrollBy({ left: amount, behavior: "smooth" });
            }
          }}
        >
          <CaretRight size={20} />
        </NextButton>
      </CarouselWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
