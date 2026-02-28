import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Projects({ data }) {
    if (!data || data.length === 0) return null;

    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 section-marker">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
            </div>

            <div className="list-container group/list">
                {data.map((project, index) => {
                    // Extract technologies from the description (everything after "Technologies: ")
                    let cleanDesc = project.description;
                    let technologies = [];

                    if (cleanDesc.includes('Technologies:')) {
                        const parts = cleanDesc.split('Technologies:');
                        cleanDesc = parts[0].trim();
                        const techString = parts[1].replace('.', '').trim(); // Remove trailing period
                        technologies = techString.split(',').map(t => t.trim());
                    }

                    const linkMap = {
                        "Customer Churn Prediction & Explainability System": "https://lnkd.in/gxVWuBsb",
                        "Dynamic Pricing Optimization Engine": "https://lnkd.in/gd67JJfj",
                        "Energy Consumption Forecasting System": "https://lnkd.in/gnRbVK5T",
                        "Gold Price Anomaly Detection System": "https://lnkd.in/gtXVRvwi",
                        "Content-Based Movie Recommendation System": "https://lnkd.in/gGzwANZJ",
                        "Titanic Survival Prediction System": "https://lnkd.in/gAPTkd3Z",
                        "House Price Prediction with Stacked Ensembles": "https://lnkd.in/gAPTkd3Z",
                        "OCR_SANSKRIT": "https://github.com/tejasaron/OCR_SANSKRIT"
                    };
                    const projectLink = linkMap[project.name];

                    return (
                        <div key={index} className="card-container group-hover-highlight mb-12 sm:grid sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 lg:cursor-pointer relative group">

                            {/* Whole-card link overlay */}
                            {projectLink && (
                                <a
                                    href={projectLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="absolute -inset-x-4 -inset-y-4 z-20 hidden rounded md:-inset-x-6 md:block lg:block"
                                    aria-label={project.name}
                                />
                            )}

                            <div className="z-10 mt-1 mb-4 sm:col-span-2 sm:mb-0">
                                <div className="relative rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:translate-y-1 bg-slate-800/50 aspect-video overflow-hidden flex items-center justify-center">
                                    <span className="absolute inset-0 flex items-center justify-center font-mono text-xs text-slate-500 uppercase">SYS</span>
                                    {(() => {
                                        const nameMap = {
                                            "Customer Churn Prediction & Explainability System": "customerchurn.jpg",
                                            "Dynamic Pricing Optimization Engine": "dynamicpricing.jpg",
                                            "Energy Consumption Forecasting System": "energydemand.jpg",
                                            "Gold Price Anomaly Detection System": "golprice.jpg",
                                            "Content-Based Movie Recommendation System": "recommender.jpg",
                                            "Titanic Survival Prediction System": "titanic.jpg",
                                            "House Price Prediction with Stacked Ensembles": "house_price.jpg",
                                            "OCR_SANSKRIT": "sanskritt_ocr.jpg"
                                        };
                                        const imageName = nameMap[project.name];
                                        return imageName ? (
                                            <img
                                                src={`/images/${imageName}`}
                                                alt={project.name}
                                                className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-110"
                                                onError={(e) => { e.target.style.display = 'none'; }}
                                            />
                                        ) : null;
                                    })()}
                                </div>
                            </div>

                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200 flex items-center group/title transition-colors">
                                    {projectLink ? (
                                        <a href={projectLink} target="_blank" rel="noreferrer" className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                                            <span className="font-semibold">{project.name}</span>
                                            <ArrowUpRight
                                                size={16}
                                                className="ml-1 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none text-slate-200 group-hover/link:text-teal-300"
                                            />
                                        </a>
                                    ) : (
                                        <span className="font-semibold text-base">{project.name}</span>
                                    )}
                                </h3>

                                <p className="mt-2 text-sm leading-normal text-slate-400">
                                    {cleanDesc}
                                </p>

                                {technologies.length > 0 && (
                                    <ul className="mt-4 flex flex-wrap gap-2">
                                        {technologies.map((tech, i) => (
                                            <li key={i} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                        </div>
                    );
                })}
            </div>
        </section>
    );
}
