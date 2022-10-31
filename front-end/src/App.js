import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContextProvider from './context/ContextProvider';
import Login from './pages/login';
import Customer from './pages/products';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/404" element={ <NotFound /> } />
        <Route path="*" element={ <Navigate to="/404" replace /> } />
        <Route path="/customer/products" element={ <Customer /> } />
      </Routes>
    </BrowserRouter>
    </ContextProvider>

  );
}

export default App;
