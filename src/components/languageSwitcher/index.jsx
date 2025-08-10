import { SwitcherContainer, SwitchWrapper, SwitchButton } from "./styles";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleToggle = () => {
    const newLang = i18n.language === "en" ? "pt" : "en";
    i18n.changeLanguage(newLang);
  };

  const isToggled = i18n.language === "en";

  return (
    <SwitcherContainer>
      <SwitchWrapper onClick={handleToggle}>
        <SwitchButton active={isToggled}>
          {isToggled ? "EN" : "PT"}
        </SwitchButton>
      </SwitchWrapper>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;
