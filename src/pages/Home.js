import getData from "../utils/getData";

const Home = async () => {
  const characters = await getData();

  const view = `
   <div class="Characters">
   ${characters.results
     .map(
       (character) => `
      <article class="Character-item">
         <a href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
         </a>
      </article>
   `
     ) // join sive para indicar la forma en la que se separa el arreglo (En este caso para quitarle las , y no se muestre en el HTML)
     .join("")}
   </div>
   `;

  return view;
};

export default Home;
