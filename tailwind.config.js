module.exports = {
    purge: ["./src/**/*.js", "./src/**/*.jsx"],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1140px",
        },
        extend: {
            spacing: {
                "72": "18rem",
                "84": "21rem",
                "96": "24rem",
            },
        },
    },
    variants: {},
    plugins: [],
}
