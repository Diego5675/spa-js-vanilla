// Archivo de configuracion de nuestro proyecto
// Path -> Nos permite acceder hacia donde estamos dentro de las carpetas (Ya es de node)
const path = require("path");

// Archivo necesario para trabajar con HTML -> Este paquete lo instalamos
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Referencia a paquete instalado -> Paquete para trabajar con CSS
const CopyWebpackPlugin = require("copy-webpack-plugin");

// Configuracion
module.exports = {
  entry: "./src/index.js", // Punto de entrada (Donde vive nuestro codigo inicial y parte el desarrollo que vayamos a crear)

  // Output -> Es donde vamos a poner el proyecto ya estructurado y compilado listo para mandarse a produccion
  output: {
    path: path.resolve(__dirname, "dist"), // Donde lo voy a poner -> 'resolve' nos ayuda a saber donde se encuentra la carpeta. Se crea la carpeta 'dist' dentro de la carpeta
    filename: "main.js", //   Nombre del archivo que se genera
  },

  //   Extensiones que va a utilizar nuestro proyecto
  resolve: {
    extensions: [".js"],
  },

  //   Modulo con reglas necesarias que vamos a utilizar
  module: {
    //   Regla de Babel -> Prepara nuestro proyecto para que sea compatible con todos los navegadores
    rules: [
      // Estructura de Babel
      {
        test: /\.js?$/, //   Nos permite identificar los archivos segun se encuentren dentro de nuestro entorno (Regex)
        exclude: /node_modules/,
        // Utilizar una configuracion establecida (Loader)
        use: {
          loader: "babel-loader", // Este paquete lo instalamos
        },
      },
    ],
  },

  //   Plugins a utilizar
  plugins: [
    new HtmlWebpackPlugin({
      inject: true, // Como voy a inyectar un valor a un archivo HTML
      template: "./public/index.html", //  Donde se encuentra nuestro template
      filename: "./index.html", // Nombre que tendra el archivo
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/styles/styles.css",
          to: "",
        },
      ],
    }),
  ],
};
