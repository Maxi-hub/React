// const foundProduct = createContext();

// foundProduct = (products, clickItem) => {
//   return products.find(product => product.id === clickItem.id);
// };

//Сообщение 'children' is missing in props validation указывает на то, что ESLint с плагином eslint-plugin-react и правилом react/prop-types требует явного описания типов для всех пропсов, включая children.
import { createContext, useState, } from 'react';
import PropTypes from 'prop-types';

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

FoundProductProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};

export { FoundProductProvider, FoundProductContext };