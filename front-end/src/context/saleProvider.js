import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import SaleContext from './saleContext';

export default function SaleProvider({ children }) {
  const [saleCard, setSaleCard] = useState([]);
  const [users, setUser] = useState([]);

  const context = useMemo(() => ({
    users,
    saleCard,
    setSaleCard,
    setUser,
  }), [saleCard, users]);

  return (
    <SaleContext.Provider value={ context }>
      { children }
    </SaleContext.Provider>
  );
}

SaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
