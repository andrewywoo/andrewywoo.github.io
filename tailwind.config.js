const plugin = require("tailwindcss/plugin")

module.exports = {
    purge: [],
    theme: {
        top: {
            '-17': '-17px',
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
