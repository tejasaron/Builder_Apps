import React from 'react';

export default function Footer({ data }) {
    if (!data) return null;

    return (
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>
                Design inspiration drawn from Brittany Chiang. Built with React and Vite.
                Styled with custom vanilla CSS referencing Tailwind principles.
            </p>
        </footer>
    );
}
