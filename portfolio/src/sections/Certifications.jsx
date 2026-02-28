import React from 'react';

export default function Certifications({ data }) {
    if (!data) return null;

    return (
        <section id="certification" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 section-marker">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Certification</h2>
            </div>

            <div className="list-container group/list">
                {data.map((cert, index) => {
                    const certLinkMap = {
                        "AWS Cloud Quest: Cloud Practitioner": "https://www.credly.com/badges/51a460b0-3924-45a4-a95c-2b67664594d1/linked_in_profile",
                        "AWS Cloud Quest: Machine Learning": "https://www.credly.com/badges/cb2435ca-80a9-4bd6-b8e7-6c3dd29d21fc/linked_in_profile",
                        "Data Visualization and Dashboards with Excel and Cognos": "https://www.coursera.org/account/accomplishments/verify/EPK61MI0WHQF",
                        "Excel Basics for Data Analysis": "https://www.coursera.org/account/accomplishments/records/PQR7DNJFKXWD",
                        "Open Source Tools for Data Science": "https://www.youracclaim.com/badges/d6519291-d812-42e7-b62d-440fdfa23aad/linked_in_profile"
                    };
                    const certLink = certLinkMap[cert.name];

                    return (
                        <div key={`cert-${index}`} className="card-container group-hover-highlight mb-8 sm:grid sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 relative group">

                            {/* Whole-card link overlay */}
                            {certLink && (
                                <a
                                    href={certLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="absolute -inset-x-4 -inset-y-4 z-20 hidden rounded md:-inset-x-6 md:block lg:block"
                                    aria-label={cert.name}
                                />
                            )}

                            <header className="z-10 mb-2 mt-1 gap-4 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                                {cert.issueDate}
                            </header>

                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200">
                                    {certLink ? (
                                        <a href={certLink} target="_blank" rel="noreferrer" className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                                            <span className="font-semibold">{cert.name}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                                        </a>
                                    ) : (
                                        <span className="font-semibold">{cert.name}</span>
                                    )}
                                </h3>
                                <p className="mt-1 text-sm text-slate-400">
                                    {cert.issuer} {cert.credentialType ? `· ${cert.credentialType}` : ''}
                                </p>
                            </div>

                        </div>
                    );
                })}
            </div>
        </section>
    );
}
