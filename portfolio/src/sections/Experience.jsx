import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Experience({ data }) {
    if (!data || data.length === 0) return null;

    return (
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 section-marker">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
            </div>

            <div className="list-container group/list">
                {data.map((job, index) => (
                    <div key={index} className="card-container group-hover-highlight mb-12 sm:grid sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">

                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                            {job.startDate} — {job.endDate}
                        </header>

                        <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200 flex items-center group/title transition-colors">
                                <span className="font-semibold text-base">{job.title}</span>
                                <span className="mx-2 text-slate-500 font-normal">{'·'}</span>
                                <span>{job.company}</span>
                                <ArrowUpRight
                                    size={16}
                                    className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover/title:opacity-100 group-hover/title:translate-y-0 group-hover/title:translate-x-0 transition-all text-teal-accent"
                                />
                            </h3>

                            <ul className="mt-4 text-sm leading-normal text-slate-400 space-y-2">
                                {job.responsibilities.map((resp, i) => (
                                    <li key={i}>{resp}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}
