import Header from './pages/header'
import Main from './pages/main'
import About from './pages/about'
import Projects from './pages/projects'
import Footer from './pages/footer'
import { MenuProvider } from './context/menuContext'

function App() {

  return (
    <MenuProvider>
      <Header />
      <Main />
      <About />
      <Projects />
      <Footer />
    </MenuProvider>
  )
}

export default App
