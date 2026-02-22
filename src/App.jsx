import Header from "./pages/header";
import Main from "./pages/main";
import About from "./pages/about";
import Career from "./pages/career";
import Projects from "./pages/projects";
import Footer from "./pages/footer";
import { MenuProvider } from "./context/menuContext";

function App() {
  return (
    <MenuProvider>
      <Header />
      <Main />
      <About />
      <Career />
      <Projects />
      <Footer />
    </MenuProvider>
  );
}

export default App;
