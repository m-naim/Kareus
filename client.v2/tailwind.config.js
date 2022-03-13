module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend: {
      keyframes: {
        moveup: {
          '0%': {
            transform: 'translateY(0px)'
           },
           '35%': {
            transform: 'translateY(-50px)'
           },
          '70%': {
            transform: 'translateY(100px)'
           },

            '100%': {
              transform: 'translateY(0px)'
            },

        },
        movedown: {
          '0%': {
            transform: 'translateY(0px)'
           },
           '35%': {
            transform: 'translateY(-50px)'
           },
          '70%': {
            transform: 'translateY(100px)'
           },

            '100%': {
              transform: 'translateY(0px)'
            },

        }
    },
    animation: {
        moveup: 'moveup 3s ease-in-out infinite',
        movedown: 'movedown 3s ease-in-out infinite',
    }
    },
  },
  plugins: [],
}
