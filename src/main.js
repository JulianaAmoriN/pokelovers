import {calculusPokemon, namePokemon, typePokemon, orderPokemon} from './data.js';
import data from './data/pokemon/pokemon.js';

const dataPokemon = data.pokemon;

const menuHamburguer = document.getElementById("menu-hamburguer");
menuHamburguer.addEventListener("click", () => {
  document.getElementById("root").classList.toggle("show-menu");
});

function printCard(list) {
  const pokeCards = list.map(function (card) {
    return `
     <article class="card-pokemon">
     <ul class="flip">
     <li class="front-card ">
         <img class="card-image" src="${card.img}" alt="${card.name}"/>
         <h2 class="card-name">${card.name}</h2>
         <h4 class="card-generet">Geração:${card.generation.name}</h4>
         <h4 class="card-type">Tipo:${card.type.toString().replace(",","|")}</h4>
     </li>
     <li class="back-card displayFlex">
         <h2 class="card-num">${card.num}</h4>
         <p class="cardText">Altura: ${card.size.height}</p>
         <p class="cardText">Peso: ${card.size.weight}</p>
         <p class="cardText card-weaknesses">Fraquezas: ${card.weaknesses.join("|")}</p>
       </li>
       <li class="back-card displayFlex">
         <h2 class="card-num">${card.num}</h2>
         <p class="cardText">Altura: ${card.size.height}</p>
         <p class="cardText">Peso: ${card.size.weight}</p>
         <p class="cardText">Fraquezas: ${card.weaknesses.join("|")}</p>
         <p class="cardText">Evolução anterior:${card.evolution["prev-evolution"] ? card.evolution["prev-evolution"][0].name : "não possui"} 
         ${card.evolution["prev-evolution"] && card.evolution["prev-evolution"][0]["prev-evolution"] ? "|" + card.evolution["prev-evolution"][0]["prev-evolution"][0].name : " "}</p>
         <p class="cardText">Evoluções subsequentes:${card.evolution["next-evolution"] ? card.evolution["next-evolution"][0].name : "não possui"} 
         ${card.evolution["next-evolution"] && card.evolution["next-evolution"][0]["next-evolution"] ? "|" + card.evolution["next-evolution"][0]["next-evolution"][0].name : " "}</p>
       </li>
     </ul>
     </article>`
  })
  document.getElementById("pokedex").innerHTML = pokeCards.join(" ");
}
printCard(dataPokemon);

const inputFilterSearch = document.getElementById("textInput");
inputFilterSearch.addEventListener("keyup", formFilterName);

function formFilterName(event) {
  event.preventDefault();

  const searchName = document.getElementById("textInput").value;
  const filterName = namePokemon(dataPokemon, searchName);
  printCard(filterName);
}

const inputFilterOrder = document.getElementById("orderInput");
inputFilterOrder.addEventListener("click", formFilterOrder);

function formFilterOrder(event) {
  event.preventDefault();

  const order = document.getElementById("orderInput").value;
  const filterOrder = orderPokemon(dataPokemon, order);
  printCard(filterOrder);
}

const inputFilterType = document.getElementById("typeInput");
inputFilterType.addEventListener("click", formFilterType);

function formFilterType(event) {
  event.preventDefault();

  const filterType = document.getElementById("typeInput").value;

  if (filterType == "todos") {
    document.getElementById("calculus").innerHTML = `Lista com todos os tipos de Pokémon`
    printCard(dataPokemon);
  } else {
    const filterTypePokemon = typePokemon(dataPokemon, filterType);
    const calculusTypes = calculusPokemon(dataPokemon, filterTypePokemon);
    document.getElementById("calculus").innerHTML = `${calculusTypes.toFixed(1)}% dos Pokémon são do tipo ${filterType}.`
    printCard(filterTypePokemon);
  }
}