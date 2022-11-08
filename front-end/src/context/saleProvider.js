import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import SaleContext from './saleContext';

export default function SaleProvider({ children }) {
  const [saleCard, setSaleCard] = useState([]);

  const context = useMemo(() => ({
    saleCard,
    setSaleCard,
  }), [saleCard]);

  return (
    <SaleContext.Provider value={ context }>
      { children }
    </SaleContext.Provider>
  );
}

SaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
