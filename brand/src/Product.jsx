import { Helmet } from 'react-helmet';
import './style.scss';
import { HeadingCenter } from './components/HeadingCenter';
import { Subscribe } from './components/Subscribe';
import { Information } from './components/Information';
import { Footer } from './components/Footer';
import { BreadCrumbs } from './components/BreadCrumbs';
import { NavigationMenu } from './components/NavigationMenu';
import { ClosesItems } from './components/ClosesItems';
const images = require.context('./img', true, /\.(jpg|png|svg)$/);

export const Product = () => {
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
                                <a href="#" className="filter__link">Accessories</a>
                                <a href="#" className="filter__link">Bags</a>
                                <a href="#" className="filter__link">Denim</a>
                                <a href="#" className="filter__link">Hoodies & Sweatshirts</a>
                                <a href="#" className="filter__link">Jackets & Coats</a>
                                <a href="#" className="filter__link">Polos</a>
                                <a href="#" className="filter__link">Shirts</a>
                                <a href="#" className="filter__link">Shoes</a>
                                <a href="#" className="filter__link">Sweaters & Knits</a>
                                <a href="#" className="filter__link">T-shirts</a>
                                <a href="#" className="filter__link">Tanks</a>
                            </div>
                        </details>
                        <details className="filter__item">
                            <summary className="filter__head">BRAND</summary>
                            <div className="filter__link-box">
                                <a href="#" className="filter__link">Accessories</a>
                                <a href="#" className="filter__link">Bags</a>
                                <a href="#" className="filter__link">Denim</a>
                                <a href="#" className="filter__link">Hoodies & Sweatshirts</a>
                                <a href="#" className="filter__link">Jackets & Coats</a>
                                <a href="#" className="filter__link">Polos</a>
                                <a href="#" className="filter__link">Shirts</a>
                                <a href="#" className="filter__link">Shoes</a>
                                <a href="#" className="filter__link">Sweaters & Knits</a>
                                <a href="#" className="filter__link">T-shirts</a>
                                <a href="#" className="filter__link">Tanks</a>
                            </div>
                        </details>
                        <details className="filter__item">
                            <summary className="filter__head">DESIGN</summary>
                            <div className="filter__link-box">
                                <a href="#" className="filter__link">Accessories</a>
                                <a href="#" className="filter__link">Bags</a>
                                <a href="#" className="filter__link">Denim</a>
                                <a href="#" className="filter__link">Hoodies & Sweatshirts</a>
                                <a href="#" className="filter__link">Jackets & Coats</a>
                                <a href="#" className="filter__link">Polos</a>
                                <a href="#" className="filter__link">Shirts</a>
                                <a href="#" className="filter__link">Shoes</a>
                                <a href="#" className="filter__link">Sweaters & Knits</a>
                                <a href="#" className="filter__link">T-shirts</a>
                                <a href="#" className="filter__link">Tanks</a>
                            </div>
                        </details>
                    </div>
                </div>
                <div className="rightPosition">
                    <div className="sort">
                        <div className="sort__details">
                            <p className="sort__heading">TRANDING NOW</p>
                            <div className="sort__box">
                                <a href="#" className="sort__link">Bohemian</a>
                                <a href="#" className="sort__link">Floral</a>
                                <a href="#" className="sort__link">Lace</a>
                                <a href="#" className="sort__link">Floral</a>
                                <a href="#" className="sort__link">Lace</a>
                                <a href="#" className="sort__link">Bohemian</a>
                            </div>
                        </div>
                        <div className="sort__details">
                            <p className="sort__heading">SIZE</p>
                            <div className="sort__size-box">
                                <div className="sort__check">
                                    <input type="checkbox" />
                                    <label htmlFor="#">XS</label>
                                </div>
                                <div className="sort__check">
                                    <input type="checkbox" />
                                    <label htmlFor="#">XXS</label>
                                </div>
                                <div className="sort__check">
                                    <input type="checkbox" />
                                    <label htmlFor="#">S</label>
                                </div>
                                <div className="sort__check">
                                    <input type="checkbox" />
                                    <label htmlFor="#">M</label>
                                </div>
                                <div className="sort__check">
                                    <input type="checkbox" />
                                    <label htmlFor="#">L</label>
                                </div>
                                <div className="sort__check">
                                    <input type="checkbox" />
                                    <label htmlFor="#">XL</label>
                                </div>
                                <div className="sort__check">
                                    <input type="checkbox" />
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
                                <p>Name</p>
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
                        {/* <div className="closes__items">
                            <a className="closes__link" href="product.html">
                                <img className="closes__items-img" src={images('./item1.jpg')} alt="" />
                                <div className="closes__items-text">
                                    <p className="closes__items-title">MANGO PEOPLE T-SHIRT</p>
                                    <p className="closes__price">$52.00</p>
                                </div>
                            </a>
                            <div className="add-box">
                                <a href="#bucket" className="add">
                                    <img className="add-img" src={images('./bucket_white.png')} alt="" />
                                    <p className="add-txt">Add to Cart</p>
                                </a>
                                <div className="hover-box">
                                    <a href="#" className="refresh">
                                        <img src={images('./arrow_loop.png')} alt="" />
                                    </a>
                                    <a href="#" className="liked">
                                        <img src={images('./heart.png')} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="closes__items">
                            <a className="closes__link" href="product.html">
                                <img className="closes__items-img" src={images('./item2.jpg')} alt="" />
                                <div className="closes__items-text">
                                    <p className="closes__items-title">MANGO PEOPLE T-SHIRT</p>
                                    <p className="closes__price">$52.00</p>
                                </div>
                            </a>
                            <div className="add-box">
                                <a href="#bucket" className="add">
                                    <img className="add-img" src={images('./bucket_white.png')} alt="" />
                                    <p className="add-txt">Add to Cart</p>
                                </a>
                                <div className="hover-box">
                                    <a href="#" className="refresh">
                                        <img src={images('./arrow_loop.png')} alt="" />
                                    </a>
                                    <a href="#" className="liked">
                                        <img src={images('./heart.png')} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="closes__items">
                            <a className="closes__link" href="product.html">
                                <img className="closes__items-img" src={images('./item3.jpg')} alt="" />
                                <div className="closes__items-text">
                                    <p className="closes__items-title">MANGO PEOPLE T-SHIRT</p>
                                    <p className="closes__price">$52.00</p>
                                </div>
                            </a>
                            <div className="add-box">
                                <a href="#bucket" className="add">
                                    <img className="add-img" src={images('./bucket_white.png')} alt="" />
                                    <p className="add-txt">Add to Cart</p>
                                </a>
                                <div className="hover-box">
                                    <a href="#" className="refresh">
                                        <img src={images('./arrow_loop.png')} alt="" />
                                    </a>
                                    <a href="#" className="liked">
                                        <img src={images('./heart.png')} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="closes__items">
                            <a className="closes__link" href="product.html">
                                <img className="closes__items-img" src={images('./item4.jpg')} alt="" />
                                <div className="closes__items-text">
                                    <p className="closes__items-title">MANGO PEOPLE T-SHIRT</p>
                                    <p className="closes__price">$52.00</p>
                                </div>
                            </a>
                            <div className="add-box">
                                <a href="#bucket" className="add">
                                    <img className="add-img" src={images('./bucket_white.png')} alt="" />
                                    <p className="add-txt">Add to Cart</p>
                                </a>
                                <div className="hover-box">
                                    <a href="#" className="refresh">
                                        <img src={images('./arrow_loop.png')} alt="" />
                                    </a>
                                    <a href="#" className="liked">
                                        <img src={images('./heart.png')} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="closes__items">
                            <a className="closes__link" href="product.html">
                                <img className="closes__items-img" src={images('./item5.jpg')} alt="" />
                                <div className="closes__items-text">
                                    <p className="closes__items-title">MANGO PEOPLE T-SHIRT</p>
                                    <p className="closes__price">$52.00</p>
                                </div>
                            </a>
                            <div className="add-box">
                                <a href="#bucket" className="add">
                                    <img className="add-img" src={images('./bucket_white.png')} alt="" />
                                    <p className="add-txt">Add to Cart</p>
                                </a>
                                <div className="hover-box">
                                    <a href="#" className="refresh">
                                        <img src={images('./arrow_loop.png')} alt="" />
                                    </a>
                                    <a href="#" className="liked">
                                        <img src={images('./heart.png')} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="closes__items">
                            <a className="closes__link" href="product.html">
                                <img className="closes__items-img" src={images('./item6.jpg')} alt="" />
                                <div className="closes__items-text">
                                    <p className="closes__items-title">MANGO PEOPLE T-SHIRT</p>
                                    <p className="closes__price">$52.00</p>
                                </div>
                            </a>
                            <div className="add-box">
                                <a href="#bucket" className="add">
                                    <img className="add-img" src={images('./bucket_white.png')} alt="" />
                                    <p className="add-txt">Add to Cart</p>
                                </a>
                                <div className="hover-box">
                                    <a href="#" className="refresh">
                                        <img src={images('./arrow_loop.png')} alt="" />
                                    </a>
                                    <a href="#" className="liked">
                                        <img src={images('./heart.png')} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="closes__items">
                            <a className="closes__link" href="product.html">
                                <img className="closes__items-img" src={images('./item7.jpg')} alt="" />
                                <div className="closes__items-text">
                                    <p className="closes__items-title">MANGO PEOPLE T-SHIRT</p>
                                    <p className="closes__price">$52.00</p>
                                </div>
                            </a>
                            <div className="add-box">
                                <a href="#bucket" className="add">
                                    <img className="add-img" src={images('./bucket_white.png')} alt="" />
                                    <p className="add-txt">Add to Cart</p>
                                </a>
                                <div className="hover-box">
                                    <a href="#" className="refresh">
                                        <img src={images('./arrow_loop.png')} alt="" />
                                    </a>
                                    <a href="#" className="liked">
                                        <img src={images('./heart.png')} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="closes__items">
                            <a className="closes__link" href="product.html">
                                <img className="closes__items-img" src={images('./item8.jpg')} alt="" />
                                <div className="closes__items-text">
                                    <p className="closes__items-title">MANGO PEOPLE T-SHIRT</p>
                                    <p className="closes__price">$52.00</p>
                                </div>
                            </a>
                            <div className="add-box">
                                <a href="#bucket" className="add">
                                    <img className="add-img" src={images('./bucket_white.png')} alt="" />
                                    <p className="add-txt">Add to Cart</p>
                                </a>
                                <div className="hover-box">
                                    <a href="#" className="refresh">
                                        <img src={images('./arrow_loop.png')} alt="" />
                                    </a>
                                    <a href="#" className="liked">
                                        <img src={images('./heart.png')} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="closes__items">
                            <a className="closes__link" href="product.html">
                                <img className="closes__items-img" src={images('./item4.jpg')} alt="" />
                                <div className="closes__items-text">
                                    <p className="closes__items-title">MANGO PEOPLE T-SHIRT</p>
                                    <p className="closes__price">$52.00</p>
                                </div>
                            </a>
                            <div className="add-box">
                                <a href="#bucket" className="add">
                                    <img className="add-img" src={images('./bucket_white.png')} alt="" />
                                    <p className="add-txt">Add to Cart</p>
                                </a>
                                <div className="hover-box">
                                    <a href="#" className="refresh">
                                        <img src={images('./arrow_loop.png')} alt="" />
                                    </a>
                                    <a href="#" className="liked">
                                        <img src={images('./heart.png')} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div> */}
                        <ClosesItems />
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
                        <a href="#" className="flipping__button">View All</a>
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
