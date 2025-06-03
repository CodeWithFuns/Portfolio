import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="font-sans bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex min-h-screen">
      {/* Sidebar: hidden on small screens, toggle with sidebarOpen */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <main
        className={`
          flex-1 px-4 py-10 overflow-y-auto max-h-screen
          transition-margin duration-300 ease-in-out
          ${sidebarOpen ? 'ml-48' : 'ml-0'}
          md:ml-48
          lg:ml-40
          xl:ml-36
        `}
      >
        {/* Hamburger for mobile - only visible on small screens */}
        <button
            className="md:hidden fixed top-4 left-4 z-50 text-gray-900 dark:text-white focus:outline-none"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle Sidebar"
          >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

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
