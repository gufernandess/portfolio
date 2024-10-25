import Card from "../../components/card";
import { ProjectsContainer, ProjectsContent, ProjectsTitle } from "./styles";
import fetchPinnedRepositories from "../../api/github";
import { useEffect, useState } from "react";
import { fadeInFromLeft, fadeInFromRight } from "../../animations/fade";
import { motion } from "framer-motion";

const MotionProjectsTitle = motion(ProjectsTitle);
const MotionProjectsContent = motion(ProjectsContent);

const Projects = () => {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetchPinnedRepositories().then(data => {
            const repos = data.map(repo => ({
                title: repo.name,
                description: repo.description,
                stars: repo.stars,
                forks: repo.forks,
                language: repo.language,
                url: repo.homepage ? repo.homepage : repo.url
            }));
            setRepositories(repos);
        });
    }, []);

    return (
        <ProjectsContainer>
            <MotionProjectsTitle
                initial="hidden"
                whileInView="visible"
                variants={fadeInFromLeft(0.2)}
            >
                Projetos
            </MotionProjectsTitle>
            <MotionProjectsContent
                initial="hidden"
                whileInView="visible"
                variants={fadeInFromRight(0.4)}
            >
                {repositories.map((repo, index) => (
                    <Card
                        key={index}
                        title={repo.title}
                        description={repo.description}
                        stars={repo.stars}
                        forks={repo.forks}
                        language={repo.language}
                        url={repo.url}
                    />
                ))}
            </MotionProjectsContent>
        </ProjectsContainer>
    );
};

export default Projects;