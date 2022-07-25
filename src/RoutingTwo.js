import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderTwo from './components/HeaderTwo';
import Products from './components/ProductsList/Products';
import CheckOutForm from './components/CheckOutForm';
import ShoppingCart from './components/ShoppingCart';
import { Switch } from '@chakra-ui/react';

const RoutingTwo = () => {
  return (
    <Router>
      <HeaderTwo />
      <Routes>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/checkout">
            <CheckOutForm />
          </Route>
        </Routes>

    </Router>
  );
}

export default RoutingTwo;