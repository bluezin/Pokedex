const getPokemon = async (number = 0) => {
  const api = `https://pokeapi.co/api/v2/pokemon?limit=0&offset=${number}`;
  const response = await fetch(api);
  const data = await response.json();

  return data;
};

const getUrl = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

function getLocalStorage(setFavorite, setData) {
  const localPokemon =
    JSON.parse(window.localStorage.getItem("favorite_storage")) || [];
  const localStorege =
    JSON.parse(window.localStorage.getItem("favorite")) || [];
  setFavorite(localPokemon);
  setData(localStorege);
}

function getClickFavorite(name, img, favorite, data, setData, setFavorite) {
  const index = favorite.indexOf(name);
  let update = [...favorite];
  let array = [...data];
  if (index >= 0) {
    update.splice(index, 1);
    array.splice(index, 1);
  } else {
    update.push(name);
    array.push({
      name,
      img,
    });
  }
  setData(array);
  setFavorite(update);
  window.localStorage.setItem("favorite_storage", JSON.stringify(update));
  window.localStorage.setItem("favorite", JSON.stringify(array));
}

const getSearche = async (name) => {
  const api = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const response = await fetch(api);
  const data = await response.json();
  return data;
};

export { getPokemon, getUrl, getLocalStorage, getClickFavorite, getSearche };
