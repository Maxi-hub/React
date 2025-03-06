import { Helmet } from 'react-helmet';
import '../../style.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeadingCenter } from '../header/HeadingCenter';
import { BreadCrumbs } from '../breadCrumbs/BreadCrumbs';
import { NavigationMenu } from '../navigationMenu/NavigationMenu';
import { Subscribe } from '../subscribe/Subscribe';
import { Information } from '../companyInformation/Information';
import { Footer } from '../footer/Footer';
import { ClothesItems } from '../clothesItems/ClothesItems';
import { ProductSections } from './ProductSections';
import { Conditions } from '../conditions/Conditions';

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
                        <ProductSections
                            categoryList={categoryList}
                            sectionName="CATEGORY"
                            open="open"
                        />
                        <ProductSections
                            categoryList={categoryList}
                            sectionName="BRAND"
                        />
                        <ProductSections
                            categoryList={categoryList}
                            sectionName="DESIGN"
                        />
                    </div>
                </div>
                <div className="rightPosition">
                    <div className="sort">
                        <div className="sort__details">
                            <p className="sort__heading">TRANDING NOW</p>
                            <div className="sort__box">
                                {["Bohemian", "Floral", "Lace", "Floral", "Lace", "Bohemian"].map((item, index) => (
                                    <Link key={index} to="#" className="sort__link">{item}</Link>
                                ))}
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
                                <img src='img/arrowGreyDown.png' alt="" />
                            </div>
                        </div>
                        <div className="sorting__count">
                            <div className="sorting__title">Show</div>
                            <div className="sorting__sort">
                                <p>09</p>
                                <img src='img/arrowGreyDown.png' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="closes__box closes__box_position">
                        <ClothesItems checkedValues={checkedValues} />
                    </div>
                    <div className="flipping">
                        <nav className="flipping__number">
                            <img src='img/arrowGreyLeft.png' alt="" />
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
                            <img src='img/arrowPinkRight.png' alt="" />
                        </nav>
                        <Link to="#" className="flipping__button">View All</Link>
                    </div>
                </div>
            </div>
            <div className="conditions center">
                <Conditions
                    imgSrc="img/delivery.png"
                    imgAlt=""
                    title="Free Delivery"
                    titleClassName="delivery_title"
                    text="Worldwide delivery on all. Authorit tively morph next-generation innovation with extensive models."
                />
                <Conditions
                    imgSrc="img/sales.png"
                    imgAlt=""
                    title="Sales & discounts"
                    titleClassName="sales_title"
                    text="Worldwide delivery on all. Authorit tively morph next-generation innovation with extensive models."
                />
                <Conditions
                    imgSrc="img/assurance.png"
                    imgAlt=""
                    title="Quality assurance"
                    titleClassName="assurance_title"
                    text="Worldwide delivery on all. Authorit tively morph next-generation innovation with extensive models."
                />
            </div>
            <Subscribe />
            <Information />
            <Footer />
        </>
    )
}
