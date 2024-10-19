import { MainContainer, MainSubtitle, MainTitle } from "./styles";

const Main = () => {
    return (
        <MainContainer>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "90%"
            }}>
                <MainTitle>{"<Gustavo Fernandes/>"}</MainTitle>
                <MainSubtitle>Desenvolvedor Fullstack & Estudante de Ciência da Computação</MainSubtitle>
            </div>
        </MainContainer>
    );
};

export default Main;