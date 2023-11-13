/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            pear: "#B7DEBD",
            forest: "#4B6455",
            pebble: "#F1F0ED",
            flamingo: "#FAC0B1",
            mint: "#DBEEDE",
            clay: "#A5B1AA",
            sand: "#E4E1DB",
            melon: "#FCDFD8",
            leather: "#7C3647",
            "digital-black": "#333333",
            "digital-white": "#F1F0ED",
            pop: "#FF00FF",
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [require("daisyui")],
};
