import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home';

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
    <div>
      <Header onNavigate={handleScrollToSection} />

      <main>
        <section id="home" className="section"><Home /></section>
        <section id="beneficios" className="section"></section>
        <section id="depoimentos" className="section"></section>
        <section id="faq" className="section"></section>
        <section id="sobre" className="section"></section>
      </main>
    </div>
  );
}

export default App;
