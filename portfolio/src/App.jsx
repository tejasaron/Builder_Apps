import React, { useEffect, useState } from 'react';
import LeftSidebar from './sections/LeftSidebar';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Experience from './sections/Experience';
import Footer from './sections/Footer';
import resumeData from './data/resume.json';
import './index.css';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen relative font-sans text-slate-400 selection:bg-teal-300 selection:text-teal-900">
      {/* Interactive Background Spotlight */}
      <div
        className="mouse-spotlight"
        style={{
          '--mouse-x': `${mousePos.x}px`,
          '--mouse-y': `${mousePos.y}px`
        }}
      />

      {/* 
        Brittany Chiang's core container logic:
        mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0
        Inside: 
        lg:flex lg:justify-between lg:gap-4
      */}
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">

          {/* Left Column (Sticky) */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 z-10 text-left">
            <LeftSidebar data={resumeData.header} />
          </header>

          {/* Right Column (Scrolling) */}
          <main className="pt-24 lg:w-1/2 lg:py-24 z-10 text-left">
            <About summary={resumeData.professional_summary.summary} />

            <hr className="my-16 ml-6 md:ml-10 border-t border-slate-700/50" />
            <Skills data={resumeData.skills} />

            <hr className="my-16 ml-6 md:ml-10 border-t border-slate-700/50" />
            <Projects data={resumeData.projects} />

            <hr className="my-16 ml-6 md:ml-10 border-t border-slate-700/50" />
            <Education data={resumeData.education} />

            <hr className="my-16 ml-6 md:ml-10 border-t border-slate-700/50" />
            <Certifications data={resumeData.certifications} />

            <hr className="my-16 ml-6 md:ml-10 border-t border-slate-700/50" />
            <Experience data={resumeData.work_experience} />

            <hr className="my-16 ml-6 md:ml-10 border-t border-slate-700/50" />
            <Footer data={resumeData.header} />
          </main>

        </div>
      </div>
    </div>
  );
}

export default App;
