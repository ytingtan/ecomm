import React from 'react'
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Products from './components/ProductsList/Products';
import CheckOutForm from './components/CheckOutForm';
import ShoppingCart from './components/ShoppingCart';
import Home from './components/Home';
const Routing = () => {
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
      <Route
            path="/" 
            element= { <Home/> } 
        />
        <Route
            path="/products" 
            element= { <Products/> } 
        />
        <Route 
            path="/cart" 
            element={ <ShoppingCart/> } 
        />
        <Route
             path="/checkout" 
             element={<CheckOutForm/>} 
        />
      </Routes>

    </BrowserRouter>
  );
}

export default Routing;