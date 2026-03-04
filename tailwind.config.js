/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    blue: '#1F4E78',
                },
                accent: {
                    teal: '#0DA5B8',
                },
                dark: {
                    bg: '#0F1419',
                },
                light: {
                    text: '#FFFFFF',
                    muted: '#F0F0F0',
                },
                muted: {
                    gray: '#6B7280',
                },
                success: {
                    green: '#10B981',
                }
            },
            fontFamily: {
                display: ['Poppins', 'Space Grotesk', 'sans-serif'],
                body: ['Inter', 'Outfit', 'sans-serif'],
                accent: ['"Playfair Display"', 'serif'],
            }
        },
    },
    plugins: [],
}
