import { MainContainer, MainSubtitle, MainTitle } from "./styles";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();

  return (
    <MainContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "90%",
        }}
      >
        <MainTitle>{"<Gustavo Fernandes/>"}</MainTitle>
        <MainSubtitle>{t("hero.subtitle")}</MainSubtitle>
      </div>
    </MainContainer>
  );
};

export default Main;
