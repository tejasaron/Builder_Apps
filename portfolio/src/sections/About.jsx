import React from 'react';

export default function About({ summary }) {
    if (!summary) return null;

    return (
        <section id="about" className="scroll-mt-16 lg:scroll-mt-24 section-marker">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>

            <blockquote className="mt-1 lg:mt-2 mb-20 border-l-2 border-teal-300/30 pl-6 md:pl-10">
                <p className="text-lg italic font-medium leading-relaxed text-slate-300">
                    "I propose to consider the question can machines think?"
                </p>
                <footer className="mt-3 text-sm tracking-widest text-teal-200/50 uppercase">— Alan Turing</footer>
            </blockquote>

            <div className="pl-6 md:pl-10">
                <p className="mb-6 leading-relaxed">
                    {summary}
                </p>
                <p className="mb-4 leading-relaxed text-slate-400">
                    I focus on bridging the gap between theoretical data science and production-ready applications. Whether it's predicting customer churn, building recommendation engines, or mapping spatial data for autonomous driving apps.
                </p>
            </div>
        </section>
    );
}
