import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function LeftSidebar({ data, showHeart }) {
    const [activeSection, setActiveSection] = useState('about');
    const [likes, setLikes] = useState(() => {
        const saved = localStorage.getItem('portfolio-likes');
        return saved ? parseInt(saved) : 124; // Initial "vanity" count
    });
    const [isBlinking, setIsBlinking] = useState(false);
    const blinkTimeoutRef = useRef(null);

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

    useEffect(() => {
        if (showHeart) {
            handleLike(); // Trigger the blink effect automatically when it appears
        }
    }, [showHeart]);

    const handleLike = () => {
        if (isBlinking) return;
        // Only increment the count if it's a manual click or first appearance
        // But the user said "it should blink after it appears", 
        // usually that implies a visual cue without necessarily double-counting.
        // I'll keep the actual increment logic inside a manual guard if needed, 
        // but for now, let's just trigger the animation.

        setIsBlinking(true);
        if (blinkTimeoutRef.current) clearTimeout(blinkTimeoutRef.current);
        blinkTimeoutRef.current = setTimeout(() => {
            setIsBlinking(false);
        }, 1000);
    };

    const handleManualLike = () => {
        const newLikes = likes + 1;
        setLikes(newLikes);
        localStorage.setItem('portfolio-likes', newLikes.toString());
        handleLike();
    };

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
                    <div className="mt-6 flex flex-wrap gap-4 items-center">
                        <div className="group/badge relative">
                            <img
                                src="/images/ibm_badge.png"
                                alt="IBM Badge"
                                className="h-12 w-auto opacity-80 transition-all group-hover/badge:opacity-100 group-hover/badge:scale-110"
                                title="IBM Certified"
                            />
                        </div>
                        <div className="group/badge relative">
                            <img
                                src="/images/aws_badge.png"
                                alt="AWS Training Badge"
                                className="h-12 w-auto opacity-80 transition-all group-hover/badge:opacity-100 group-hover/badge:scale-110"
                                title="AWS Certified"
                            />
                        </div>
                    </div>
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

            <div className="flex items-center gap-6 mt-8">
                <ul className="flex items-center justify-start gap-6 p-0 m-0 list-none" aria-label="Social media">
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

                <div className={`flex items-center transition-all duration-1000 ${showHeart ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible -translate-x-4 pointer-events-none'}`}>
                    <div className="h-8 w-px bg-slate-700/50 mx-4" />

                    <button
                        onClick={handleManualLike}
                        className="group/heart flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors focus:outline-none"
                        aria-label="Like this portfolio"
                    >
                        <Heart
                            size={22}
                            className={`transition-colors ${isBlinking ? 'animate-blink-red' : 'group-hover/heart:text-rose-400'}`}
                            fill={isBlinking ? "currentColor" : "transparent"}
                        />
                        <span className="font-mono text-sm font-bold">{likes}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
