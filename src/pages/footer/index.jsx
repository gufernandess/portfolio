import { Copyright, FooterContainer } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>
        &copy; Copyright {new Date().getFullYear()} by Gustavo Fernandes
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
