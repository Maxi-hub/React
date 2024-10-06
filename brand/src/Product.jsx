import { Helmet } from 'react-helmet';
import './style.scss';
import { HeadingCenter } from './components/HeadingCenter';
import { Subscribe } from './components/Subscribe';
import { Information } from './components/Information';
import { Footer } from './components/Footer';
import { BreadCrumbs } from './components/BreadCrumbs';
import { NavigationMenu } from './components/NavigationMenu';
import { ClosesItems } from './components/ClosesItems';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const images = require.context('./img', true, /\.(jpg|png|svg)$/);
const categoryList = ['Accessories', 'Bags', 'Denim', 'Hoodies & Sweatshirts', 'Jackets & Coats', 'Polos', 'Shirts', 'Shoes', 'Sweaters & Knits', 'T-shirts', 'Tanks'];

export const Product = () => {
    const [checkedValues, setCheckedValue] = useState([]);

    const handleChecked = (e) => {
        const labelValue = e.target.nextElementSibling.textContent;
        if (e.target.checked) {
            setCheckedValue([...checkedValues, labelValue]);
        } else {
            setCheckedValue(checkedValues.filter((value) => value !== labelValue));
        }
    };

    return (
        <>
            <Helmet>
                <title>Product</title>
            </Helmet>
            <div className="header">
                <HeadingCenter />
                <NavigationMenu />
            </div>
            <BreadCrumbs />
            <div className="central center">
                <div className="leftPosition">
                    <div className="filter__content">
                        <details className="filter__item" open>
                            <summary className="filter__head">CATEGORY</summary>
                            <div className="filter__link-box">
                                {categoryList.map(item =>
                                    <Link to="#" className="filter__link">{item}</Link>
                                )}
                            </div>
                        </details>
                        <details className="filter__item">
                            <summary className="filter__head">BRAND</summary>
                            <div className="filter__link-box">
                                {categoryList.map(item =>
                                    <Link to="#" className="filter__link">{item}</Link>
                                )}
                            </div>
                        </details>
                        <details className="filter__item">
                            <summary className="filter__head">DESIGN</summary>
                            <div className="filter__link-box">
                                {categoryList.map(item =>
                                    <Link to="#" className="filter__link">{item}</Link>
                                )}
                            </div>
                        </details>
                    </div>
                </div>
                <div className="rightPosition">
                    <div className="sort">
                        <div className="sort__details">
                            <p className="sort__heading">TRANDING NOW</p>
                            <div className="sort__box">
                                <Link to="#" className="sort__link">Bohemian</Link>
                                <Link to="#" className="sort__link">Floral</Link>
                                <Link to="#" className="sort__link">Lace</Link>
                                <Link to="#" className="sort__link">Floral</Link>
                                <Link to="#" className="sort__link">Lace</Link>
                                <Link to="#" className="sort__link">Bohemian</Link>
                            </div>
                        </div>
                        <div className="sort__details">
                            <p className="sort__heading">SIZE</p>
                            <div className="sort__size-box">
                                <div className="sort__check">
                                    <input
                                        className='checkbox'
                                        type="checkbox"
                                        value='XS'
                                        onClick={(e) => handleChecked(e)}
                                    />
                                    <label htmlFor="#">XS</label>
                                </div>
                                <div className="sort__check">
                                    <input
                                        className='checkbox'
                                        type="checkbox"
                                        value='XXS'
                                        onClick={(e) => handleChecked(e)} />
                                    <label htmlFor="#">XXS</label>
                                </div>
                                <div className="sort__check">
                                    <input
                                        className='checkbox'
                                        type="checkbox"
                                        value='S'
                                        onClick={(e) => handleChecked(e)} />
                                    <label htmlFor="#">S</label>
                                </div>
                                <div className="sort__check">
                                    <input
                                        className='checkbox'
                                        type="checkbox"
                                        value='M'
                                        onClick={(e) => handleChecked(e)} />
                                    <label htmlFor="#">M</label>
                                </div>
                                <div className="sort__check">
                                    <input
                                        className='checkbox'
                                        type="checkbox"
                                        value='L'
                                        onClick={(e) => handleChecked(e)} />
                                    <label htmlFor="#">L</label>
                                </div>
                                <div className="sort__check">
                                    <input
                                        className='checkbox'
                                        type="checkbox"
                                        value='XL'
                                        onClick={(e) => handleChecked(e)} />
                                    <label htmlFor="#">XL</label>
                                </div>
                                <div className="sort__check">
                                    <input
                                        className='checkbox'
                                        type="checkbox"
                                        value='XXL'
                                        onClick={(e) => handleChecked(e)} />
                                    <label htmlFor="#">XXL</label>
                                </div>
                            </div>
                        </div>
                        <div className="sort__details">
                            <p className="sort__heading">PRICE</p>
                            <div className="sort__box">
                                <div className="sort__price-box">
                                    <input id="range" type="range" name="price" min="1" max="1000" />
                                    <div className="sort__price">
                                        <p>52$</p>
                                        <p>400$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sorting">
                        <div className="sorting__name">
                            <div className="sorting__title">Sort By</div>
                            <div className="sorting__sort">
                                <p>Size</p>
                                <img src={images('./arrow_grey_down.png')} alt="" />
                            </div>
                        </div>
                        <div className="sorting__count">
                            <div className="sorting__title">Show</div>
                            <div className="sorting__sort">
                                <p>09</p>
                                <img src={images('./arrow_grey_down.png')} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="closes__box closes__box_position">
                        <ClosesItems checkedValues={checkedValues} />
                    </div>
                    <div className="flipping">
                        <nav className="flipping__number">
                            <img src={images('./arrow_grey_left.png')} alt="" />
                            <ul>
                                <li className="flipping__list">1</li>
                                <li className="flipping__list">2</li>
                                <li className="flipping__list">3</li>
                                <li className="flipping__list">4</li>
                                <li className="flipping__list">5</li>
                                <li className="flipping__list">6</li>
                                <li className="flipping__list">. . .</li>
                                <li className="flipping__list">20</li>

                            </ul>
                            <img src={images('./arrow_pink_right.png')} alt="" />
                        </nav>
                        <Link to="#" className="flipping__button">View All</Link>
                    </div>
                </div>
            </div>
            <div className="conditions center">
                <div className="conditions__item">
                    <img src={images('./delivery.png')} alt="" />
                    <h3 className="delivery_title">Free Delivery</h3>
                    <p className="conditions__text">Worldwide delivery on all. Authorit tively morph next-generation innov tion
                        with extensive models.</p>
                </div>
                <div className="conditions__item">
                    <img src={images('./sales.png')} alt="" />
                    <h3 className="sales_title">Sales & discounts</h3>
                    <p className="conditions__text">Worldwide delivery on all. Authorit tively morph next-generation innov tion
                        with extensive models.</p>
                </div>
                <div className="conditions__item">
                    <img src={images('./assurance.png')} alt="" />
                    <h3 className="assurance_title">Quality assurance</h3>
                    <p className="conditions__text">Worldwide delivery on all. Authorit tively morph next-generation innov tion
                        with extensive models.</p>
                </div>
            </div>
            <Subscribe />
            <Information />
            <Footer />
        </>
    )
}
