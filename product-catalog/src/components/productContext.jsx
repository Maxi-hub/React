// const foundProduct = createContext();

// foundProduct = (products, clickItem) => {
//   return products.find(product => product.id === clickItem.id);
// };


import { createContext, useState, } from 'react';

const FoundProductContext = createContext();

const FoundProductProvider = ({ children }) => {
  const [product, setProduct] = useState();

  const foundProduct = (clickItem) => {
    setProduct(clickItem);
    return product;
  };

  return (
    <FoundProductContext.Provider value={{ foundProduct }}>
      {children}
    </FoundProductContext.Provider>
  );
};

export { FoundProductProvider, FoundProductContext };
