// Conectar rutas con templates -> #/id/, #/about

// Location es un elemento del navegador
// Eliminamos el # (slice)
// Convertimos a minusculas (toLocaleLowerCase) en caso de que el usuario escriba la ruta en mayusculas (Aunque sea una letra)
// Convertimos el string en un arreglo y eliminamos los / con 'split' -> ['', id || about, '']
const getHash = () =>
  location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/"; // id/about || /

export default getHash;
