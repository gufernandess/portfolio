import { Copyright, FooterContainer } from "./styles";
import Social from "../../components/social";

const Footer = () => {
  return (
    <FooterContainer>
      <Social />
      <Copyright>
        &copy; Copyright {new Date().getFullYear()} by Gustavo Fernandes
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
