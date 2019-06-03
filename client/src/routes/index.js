import React from 'react';
import Home from '../views/Home';
import SearchResult from '../views/SearchResult';
import ProductDetail from '../views/ProductDetail';
import { Switch, Route } from 'react-router-dom';

const routes = [
  {
    exact: true,
    path: "/",
    component: Home
  },
  {
    exact: true,
    path: "/items/",
    component: SearchResult
  },
  {
    exact: true,
    path: "/items/:id",
    component: ProductDetail
  },
  {
    path: "/:WhereTheHeckIsThat",
    component: null,
  }
];

const Routes = () => (
    <Switch>
        { routes.map((route, index) => (
            <Route key={index} {...route} />
        ))}
    </Switch>
);

export default Routes;