import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function ContextProvider({ children }) {
  const [userEmail, setUserEmail] = useState('');

  const contextValue = { userEmail, setUserEmail };

  const memo = useMemo(() => (userEmail), [contextValue]);
  return (
    <Context.Provider value={ memo }>
      { children }
    </Context.Provider>
  );
}
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ContextProvider;
