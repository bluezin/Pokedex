import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../container/App";
import Layout from "../components/Layout";
import Pokedex from "../components/Pokedex";
import List from "../components/List";
import MyFavorites from "../components/MyFavorites";

const Rutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/pokedex" component={Pokedex} />
          <Route exact path="/myPokemon" component={MyFavorites} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Rutes;
