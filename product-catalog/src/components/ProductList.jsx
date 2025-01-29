import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, toggleAvailability, updateProduct } from "../store/productSlice";
import { useContext } from "react";
import { FoundProductContext } from "./ProductContext";
import "../App.css";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const { foundProduct } = useContext(FoundProductContext);

  const handleUpdate = (product) => {
    foundProduct(product);
    dispatch(updateProduct(product));
    const liEl = document.getElementById(product.id);
    if (liEl) {
      liEl.classList.add('li-box');
    }
  };

  return (
    <div className="productListBox">
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id} id={product.id}>
              <p><b>Product name: </b> {product.name}</p>
              <p><b>Description: </b> {product.description}</p>
              <p><b>Price: </b> ${product.price}</p>
              <p><b>Available: </b> {product.available ? "Yes" : "No"}</p>
              <button onClick={() => dispatch(deleteProduct(product.id))}>
                Delete
              </button>
              <button onClick={() => dispatch(toggleAvailability(product.id))}>
                Toggle Availability
              </button>
              <button className="button-update" type="submit" onClick={() => {
                handleUpdate(product);
              }}>
                Update
              </button>
            </li>
          ))}
        </ul>
      )
      }
    </div >
  );
};

export default ProductList;