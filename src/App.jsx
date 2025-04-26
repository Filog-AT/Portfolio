import './App.css'
import React, {useState} from 'react'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'

function App() {
  const [activeButton, setActiveButton] = useState("about");

  return (
<div className="min-h-screen bg-[url('/images/wallpaper1.jpg')] bg-cover bg-center bg-fixed brightness-100">
      <header>
        <h1 className="font-montserrat font-bold text-4xl flex justify-center flex-wrap text-amber-500">My Portfolio</h1>
      </header>

      <nav className="appnav flex justify-center gap-4 my-4">
        <button 
          onClick={() => setActiveButton("about")} 
          className={`btn transition-transform duration-300 ${activeButton === "about" ? "scale-100" : "scale-75"}`}
        >
          About Me
        </button>
        <button 
          onClick={() => setActiveButton("education")} 
          className={`btn transition-transform duration-300 ${activeButton === "education" ? "scale-100" : "scale-75"}`}
        >
          Education
        </button>
        <button 
          onClick={() => setActiveButton("experience")} 
          className={`btn transition-transform duration-300 ${activeButton === "experience" ? "scale-100" : "scale-75"}`}
        >
          Experience
        </button>
        <button 
          onClick={() => setActiveButton("skills")} 
          className={`btn transition-transform duration-300 ${activeButton === "skills" ? "scale-100" : "scale-75"}`}
        >
          Skills
        </button>
        <button 
          onClick={() => setActiveButton("contact")} 
          className={`btn transition-transform duration-300 ${activeButton === "contact" ? "scale-100" : "scale-75"}`}
        >
          Contact
        </button>
      </nav>

      <main className="content">
        {activeButton === "about" && <AboutMe />}
        {activeButton === "education" && <Education />}
        {activeButton === "experience" && <Experience />}
        {activeButton === "skills" && <Skills />}
        {activeButton === "contact" && <Contact />}
      </main>
    </div>
  );
}

export default App
