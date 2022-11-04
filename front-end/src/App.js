import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './pages/notFound';
import Register from './pages/register';
import Login from './pages/login';
import CustomerProducts from './pages/customerProducts';
import Customer from './pages/customer';
import ContextProvider from './context/customerProvider';
import Checkout from './pages/checkout';
import CustomerOrder from './pages/customerOrder';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/customer/products" element={ <CustomerProducts /> } />
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/register" element={ <Register /> } />
          <Route exact path="/404" element={ <NotFound /> } />
          <Route exact path="*" element={ <Navigate to="/404" replace /> } />
          <Route exact path="/customer/checkout" element={ <Checkout /> } />
          <Route
            exact
            path="/"
            element={ <Navigate to="/login" /> }
          />
          <Route exact path="/customer" element={ <Customer /> } />
          <Route exact path="/customer/orders/:id" element={ <CustomerOrder /> } />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
