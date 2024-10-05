import { Link } from 'react-router-dom';
import '../style.scss';
import { useEffect, useState } from 'react';
const images = require.context('../img', true, /\.(jpg|png|svg)$/);
const fotos = [
    {
        'img': 'item1.jpg',
        'title': 'MANGO PEOPLE T-SHIRT',
        'price': 42,
    },
    {
        'img': 'man2_cart.png',
        'title': 'Mango People T-shirt',
        'color': 'Green',
        'size': 'Xll',
        'price': 250,
    },
    {
        'img': 'man3_cart.png',
        'title': 'Mango People T-shirt',
        'color': 'Blue',
        'size': 'Xll',
        'price': 100,
    },
];

export const ShoppingCartProduct = ({ onGrandTotalChange }) => {

    const [products, setProducts] = useState({});
    const [grandTotal, setGrandTotal] = useState(0);


    useEffect(() => {
        const initialProducts = {};
        let total = 0;
        fotos.forEach((item, index) => {
            initialProducts[index] = {
                quantity: 1,
                amount: item.price,
                total: item.price,
            }
            total = total + item.price;
        })
        setProducts(initialProducts);
        setGrandTotal(total);
    }, [fotos])

    const getTotal = () => {
        let total = 0;
        for (let key in products) {
            total = total + products[key].amount;
        }
        console.log(total);
        setGrandTotal(total);
    };

    const updateProductCountAndPrice = (e, index) => {
        const product = fotos[index];
        const newProducts = { ...products };
        newProducts[index] = {
            quantity: e.target.value,
            amount: product.price * e.target.value,
        }
        setProducts(newProducts);
    };

    useEffect(() => {
        getTotal();
    }, [updateProductCountAndPrice])

    onGrandTotalChange(grandTotal);

    return (
        fotos.map((item, index) => (
            <div className="product">
                <div className="product__left">
                    <Link to='/product'><img src={images(`./${item.img}`)} alt="" /></Link>
                    <div className="product__details" >
                        <h4 className="product__title">{item.title}</h4>
                        <p className="product__text">Color: <span>{item.color}</span></p>
                        <p className="product__text">Size: <span>{item.size}</span></p>
                    </div>
                </div>
                <div className="product__info">
                    <p className="product__text">${item.price}</p>
                    <input onChange={(e) => updateProductCountAndPrice(e, index)}
                        className="product__quantity"
                        type="number"
                        name="quantity"
                        id="quantity"
                        min="1"
                        placeholder="1" />
                    <p className="product__text">FREE</p>
                    <p className="product__text">${products[index] ? products[index].amount : item.price}</p>
                    <img className="product__info-img" src={images('./button_close.png')} alt="" />
                </div>
            </div>
        ))
    )
};
