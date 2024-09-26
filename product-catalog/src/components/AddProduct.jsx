import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct } from "../store/productSlice";
import { FoundProductContext } from "./ProductContext";


const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(true);

  const dispatch = useDispatch();

  const { foundProduct } = useContext(FoundProductContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = foundProduct();
    if (product !== undefined) {
      const id = product.id;
      dispatch(updateProduct({ name, description, price: parseFloat(price), available, id }));
    } else {
      dispatch(addProduct({ name, description, price: parseFloat(price), available }));
    }

    setName("");
    setDescription("");
    setPrice("");
    setAvailable(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <label>
        Available:
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
        />
      </label>
      <button type="submit" name="addProduct">Save Product</button>
    </form>
  );
};

export default AddProduct;


