import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Checkout } from './Checkout';
import { Product } from './Product';
import { SinglePage } from './SinglePage';
import { ShoppingCart } from './ShoppingCart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/product' element={<Product />} />
        <Route path='/single_page' element={<SinglePage />} />
        <Route path='/shopping_cart' element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();