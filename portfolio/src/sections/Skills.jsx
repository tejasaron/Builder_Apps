import React from 'react';

export default function Skills({ data }) {
    if (!data) return null;

    return (
        <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 section-marker">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Skills</h2>
            </div>

            <div className="list-container group/list">
                {data.map((skillGroup, index) => (
                    <div key={`skill-${index}`} className="mb-8 card-container group-hover-highlight rounded-md transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400 mb-3 ml-2">{skillGroup.category}</h3>
                        <ul className="flex flex-wrap gap-2 text-slate-400 ml-2">
                            {skillGroup.items.map((skill, i) => (
                                <li key={i} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
