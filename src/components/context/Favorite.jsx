import React from "react";

const FavoritePokemon = React.createContext({
  favorites: [],
  usefavorites: (id) => null,
  searche: (results) => {},
  value: (valor) => {},
});

export const FavoriteProvider = FavoritePokemon.Provider;

export default FavoritePokemon;
