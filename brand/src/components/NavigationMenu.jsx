import { Link } from 'react-router-dom';
import '../style.scss';
const images = require.context('../img', true, /\.(jpg|png|svg)$/);
const homeCollection = ['Dresses', 'Tops', 'Sweaters/Knits', 'Jackets/Coats', 'Blazers', 'Denim', 'Leggings/Pants', 'Skirts/Shorts', 'Accessories'];
const menColection = ['Pants', 'Tops', 'Sweaters/Knits', 'Jackets/Coats', 'Blazers', 'Denim', 'Skirts/Shorts', 'Accessories'];
const womenColection1 = ['Dresses', 'Tops', 'Sweaters/Knits', 'Jackets/Coats', 'Blazers', 'Denim', 'Leggings/Pants', 'Skirts/Shorts', 'Accessories'];
const womenColection2 = ['Dresses', 'Tops', 'Sweaters/Knits', 'Jackets/Coats'];
const womenColection3 = ['Blazers', 'Denim', 'Leggings/Pants', 'Skirts/Shorts', 'Accessories'];
const kidsCollection = ['Dresses', 'Tops', 'Sweaters/Knits', 'Jackets/Coats', 'Blazers', 'Denim', 'Leggings/Pants', 'Skirts/Shorts', 'Accessories'];
const accoserieseCollection = ['umbrellas', 'ties', 'bags and backpacks', 'belts', 'sunglasses', 'cufflinks'];


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
                                {homeCollection.map(item =>
                                    <Link to="#" className="top__title-link">{item}</Link>
                                )}
                            </div>
                            <div className="top__item">
                                <h3 className="top__title">Home</h3>
                                {homeCollection.map(item =>
                                    <Link to="#" className="top__title-link">{item}</Link>
                                )}
                            </div>
                            <div className="top__item">
                                <h3 className="top__title">Home</h3>
                                {homeCollection.map(item =>
                                    <Link to="#" className="top__title-link">{item}</Link>
                                )}
                            </div>
                        </div>
                    </li>
                    <li className="top__list">
                        <Link className="top__link" to='/product'>Man</Link>
                        <div className="top__box">
                            <div className="top__item">
                                <h3 className="top__title">Men</h3>
                                {menColection.map(item =>
                                    <Link to="#" className="top__title-link">{item}</Link>
                                )}
                            </div>
                            <div className="top__item">
                                <h3 className="top__title">Men</h3>
                                {menColection.map(item =>
                                    <Link to="#" className="top__title-link">{item}</Link>
                                )}
                            </div>
                            <div className="top__item">
                                <h3 className="top__title">Men</h3>
                                {menColection.map(item =>
                                    <Link to="#" className="top__title-link">{item}</Link>
                                )}
                            </div>
                            <div className="top__item">
                                <h3 className="top__title">Men</h3>
                                {menColection.map(item =>
                                    <Link to="#" className="top__title-link">{item}</Link>
                                )}
                                <div className="top__item-ibox">
                                    <Link to="#">
                                        <img className="top__item-img" src={images('./super_sale.png')} alt="" />
                                        <p className="top__item-pro">Super<br />sale!</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="top__list">
                        <Link className="top__link" to='/product'>Women</Link>
                        <div className="top__box">
                            <div className="top__item">
                                <h3 className="top__title">Women</h3>
                                {womenColection1.map(item =>
                                    <Link to="#" className="top__title-link">{item}</Link>
                                )}
                            </div>
                            <div className="top__item">
                                <h3 className="top__title">Women</h3>
                                {womenColection2.map(item =>
                                    <Link to="#" className="top__title-link">{item}</Link>
                                )}
                            </div>
                            <div className="top__item">
                                <h3 className="top__title">Women</h3>
                                {womenColection3.map(item =>
                                    <Link to="#" className="top__title-link">{item}</Link>
                                )}
                            </div>
                            <div className="top__item">
                                <h3 className="top__title">Women</h3>
                                {womenColection1.map(item =>
                                    <Link to="#" className="top__title-link">{item}</Link>
                                )}
                            </div>
                        </div>
                    </li>
                    <li className="top__list">
                        <Link className="top__link" to='/product'>Kids</Link>
                        <div className="top__box">
                            <div className="top__item">
                                <h3 className="top__title">Kids</h3>
                                {kidsCollection.map(item =>
                                    <Link to="#" className="top__title-link">{item}</Link>
                                )}
                            </div>
                            <div className="top__item">
                                <h3 className="top__title">Kids</h3>
                                {kidsCollection.map(item =>
                                    <Link to="#" className="top__title-link">{item}</Link>
                                )}
                            </div>
                            <div className="top__item">
                                <h3 className="top__title">Kids</h3>
                                {kidsCollection.map(item =>
                                    <Link to="#" className="top__title-link">{item}</Link>
                                )}
                            </div>
                        </div>
                    </li>
                    <li className="top__list">
                        <Link className="top__link" to='/product'>Accoseriese</Link>
                        <div className="top__box">
                            <div className="top__item">
                                <h3 className="top__title">Accoseriese</h3>
                                {accoserieseCollection.map(item =>
                                    <Link to="#" className="top__title-link">{item}</Link>
                                )}
                            </div>
                            <div className="top__item">
                                <h3 className="top__title">Accoseriese</h3>
                                {accoserieseCollection.map(item =>
                                    <Link to="#" className="top__title-link">{item}</Link>
                                )}
                            </div>
                        </div>
                    </li>
                    <li className="top__list last">
                        <Link className="top__link" to='/product'>Featured</Link>
                        <div className="top__box">
                            <div className="top__item">
                                <h3 className="top__title">Featured</h3>
                                {homeCollection.map(item =>
                                    <Link to="#" className="top__title-link">{item}</Link>
                                )}
                            </div>
                            <div className="top__item">
                                <h3 className="top__title">Featured</h3>
                                {homeCollection.map(item =>
                                    <Link to="#" className="top__title-link">{item}</Link>
                                )}
                            </div>
                            <div className="top__item">
                                <h3 className="top__title">Featured</h3>
                                {homeCollection.map(item =>
                                    <Link to="#" className="top__title-link">{item}</Link>
                                )}
                            </div>
                        </div>
                    </li>
                    <li className="top__list last">
                        <Link className="top__link" to='/product'>Hot Deals</Link>
                        <div className="top__box">
                            <div className="top__item">
                                <h3 className="top__title">Hot Deals</h3>
                                {homeCollection.map(item =>
                                    <Link to="#" className="top__title-link">{item}</Link>
                                )}
                            </div>
                            <div className="top__item">
                                <h3 className="top__title">Hot Deals</h3>
                                {homeCollection.map(item =>
                                    <Link to="#" className="top__title-link">{item}</Link>
                                )}
                            </div>
                            <div className="top__item">
                                <h3 className="top__title">Hot Deals</h3>
                                {homeCollection.map(item =>
                                    <Link to="#" className="top__title-link">{item}</Link>
                                )}
                            </div>
                            <div className="top__item">
                                <h3 className="top__title">Hot Deals</h3>
                                {homeCollection.map(item =>
                                    <Link to="#" className="top__title-link">{item}</Link>
                                )}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
