module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend: {
      keyframes: {
        moveup: {
          '0%': {
            content: 'hello',
           },
          '100%': {
              content: 'world',
            },

        },
        backgroundImage: {
          'hero-pattern': "url('https://media.istockphoto.com/vectors/vector-finance-pattern-finance-seamless-background-vector-id943758512')",
          'start': "url('https://mdn.mozillademos.org/files/11983/starsolid.gif')"
        }
 
    },
    animation: {
        moveup: 'moveup 3s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [],
}
