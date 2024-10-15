import { LanguagesText, ScrollButton, ScrollContainer, TranslateButtonContainer } from './styles';
import { useState } from 'react';

const TranslateButton = () => {
    const [isEnglish, setIsEnglish] = useState(true);

    const toggleLanguage = () => {
        setIsEnglish(prevLang => !prevLang);
    };

    return (
        <TranslateButtonContainer onClick={toggleLanguage}>
            <LanguagesText>EN</LanguagesText>
            <ScrollContainer>
                <ScrollButton isEnglish={isEnglish} />
            </ScrollContainer>
            <LanguagesText>PT</LanguagesText>
        </TranslateButtonContainer>
    );
};

export default TranslateButton;
