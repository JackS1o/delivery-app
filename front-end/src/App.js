import React from 'react';
// import { useParams } from 'react-router-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import rockGlass from './images/rockGlass.svg';
import Login from './pages/login';
import Customer from './pages/customer';

function App() {
  return (
    // <Login />
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={ <Login /> } />
        <Route
          path="/"
          element={ <Navigate to="/login" /> }
        />
        <Route path="/customer" element={ <Customer /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
