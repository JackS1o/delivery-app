import { Routes, Route } from 'react-router-dom';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Routes>
      <Route exact path="/checkout" element={ <Checkout /> } />
    </Routes>
  );
}

export default App;
