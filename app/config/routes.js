import React from "react";
import { Route, IndexRoute, Router, hashHistory } from "react-router";

import Main from "../components/Main.jsx";
import Favorites from "../components/Favorites.jsx";
import Home from "../components/Home.jsx";
import Search from "../components/common/Search.jsx";

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    <Route path="search" component={Search} />
    <Route path="favorites" component={Favorites} />
    <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes;
