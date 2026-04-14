/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: [
        "./App.{js,jsx,ts,tsx}",         // optional but safe
        "./app/**/*.{js,jsx,ts,tsx}",    // REQUIRED (you already have this)
        "./components/**/*.{js,jsx,ts,tsx}", // for future components folder
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {},
    },
    plugins: [],
}