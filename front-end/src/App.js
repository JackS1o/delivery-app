import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ContextProvider from './context/ContextProvider';
import Login from './pages/login';
import Customer from './pages/products';
import NotFound from './pages/NotFound';
import Register from './pages/Register';

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
