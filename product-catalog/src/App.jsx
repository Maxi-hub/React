// src/App.jsx
import AddProduct from "./components/AddProduct";
import { FoundProductProvider } from "./components/ProductContext";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <h1>Product Catalog</h1>
      <FoundProductProvider>
        <AddProduct />
        <ProductList />
      </FoundProductProvider>
    </div>
  );
}

export default App;
