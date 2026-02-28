import React from 'react';

export default function Certifications({ data }) {
    if (!data) return null;

    return (
        <section id="certification" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 section-marker">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Certification</h2>
            </div>

            <div className="list-container group/list">
                {data.map((cert, index) => (
                    <div key={`cert-${index}`} className="card-container group-hover-highlight mb-8 sm:grid sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">

                        <header className="z-10 mb-2 mt-1 gap-4 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                            {cert.issueDate}
                        </header>

                        <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200">
                                <span className="font-semibold">{cert.name}</span>
                            </h3>
                            <p className="mt-1 text-sm text-slate-400">
                                {cert.issuer} {cert.credentialType ? `· ${cert.credentialType}` : ''}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}
