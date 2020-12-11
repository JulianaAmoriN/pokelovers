export const namePokemon = ((dataPokemon, searchName) =>
  (dataPokemon.filter(item => item.name.includes(searchName.toLowerCase()))));

export const typePokemon = ((dataPokemon, filterType) =>
  (dataPokemon.filter(item => item.type.includes(filterType))));

export const calculusPokemon = ((dataPokemon, filterTypePokemon) =>
  (filterTypePokemon.length * 100 / dataPokemon.length));

export const orderPokemon = ((dataPokemon, order) => {
  switch (order) {
    case "A-Z":
      return dataPokemon.sort((a, b) => (a.name < b.name) ? -1 : 1);
    case "Z-A":
      return dataPokemon.sort((a, b) => (a.name > b.name) ? -1 : 1);
    case "0-251":
      return dataPokemon.sort((a, b) => (Number(a.num - b.num)));
  }
});
