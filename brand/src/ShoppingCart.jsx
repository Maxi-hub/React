import { useEffect, useRef, useState } from 'react';
import { Footer } from './components/Footer';
import { HeadingCenter } from './components/HeadingCenter';
import { Information } from './components/Information';
import { Subscribe } from './components/Subscribe';
import './style.scss';
import { Helmet } from 'react-helmet';
import { BreadCrumbs } from './components/BreadCrumbs';
import { NavigationMenu } from './components/NavigationMenu';
import { Link } from 'react-router-dom';
import { ShoppingCartProduct } from './components/ShoppingCartProduct';
const images = require.context('./img', true, /\.(jpg|png|svg)$/);

export const ShoppingCart = () => {
    const shoppingCartRef = useRef();
    const headingBucketBoxREef = useRef();
    const [grandTotal, setGrandTotal] = useState(0);

    useEffect(() => {
        const shoppingCart = shoppingCartRef.current;
        const headingBucketBox = headingBucketBoxREef.current;

        if (localStorage.length > 0) {
            for (const key in localStorage) {
                const obj = JSON.parse(localStorage.getItem(key));
                if (shoppingCart) {
                    shoppingCart.insertAdjacentHTML('beforeend', `
                        <div className="product">
                            <div className="product__left">
                                <Link to='/product'> 
                                    <img src=${images(`./${obj.img}`)} alt=""/> 
                                </Link>
                                <div className="product__details">
                                    <h4 className="product__title">${obj.title}</h4>
                                    <p className="product__text">Color: <span>Red</span></p>
                                    <p className="product__text">Size: <span>Xll</span></p>
                                </div>
                            </div>
                            <div className="product__info">
                                <p className="product__text">$${obj.price}</p>
                                <input className="product__quantity" type="number" name="quantity" id="quantity" min="1" placeholder="1"/>
                                <p className="product__text">FREE</p>
                                <p className="product__text">$300</p>
                                <img className="product__info-img" src=${images('./button_close.png')} alt=""/>
                            </div>
                        </div>`);
                }

                if(headingBucketBox) {
                    headingBucketBox.insertAdjacentHTML('afterbegin', `
                        <div className="heading__bucket-items" data-id="${obj.id}">
                            <Link to='/single_page'>    
                                <img className="heading__bucket-item" src=${images(`./${obj.img}`)} alt="" />
                            </Link>
                            <div className="heading__bucket-text">
                                <h5 className="heading__bucket-title">${obj.title}</h5>
                                <img className="heading__bucket-stars" src=${images('./stars.png')} alt=""/>
                                <p className="heading__bucket-price">${obj.count} x $${obj.price}</p>
                            </div>
                            <img className="heading__bucket-close" src=${images('./button_close.png')} alt=""/>
                        </div>
                        `
                        );
                }
               
            }
        }

        if (headingBucketBox) {
            headingBucketBox.addEventListener("click", ev => {
                if (ev.target.closest('.heading__bucket-close')) {
                    const item = ev.target.closest(".heading__bucket-items");
                    if (item) {
                        item.remove();
                        localStorage.removeItem(item.dataset.id);
                    }
                }
            });
        }

        if (shoppingCart) {
            shoppingCart.addEventListener("click", ev => {
                if (ev.target.closest(".product__info-img")) {
                    const item = ev.target.closest(".product");
                    if (item) {
                        item.remove();
                    }
                }
            });
        }
    }, [])

    const handleGrandTotalChange = (newGrandTotal) => {
        setGrandTotal(newGrandTotal);
    }

    return (
        <>
            <Helmet>
                <title>Shopping Cart</title>
            </Helmet>
            <div className="header">
                <HeadingCenter />
                <NavigationMenu />
            </div>
            <BreadCrumbs />
            <div className="cart center">
                <div className="title">
                    <p className="title__name">Product Details</p>
                    <div className="title__details">
                        <p className="title__name">unite Price</p>
                        <p className="title__name">Quantity</p>
                        <p className="title__name">shipping</p>
                        <p className="title__name">Subtotal</p>
                        <p className="title__name">ACTION</p>
                    </div>
                </div>
                <ShoppingCartProduct onGrandTotalChange={handleGrandTotalChange} />
            </div>
            <div className="buttons center">
                <a className="button" href="#">cLEAR SHOPPING CART</a>
                <a className="button" href="#">cONTINUE sHOPPING</a>
            </div>
            <div className="checking center">
                <div className="checking__adress">
                    <h3 className="checking__title">Shipping Adress</h3>
                    <input type="text" name="country" id="country" placeholder="Bangladesh" />
                    <input type="text" placeholder="State" />
                    <input type="text" name="Postcode" id="Postcode" placeholder="Postcode / Zip" />
                    <a className="button checking__adress_button" href="#">get a quote</a>
                </div>
                <div className="checking__discount">
                    <h3 className="checking__title">coupon discount</h3>
                    <p className="checking__text">Enter your coupon code if you have one</p>
                    <input type="text" placeholder="State" />
                    <a className="button checking__discount_button" href="#">Apply coupon</a>
                </div>
                <div className="checking__total">
                    <p className="checking__subtotal">Sub total <span>${grandTotal}</span></p>
                    <p className="checking__grandtotal">GRAND TOTAL <span>${grandTotal}</span></p>
                    <hr />
                    <a className="button checking__total_button" href="#">proceed to checkout</a>
                </div>
            </div>
            <Subscribe />
            <Information />
            <Footer />
        </>
    )
}
