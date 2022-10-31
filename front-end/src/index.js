import React from 'react';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
=======
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
>>>>>>> b1237115b1b4f4721ff4ed1eee65e3b35a6a612c
import reportWebVitals from './reportWebVitals';
import App from './App';

<<<<<<< HEAD
const root = createRoot(
  document.getElementById('root'),
=======
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
>>>>>>> b1237115b1b4f4721ff4ed1eee65e3b35a6a612c
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
);

reportWebVitals();
