// Conectar rutas con templates
// Indicamos a que template debemos mandar (renderizar) dependiendo de la ruta enviada
const resolveRoutes = (route) => {
  if (route.length <= 3) {
    let validateRoute = route === "/" ? route : "/:id";
    return validateRoute;
  }

  return `/${route}`; // /about
};

export default resolveRoutes;
