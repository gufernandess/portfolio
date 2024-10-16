import { InitialPageContainer, InitialPageSubtitle, InitialPageTitle } from "./styles";

const InitialPage = () => {
    return (
        <InitialPageContainer>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "90%"
            }}>
                <InitialPageTitle>{"<Gustavo Fernandes/>"}</InitialPageTitle>
                <InitialPageSubtitle>Fullstack developer & computer science student</InitialPageSubtitle>
            </div>
        </InitialPageContainer>
    );
};

export default InitialPage;