import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function LeftSidebar({ data }) {
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'skills', 'projects', 'education', 'certification', 'experience'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!data) return null;

    return (
        <div className="flex flex-col justify-between items-start h-full">
            {/* The primary Container for the Header data and Nav. */}
            <div className="flex flex-col items-start w-full">
                <div className="w-fit">
                    <h1 className="text-5xl font-bold tracking-tight text-slate-200 sm:text-6xl block text-left m-0">
                        <a href="/">{data.name}</a>
                    </h1>
                    <h2 className="mt-2 text-xl font-medium tracking-tight text-slate-200 sm:text-2xl block w-full text-left m-0">
                        AI & Machine Learning Engineer
                    </h2>
                </div>

                <nav className="nav hidden lg:block mt-24 w-full">
                    <ul className="flex flex-col items-start w-full p-0 m-0 list-none">
                        {['About', 'Skills', 'Projects', 'Education', 'Certification', 'Experience'].map((item) => {
                            const id = item.toLowerCase();
                            const isActive = activeSection === id;
                            return (
                                <li key={id} className="mb-6 block p-0 m-0 w-full text-left">
                                    <a
                                        href={`#${id}`}
                                        className={`nav-indicator group relative flex items-center ${isActive ? 'active' : ''}`}
                                        style={{ marginLeft: 0 }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        <div className="absolute left-0 right-auto flex items-center w-8 group-hover:w-16 transition-all data-[active=true]:w-16" data-active={isActive ? "true" : "false"}>
                                            <span className="h-px w-full bg-slate-600 transition-all group-hover:bg-slate-200 data-[active=true]:bg-slate-200 motion-reduce:transition-none"></span>
                                        </div>
                                        {/* The text itself translates based on left-padding entirely divorced from the dash width */}
                                        <span className={`nav-text pl-20 text-xs font-bold uppercase tracking-widest pb-px transition-all ${isActive ? 'text-slate-200' : 'text-slate-500 group-hover:text-slate-200'}`}>{item}</span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>

            <ul className="mt-8 flex items-center justify-start gap-6 p-0 m-0 w-full list-none" aria-label="Social media">
                <li className="shrink-0 text-xs text-slate-400 m-0 p-0">
                    <a href={data.links.find(l => l.platform.toLowerCase() === 'github')?.url}
                        target="_blank" rel="noreferrer" className="block hover:text-slate-200 transition-colors">
                        <span className="sr-only">GitHub</span>
                        <Github size={24} />
                    </a>
                </li>
                <li className="shrink-0 text-xs text-slate-400 m-0 p-0">
                    <a href={data.links.find(l => l.platform.toLowerCase() === 'linkedin')?.url}
                        target="_blank" rel="noreferrer" className="block hover:text-slate-200 transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin size={24} />
                    </a>
                </li>
                <li className="shrink-0 text-xs text-slate-400 m-0 p-0">
                    <a href={`mailto:${data.email}`}
                        target="_blank" rel="noreferrer" className="block hover:text-slate-200 transition-colors">
                        <span className="sr-only">Email</span>
                        <Mail size={24} />
                    </a>
                </li>
            </ul>
        </div>
    );
}
