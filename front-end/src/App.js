import React from 'react';
// import { useParams } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// import rockGlass from './images/rockGlass.svg';
import Login from './pages/login';

function App() {
  return (
    // <Login />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
