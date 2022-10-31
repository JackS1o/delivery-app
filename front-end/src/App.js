import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContextProvider from './context/ContextProvider';
import Login from './pages/login';
import Customer from './pages/products';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Login /> } />
          <Route path="/customer/products" element={ <Customer /> } />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
