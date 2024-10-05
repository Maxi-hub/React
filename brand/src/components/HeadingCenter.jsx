import { Link } from 'react-router-dom';
import '../style.scss';
const images = require.context('../img', true, /\.(jpg|png|svg)$/);

export const HeadingCenter = () => {
    return (
        <div className="heading center">
            <div className="heading__left">
                <div className="heading__logo">
                    <Link className="heading__logo-link" to='/'>
                        <img src={images('./logo1.jpg')} alt="Logo" />
                        <div className="heading__logo-text">
                            <p className="heading__logoname">BRAN<span className="heading__logoname-letter">D</span>
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="heading__browse">
                    <details className="heading__details">
                        <summary className="heading__browse-summery">
                            Browse<img className="heading__browse-img" src={images('./arrow_grey_down.png')} alt="" />
                        </summary>
                        <div className="heading__browse-box">
                            <div className="heading__browse-content">
                                <h4 className="heading__browse-title">Women</h4>
                                <a href="#" className="heading__browse-item">Dresses</a>
                                <a href="#" className="heading__browse-item">Tops</a>
                                <a href="#" className="heading__browse-item">Sweaters/Knits</a>
                                <a href="#" className="heading__browse-item">Jackets/Coats</a>
                                <a href="#" className="heading__browse-item">Blazers</a>
                                <a href="#" className="heading__browse-item">Denim</a>
                                <a href="#" className="heading__browse-item">Leggings/Pants</a>
                                <a href="#" className="heading__browse-item">Skirts/Shorts</a>
                                <a href="#" className="heading__browse-item">Accessories </a>
                            </div>
                            <div className="heading__browse-content">
                                <h4 className="heading__browse-title">Men</h4>
                                <a href="#" className="heading__browse-item">Tees/Tank tops</a>
                                <a href="#" className="heading__browse-item">Shirts/Polos</a>
                                <a href="#" className="heading__browse-item">Sweaters</a>
                                <a href="#" className="heading__browse-item">Sweatshirts/Hoodies</a>
                                <a href="#" className="heading__browse-item">Blazers</a>
                                <a href="#" className="heading__browse-item">Jackets/vests</a>
                            </div>
                        </div>
                    </details>
                </div>
                <input id="search" type="text" className="text_area" placeholder="Search for Item..." />
                <label className="heading__search-box" htmlFor="search"><img className="heading__search-img" src={images('./search.png')} alt="search" /></label>
            </div>
            <div className="heading__right">
                <div className="heading__bucket">
                    <a id="bucket" href='#'>
                        <img className="heading__bucket-img" src={images('./bucket_black.png')} alt="" />
                    </a>
                    <div className="heading__bucket-box">
                        <div className="heading__bucket-items">
                            <Link to='/single_page'>
                                <img className="heading__bucket-item" src={images('./bucket_man.png')} alt="" />
                            </Link>
                            <div className="heading__bucket-text">
                                <h5 className="heading__bucket-title">Rebox Zane</h5>
                                <img className="heading__bucket-stars" src={images('./stars.png')} alt="" />
                                <p className="heading__bucket-price">1 x $250</p>
                            </div>
                            <img className="heading__bucket-close" src={images('./button_close.png')} alt="" />
                        </div>
                        <div className="heading__bucket-items">
                            <Link to='/single_page'>
                                <img className="heading__bucket-item" src={images('./bucket_woman.png')} alt="" />
                            </Link>
                            <div className="heading__bucket-text">
                                <h5 className="heading__bucket-title">Rebox Zane</h5>
                                <img className="heading__bucket-stars" src={images('./stars.png')} alt="" />
                                <p className="heading__bucket-price">1 x $250</p>
                            </div>
                            <img className="heading__bucket-close" src={images('./button_close.png')} alt="" />
                        </div>
                        <div className="heading__bucket-total">
                            <p>TOTAL</p>
                            <p>$500.00</p>
                        </div>
                        <Link className="heading__checkout" to="/checkout">Checkout</Link>
                        <Link className="heading__goToCart" to="/shopping_cart">Go to cart</Link>
                    </div>
                </div>
                <div className="heading__account">
                    <details className="heading__account-details">
                        <summary className="heading__account-summery">
                            My Account<img src={images('./arrow_white.png')} alt='' />
                        </summary>
                        <p className="heading__account-text">Lorem ipsum, dolor. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Nulla, mollitia deleniti delectus nostrum ea, assumenda eius magnam
                            aperiam impedit labore reprehenderit, cupiditate minus? Obcaecati odit explicabo nostrum
                            delectus, doloribus eos?</p>
                    </details>
                </div>
            </div>
        </div>
    )
}
