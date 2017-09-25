import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/layouts';

import Home from './components/pages/home';
import Login from './components/pages/login';
import About from './components/pages/about';
import Products from './components/pages/products';

import NotFound from './components/pages/not-found';

export default () => (
  <Layout name="main">
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/products" component={Products} />

      <Route component={NotFound} />
    </Switch>
  </Layout>
);
