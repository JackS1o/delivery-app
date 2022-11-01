import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './pages/notFound';
import Register from './pages/register';
import Login from './pages/login';
import CustomerProducts from './pages/customerProducts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/customer/products" element={ <CustomerProducts /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/404" element={ <NotFound /> } />
        <Route path="*" element={ <Navigate to="/404" replace /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
