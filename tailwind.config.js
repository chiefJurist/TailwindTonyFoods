/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/index.html", "public/app.js"],
  theme: {
    extend: {
      //adding additional styles
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      },
      fontFamily: {
        //you can name your font any name of your choice. In our case we are going with "body"
        //you can add other fonts as well to make up your font faimily. In our case we are using only Nunito
        body: ['Nunito']
      }
      //end of additional style
    },
  },
  plugins: [],
}

