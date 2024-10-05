import { Link } from 'react-router-dom';
import '../style.scss';
const images = require.context('../img', true, /\.(jpg|png|svg)$/);

export const NavigationMenu = () => {
    return (
        <nav>
            <div className="top center">
                <ul className="top__menu">
                    <li className="top__list">
                        <Link className="top__link" to='/product'>Home</Link>
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
                    <li className="top__list">
                        <Link className="top__link" to='/product'>Man</Link>
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
                    <li className="top__list">
                        <Link className="top__link" to='/product'>Women</Link>
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
                    <li className="top__list">
                        <Link className="top__link" to='/product'>Kids</Link>
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
                    <li className="top__list">
                        <Link className="top__link" to='/product'>Accoseriese</Link>
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
                    <li className="top__list last">
                        <Link className="top__link" to='/product'>Featured</Link>
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
                    <li className="top__list last">
                        <Link className="top__link" to='/product'>Hot Deals</Link>
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
    )
}
