import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex min-h-screen">
      <Sidebar />
      <main className="ml-48 flex-1 px-4 py-10 overflow-y-auto max-h-screen">
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="mt-20">
          <About />
        </section>
        <section id="skills" className="mt-20">
          <Skills />
        </section>
        <section id="experience" className="mt-20">
          <Experience />
        </section>
        <section id="projects" className="mt-20">
          <Projects />
        </section>
        <section id="contact" className="mt-20">
          <Contacts />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
