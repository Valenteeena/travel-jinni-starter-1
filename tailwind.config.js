module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        screens: {
            phone: '300px',
            tablet: '640px',
            laptop: '1024px',
            desktop: '1280px'
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
