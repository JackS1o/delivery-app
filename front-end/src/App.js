import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Customer from './pages/products';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/customer/products" element={ <Customer /> } />
      </Switch>
    </div>
  );
}

export default App;
