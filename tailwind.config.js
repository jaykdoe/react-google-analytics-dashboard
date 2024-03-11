/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
    theme: {
      extend: {},
    },
    daisyui: {
        themes: [
          {
            mytheme: {
            
    "primary": "#38bdf8",
            
    "secondary": "#fb7185",
            
    "accent": "#fbbf24",
            
    "neutral": "#9ca3af",
            
    "base-100": "#111827",
            
    "info": "#67e8f9",
            
    "success": "#5eead4",
            
    "warning": "#fef08a",
            
    "error": "#fb7185",
            },
          },
        ],
      },
      plugins: [
        require('daisyui'),
        require('flowbite/plugin'),
      ],
      //..
  }