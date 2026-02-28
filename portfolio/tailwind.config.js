/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                slate: {
                    900: '#0f172a',
                    800: '#1e293b',
                    400: '#94a3b8',
                    200: '#e2e8f0',
                },
                teal: {
                    300: '#5eead4',
                    400: '#2dd4bf',
                    accent: '#5eead4',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
