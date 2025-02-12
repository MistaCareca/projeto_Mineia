import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Beneficios from './components/Beneficios/Beneficios';
import Depoimentos from './components/Depoimentos/Depoimentos';
import Faq from './components/Faq/Faq';
import Sobre from './components/Sobre/Sobre';


function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleScrollToSection = (sectionId) => {
      setActiveSection(sectionId);
      const section = document.getElementById(sectionId);
      if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
      }
  };

  return (
      <>
          <Header onNavigate={handleScrollToSection} activeSection={activeSection} />
          <main>
              <section id="home" className="section"><Home /></section>
              <section id="beneficios" className="section"><Beneficios /></section>
              <section id="depoimentos" className="section"><Depoimentos /></section>
              <section id="faq" className="section"><Faq /></section>
              <section id="sobre" className="section"><Sobre /></section>
          </main>
      </>
  );
}


export default App;
