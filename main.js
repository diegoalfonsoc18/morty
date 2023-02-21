const API_URL = "https://rickandmortyapi.com/api";

const HTMLResponse = document.querySelector("#app");
const days = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];
const createCharacter = (character) => {
  return `<li class='item'>
  <h2>${character.name}</h2>
  <img src='${character.image}'/>
  <p>${days[new Date(character.created).getDay()]}</p>
  <p>${character.species}</p>
  <p>${character.location.name}</p>
  <p>${character.status}</p>
  
  </li>`;
};
fetch(`${API_URL}/character`)
  .then((response) => response.json())
  .then((characters) => {
    const tpl = characters.results.map(createCharacter);
    HTMLResponse.innerHTML = `<ul class='list'>${tpl.join(" ")}</ul>`;
    console.log(characters.results);
  });
