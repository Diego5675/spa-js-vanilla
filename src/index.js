import router from "./routes";

// Saber si la carga de la pagina ha sucedido (loader) -> Rocordemos que nuestra archivos se cargan una sola vez (SPA)
// Saber si los archivos estan listos y se han cargado dentro del navegador (window) vamos a ejecutar el siguiente codigo
window.addEventListener("load", router);

// Escuchar las rutas de nuestro navegador
window.addEventListener("hashchange", router);
