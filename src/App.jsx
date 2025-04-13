import './App.css'
import React, {useState} from 'react'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'

function App() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="min-h-screen bg-[url('/images/wallpaper.webp')] bg-cover bg-center bg-fixed">
      <header>
        <h1 className="font-montserrat font-bold text-4xl flex justify-center flex-wrap">My Portfolio</h1>
      </header>

      <nav className="appnav">
        <button onClick={() => setActiveSection("about")} className='btn'>About Me</button>
        <button onClick={() => setActiveSection("education")} className='btn'>Education</button>
        <button onClick={() => setActiveSection("experience")} className='btn'>Experience</button>
        <button onClick={() => setActiveSection("skills")} className='btn'>Skills</button>
        <button onClick={() => setActiveSection("contact")} className='btn'>Contact</button>
      </nav>

      <main className="content">
        {activeSection === "about" && <AboutMe />}
        {activeSection === "education" && <Education />}
        {activeSection === "experience" && <Experience />}
        {activeSection === "skills" && <Skills />}
        {activeSection === "contact" && <Contact />}
      </main>
    </div>
  );
}

export default App
