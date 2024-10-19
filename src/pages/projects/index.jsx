import Card from "../../components/card";
import { ProjectsContainer, ProjectsContent, ProjectsTitle } from "./styles";
import fetchPinnedRepositories from "../../api/github";
import { useEffect, useState, useRef } from "react";

const Projects = () => {
    const [repositories, setRepositories] = useState([]);
    
    const titleRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === titleRef.current) {
                        entry.target.classList.add('slide-in-left');
                    }
                }
            });
        }, options);

        if (titleRef.current) observer.observe(titleRef.current);

        return () => {
            if (titleRef.current) observer.unobserve(titleRef.current);
        };
    }, []);

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
            <ProjectsTitle ref={titleRef}>Projetos</ProjectsTitle>
            <ProjectsContent>
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
            </ProjectsContent>
        </ProjectsContainer>
    );
};

export default Projects;