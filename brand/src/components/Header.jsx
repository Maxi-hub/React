import '../style.scss';
import { HeadingCenter } from './HeadingCenter';
const images = require.context('../img', true, /\.(jpg|png|svg)$/);

export const Header = () => {
    return (
        <>
            <div className="header">
                <HeadingCenter />
                <nav>
                    <div className="top center">
                        <ul className="top__menu">
                            <li className="top__list"><a href="product.html" className="top__link">Home</a>
                                <div className="top__box">
                                    <div className="top__item">
                                        <h3 className="top__title">Home</h3>
                                        <a href="#" className="top__title-link">Dresses</a>
                                        <a href="#" className="top__title-link">Tops</a>
                                        <a href="#" className="top__title-link">Sweaters/Knits</a>
                                        <a href="#" className="top__title-link">Jackets/Coats</a>
                                        <a href="#" className="top__title-link">Blazers</a>
                                        <a href="#" className="top__title-link">Denim</a>
                                        <a href="#" className="top__title-link">Leggings/Pants</a>
                                        <a href="#" className="top__title-link">Skirts/Shorts</a>
                                        <a href="#" className="top__title-link">Accessories </a>
                                    </div>
                                    <div className="top__item">
                                        <h3 className="top__title">Home</h3>
                                        <a href="#" className="top__title-link">Dresses</a>
                                        <a href="#" className="top__title-link">Tops</a>
                                        <a href="#" className="top__title-link">Sweaters/Knits</a>
                                        <a href="#" className="top__title-link">Jackets/Coats</a>
                                        <a href="#" className="top__title-link">Blazers</a>
                                        <a href="#" className="top__title-link">Denim</a>
                                        <a href="#" className="top__title-link">Leggings/Pants</a>
                                        <a href="#" className="top__title-link">Skirts/Shorts</a>
                                        <a href="#" className="top__title-link">Accessories </a>
                                    </div>
                                    <div className="top__item">
                                        <h3 className="top__title">Home</h3>
                                        <a href="#" className="top__title-link">Dresses</a>
                                        <a href="#" className="top__title-link">Tops</a>
                                        <a href="#" className="top__title-link">Sweaters/Knits</a>
                                    </div>
                                </div>
                            </li>
                            <li className="top__list"><a href="product.html" className="top__link">Man</a>
                                <div className="top__box">
                                    <div className="top__item">
                                        <h3 className="top__title">Man</h3>
                                        <a href="#" className="top__title-link">Dresses</a>
                                        <a href="#" className="top__title-link">Tops</a>
                                        <a href="#" className="top__title-link">Sweaters/Knits</a>
                                        <a href="#" className="top__title-link">Jackets/Coats</a>
                                        <a href="#" className="top__title-link">Blazers</a>
                                        <a href="#" className="top__title-link">Denim</a>
                                        <a href="#" className="top__title-link">Leggings/Pants</a>
                                        <a href="#" className="top__title-link">Skirts/Shorts</a>
                                        <a href="#" className="top__title-link">Accessories </a>
                                    </div>
                                    <div className="top__item">
                                        <h3 className="top__title">Man</h3>
                                        <a href="#" className="top__title-link">Dresses</a>
                                        <a href="#" className="top__title-link">Tops</a>
                                        <a href="#" className="top__title-link">Sweaters/Knits</a>
                                        <a href="#" className="top__title-link">Jackets/Coats</a>
                                    </div>
                                    <div className="top__item">
                                        <h3 className="top__title">Man</h3>
                                        <a href="#" className="top__title-link">Dresses</a>
                                        <a href="#" className="top__title-link">Tops</a>
                                        <a href="#" className="top__title-link">Sweaters/Knits</a>
                                    </div>
                                    <div className="top__item">
                                        <h3 className="top__title">Man</h3>
                                        <a href="#" className="top__title-link">Dresses</a>
                                        <a href="#" className="top__title-link">Tops</a>
                                        <a href="#" className="top__title-link">Sweaters/Knits</a>
                                        <a href="#" className="top__title-link">Jackets/Coats</a>
                                        <a href="#" className="top__title-link">Dresses</a>
                                        <a href="#" className="top__title-link">Tops</a>
                                        <a href="#" className="top__title-link">Sweaters/Knits</a>
                                        <a href="#" className="top__title-link">Jackets/Coats</a>
                                        <div className="top__item-ibox"><a href="#">
                                            <img className="top__item-img" src={images('./super_sale.png')} alt="" />
                                            <p className="top__item-pro">Super<br />sale!</p>
                                        </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="top__list"><a href="product.html" className="top__link">Women</a>
                                <div className="top__box">
                                    <div className="top__item">
                                        <h3 className="top__title">Women</h3>
                                        <a href="#" className="top__title-link">Dresses</a>
                                        <a href="#" className="top__title-link">Tops</a>
                                        <a href="#" className="top__title-link">Sweaters/Knits</a>
                                        <a href="#" className="top__title-link">Jackets/Coats</a>
                                        <a href="#" className="top__title-link">Blazers</a>
                                        <a href="#" className="top__title-link">Denim</a>
                                        <a href="#" className="top__title-link">Leggings/Pants</a>
                                        <a href="#" className="top__title-link">Skirts/Shorts</a>
                                        <a href="#" className="top__title-link">Accessories </a>
                                    </div>
                                    <div className="top__item">
                                        <h3 className="top__title">Women</h3>
                                        <a href="#" className="top__title-link">Dresses</a>
                                        <a href="#" className="top__title-link">Tops</a>
                                        <a href="#" className="top__title-link">Sweaters/Knits</a>
                                        <a href="#" className="top__title-link">Jackets/Coats</a>
                                    </div>
                                    <div className="top__item">
                                        <h3 className="top__title">Women</h3>
                                        <a href="#" className="top__title-link">Dresses</a>
                                        <a href="#" className="top__title-link">Tops</a>
                                        <a href="#" className="top__title-link">Sweaters/Knits</a>
                                    </div>
                                    <div className="top__item">
                                        <h3 className="top__title">Women</h3>
                                        <a href="#" className="top__title-link">Dresses</a>
                                        <a href="#" className="top__title-link">Tops</a>
                                        <a href="#" className="top__title-link">Sweaters/Knits</a>
                                        <a href="#" className="top__title-link">Jackets/Coats</a>
                                        <a href="#" className="top__title-link">Blazers</a>
                                        <a href="#" className="top__title-link">Denim</a>
                                        <a href="#" className="top__title-link">Leggings/Pants</a>
                                        <a href="#" className="top__title-link">Skirts/Shorts</a>
                                        <a href="#" className="top__title-link">Accessories </a>
                                    </div>
                                </div>
                            </li>
                            <li className="top__list"><a href="product.html" className="top__link">Kids</a>
                                <div className="top__box">
                                    <div className="top__item">
                                        <h3 className="top__title">Kids</h3>
                                        <a href="#" className="top__title-link">Dresses</a>
                                        <a href="#" className="top__title-link">Tops</a>
                                        <a href="#" className="top__title-link">Sweaters/Knits</a>
                                        <a href="#" className="top__title-link">Jackets/Coats</a>
                                        <a href="#" className="top__title-link">Blazers</a>
                                        <a href="#" className="top__title-link">Denim</a>
                                        <a href="#" className="top__title-link">Leggings/Pants</a>
                                        <a href="#" className="top__title-link">Skirts/Shorts</a>
                                        <a href="#" className="top__title-link">Accessories </a>
                                    </div>
                                    <div className="top__item">
                                        <h3 className="top__title">Kids</h3>
                                        <a href="#" className="top__title-link">Dresses</a>
                                        <a href="#" className="top__title-link">Tops</a>
                                        <a href="#" className="top__title-link">Sweaters/Knits</a>
                                        <a href="#" className="top__title-link">Jackets/Coats</a>
                                        <a href="#" className="top__title-link">Blazers</a>
                                        <a href="#" className="top__title-link">Denim</a>
                                        <a href="#" className="top__title-link">Leggings/Pants</a>
                                        <a href="#" className="top__title-link">Skirts/Shorts</a>
                                        <a href="#" className="top__title-link">Accessories </a>
                                    </div>
                                    <div className="top__item">
                                        <h3 className="top__title">Kids</h3>
                                        <a href="#" className="top__title-link">Dresses</a>
                                        <a href="#" className="top__title-link">Tops</a>
                                        <a href="#" className="top__title-link">Sweaters/Knits</a>
                                        <a href="#" className="top__title-link">Jackets/Coats</a>
                                        <a href="#" className="top__title-link">Blazers</a>
                                        <a href="#" className="top__title-link">Denim</a>
                                        <a href="#" className="top__title-link">Leggings/Pants</a>
                                        <a href="#" className="top__title-link">Skirts/Shorts</a>
                                        <a href="#" className="top__title-link">Accessories </a>
                                    </div>
                                </div>
                            </li>
                            <li className="top__list"><a href="product.html" className="top__link">Accoseriese</a>
                                <div className="top__box">
                                    <div className="top__item">
                                        <h3 className="top__title">Accoseriese</h3>
                                        <a href="#" className="top__title-link">Dresses</a>
                                        <a href="#" className="top__title-link">Tops</a>
                                        <a href="#" className="top__title-link">Sweaters/Knits</a>
                                        <a href="#" className="top__title-link">Jackets/Coats</a>
                                        <a href="#" className="top__title-link">Blazers</a>
                                        <a href="#" className="top__title-link">Denim</a>
                                    </div>
                                    <div className="top__item">
                                        <h3 className="top__title">Accoseriese</h3>
                                        <a href="#" className="top__title-link">Dresses</a>
                                        <a href="#" className="top__title-link">Tops</a>
                                        <a href="#" className="top__title-link">Sweaters/Knits</a>
                                        <a href="#" className="top__title-link">Jackets/Coats</a>
                                        <a href="#" className="top__title-link">Blazers</a>
                                    </div>
                                </div>
                            </li>
                            <li className="top__list last"><a href="product.html" className="top__link">Featured</a>
                                <div className="top__box">
                                    <div className="top__item">
                                        <h3 className="top__title">Featured</h3>
                                        <a href="#" className="top__title-link">Dresses</a>
                                        <a href="#" className="top__title-link">Tops</a>
                                        <a href="#" className="top__title-link">Sweaters/Knits</a>
                                        <a href="#" className="top__title-link">Jackets/Coats</a>
                                        <a href="#" className="top__title-link">Blazers</a>
                                        <a href="#" className="top__title-link">Denim</a>
                                        <a href="#" className="top__title-link">Leggings/Pants</a>
                                        <a href="#" className="top__title-link">Skirts/Shorts</a>
                                        <a href="#" className="top__title-link">Accessories </a>
                                    </div>
                                    <div className="top__item">
                                        <h3 className="top__title">Featured</h3>
                                        <a href="#" className="top__title-link">Dresses</a>
                                        <a href="#" className="top__title-link">Tops</a>
                                        <a href="#" className="top__title-link">Sweaters/Knits</a>
                                        <a href="#" className="top__title-link">Jackets/Coats</a>
                                        <a href="#" className="top__title-link">Blazers</a>
                                        <a href="#" className="top__title-link">Denim</a>
                                        <a href="#" className="top__title-link">Leggings/Pants</a>
                                        <a href="#" className="top__title-link">Skirts/Shorts</a>
                                        <a href="#" className="top__title-link">Accessories </a>
                                    </div>
                                    <div className="top__item">
                                        <h3 className="top__title">Featured</h3>
                                        <a href="#" className="top__title-link">Dresses</a>
                                        <a href="#" className="top__title-link">Tops</a>
                                        <a href="#" className="top__title-link">Sweaters/Knits</a>
                                        <a href="#" className="top__title-link">Jackets/Coats</a>
                                        <a href="#" className="top__title-link">Blazers</a>
                                        <a href="#" className="top__title-link">Denim</a>
                                        <a href="#" className="top__title-link">Leggings/Pants</a>
                                        <a href="#" className="top__title-link">Skirts/Shorts</a>
                                        <a href="#" className="top__title-link">Accessories </a>
                                    </div>
                                </div>
                            </li>
                            <li className="top__list last"><a href="product.html" className="top__link">Hot Deals</a>
                                <div className="top__box">
                                    <div className="top__item">
                                        <h3 className="top__title">Hot Deals</h3>
                                        <a href="#" className="top__title-link">Dresses</a>
                                        <a href="#" className="top__title-link">Tops</a>
                                        <a href="#" className="top__title-link">Sweaters/Knits</a>
                                        <a href="#" className="top__title-link">Jackets/Coats</a>
                                        <a href="#" className="top__title-link">Blazers</a>
                                        <a href="#" className="top__title-link">Denim</a>
                                        <a href="#" className="top__title-link">Leggings/Pants</a>
                                        <a href="#" className="top__title-link">Skirts/Shorts</a>
                                        <a href="#" className="top__title-link">Accessories </a>
                                    </div>
                                    <div className="top__item">
                                        <h3 className="top__title">Hot Deals</h3>
                                        <a href="#" className="top__title-link">Dresses</a>
                                        <a href="#" className="top__title-link">Tops</a>
                                        <a href="#" className="top__title-link">Sweaters/Knits</a>
                                        <a href="#" className="top__title-link">Jackets/Coats</a>
                                        <a href="#" className="top__title-link">Blazers</a>
                                        <a href="#" className="top__title-link">Denim</a>
                                        <a href="#" className="top__title-link">Leggings/Pants</a>
                                        <a href="#" className="top__title-link">Skirts/Shorts</a>
                                        <a href="#" className="top__title-link">Accessories </a>
                                    </div>
                                    <div className="top__item">
                                        <h3 className="top__title">Hot Deals</h3>
                                        <a href="#" className="top__title-link">Dresses</a>
                                        <a href="#" className="top__title-link">Tops</a>
                                        <a href="#" className="top__title-link">Sweaters/Knits</a>
                                        <a href="#" className="top__title-link">Jackets/Coats</a>
                                        <a href="#" className="top__title-link">Blazers</a>
                                        <a href="#" className="top__title-link">Denim</a>
                                        <a href="#" className="top__title-link">Leggings/Pants</a>
                                        <a href="#" className="top__title-link">Skirts/Shorts</a>
                                        <a href="#" className="top__title-link">Accessories </a>
                                    </div>
                                    <div className="top__item">
                                        <h3 className="top__title">Hot Deals</h3>
                                        <a href="#" className="top__title-link">Dresses</a>
                                        <a href="#" className="top__title-link">Tops</a>
                                        <a href="#" className="top__title-link">Sweaters/Knits</a>
                                        <a href="#" className="top__title-link">Jackets/Coats</a>
                                        <a href="#" className="top__title-link">Blazers</a>
                                        <a href="#" className="top__title-link">Denim</a>
                                        <a href="#" className="top__title-link">Leggings/Pants</a>
                                        <a href="#" className="top__title-link">Skirts/Shorts</a>
                                        <a href="#" className="top__title-link">Accessories </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="top__content">
                    <div className="top__text center">
                        <div className="top__text-item1"><span className="top__text-item2">THE BRAND</span><br />OF LUXERIOUS <span
                            className="top__text-item3">FASHION</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}
