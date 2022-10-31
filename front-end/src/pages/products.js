import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from '../components/Card';
import Header from '../components/Header';
import CustomerContext from '../context/customerContext';

function Customer() {
  const history = useNavigate();
  const { totalPrice, cartProducts } = useContext(CustomerContext);

  const [products, setProducts] = useState([{
    name: '',
    price: 0,
    url_image: '',
    id: 0,
  }]);

  useEffect(() => {
    const getAllProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
    };
    if (token()) {
      getAllProducts();
    } else {
      history('/login');
    }
  });

  return (
    <div>
      <Header />
      <div>
        {products.map((product, index) => (
          <Cards product={ product } key={ index } />
        ))}
      </div>
      <button
        type="button"
        data-testid="carrinho"
        disabled={ cartProducts.length === 0 }
        onClick={ () => history('/cliente/checkout') }
      >
        <p>
          { `Ver carrinho: R$${totalPrice.toString()}` }
        </p>
      </button>
    </div>
  );
}

export default Customer;
