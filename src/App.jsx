import { Routes, Route } from 'react-router-dom'

import Hero from './Pages/Hero.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Projects from './Pages/Projects.jsx'
import Skills from './Pages/Skills.jsx'
import NavBar from './Components/navBar.jsx'
import Footer from './Pages/Footer.jsx'


function App() {

  return (
    <>
    <NavBar />

    <Routes>

      <Route path='/'element={<Hero />} />
      <Route path='/about'element={<About />} />
      <Route path='/projects'element={<Projects />} />
      <Route path='/skills'element={<Skills />} />
      <Route path='/contact'element={<Contact />} />
  
    </Routes>

    <Footer />
    </>
   
  );
}

export default App;
