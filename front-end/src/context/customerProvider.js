import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import CustomerContext from './customerContext';

export default function CustomerProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState('0');

  const context = useMemo(() => ({
    cartProducts,
    setCartProducts,
    totalPrice,
    setTotalPrice,
  }), [cartProducts, totalPrice]);

  return (
    <CustomerContext.Provider value={ context }>
      { children }
    </CustomerContext.Provider>
  );
}

CustomerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
