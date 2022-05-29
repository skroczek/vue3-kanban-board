module.exports = {
    content: [
        "./public/index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    safelist: [
        {
            pattern: /grid-cols-\d+/,
        },
    ],
}