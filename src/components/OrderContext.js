import React, { useState } from 'react';

const OrderContext = React.createContext();

export function OrderProvider({ children }) {
  const [books, setBooks] = useState([]);
  return (
    <OrderContext.Provider value={[books, setBooks]}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
