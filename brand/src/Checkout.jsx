import { Helmet } from 'react-helmet';
import { Footer } from './components/Footer';
import { HeadingCenter } from './components/HeadingCenter';
import { Information } from './components/Information';
import { Subscribe } from './components/Subscribe';
import './style.scss';
import { Link } from 'react-router-dom';
import { BreadCrumbs } from './components/BreadCrumbs';
import { NavigationMenu } from './components/NavigationMenu';

export const Checkout = () => {

    return (
        <>
            <Helmet>
                <title>Checkout</title>
            </Helmet>
            <div className="header">
                <HeadingCenter />
                <NavigationMenu />
            </div>
            <BreadCrumbs />
            <div className="checkout center">
                <details className="checkout__item" open>
                    <summary className="checkout__head">01. Shipping Adress</summary>
                    <div className="checkout__box">
                        <form className="checkout__left-box">
                            <h4 className="checkout__title">Check as a guest or register</h4>
                            <p className="checkout__text">Register with us for future convenience</p>
                            <div className="checkout__checkbox">
                                <div className="checkout__checkbox1">
                                    <input className="checkout__checkbox-input" type="radio" /> <label
                                        className="checkout__checkbox-title" htmlFor="">checkout as guest</label>
                                </div>
                                <div className="checkout__checkbox2">
                                    <input className="checkout__checkbox-input" type="radio" /><label className="checkout__checkbox-title"
                                        htmlFor="">register</label>
                                </div>
                            </div>
                            <div className="checkout__registry">
                                <h4 className="checkout__title reg">regisregter and save time!</h4>
                                <p className="checkout__text">Register with us for future convenience</p>
                            </div>
                            <div className="checkout__easy">
                                <img className="checkout__arrow" src="img/arrow_double.png" alt="" />
                                <p className="checkout__text">Fast and easy checkout</p>
                            </div>
                            <div className="checkout__easy">
                                <img className="checkout__arrow" src="img/arrow_double.png" alt="" />
                                <p className="checkout__text">Easy access to your order history and status</p>
                            </div>
                            <a href="#" className="checkout__button">Continue</a>
                        </form>
                        <form className="checkout__right-box">
                            <h4 className="checkout__title">Already registed?</h4>
                            <p className="checkout__text">Please log in below</p>
                            <div className="checkout__right-data">
                                <label htmlFor="checkout__email">EMAIL ADDRESS <span className="checkout__footnote">*</span></label>
                                <input className="checkout__right-input" type="email" name="email" id="checkout__email" required />
                                <label htmlFor="checkout__password" >PASSWORD <span className="checkout__footnote">*</span></label>
                                <input className="checkout__right-input" type="password" name="password" id="checkout__password" required />
                                <p className="checkout__text checkout__text_color">* Required Fileds</p>
                            </div>
                            <div className="checkout__right-button">
                                <a href="#" className="checkout__button" type="submit">Log in</a>
                                <a href="#" className="checkout__button checkout__button_psw">Forgot Password ?</a>
                            </div>
                        </form>
                    </div>
                </details >
                <details className="checkout__item">
                    <summary className="checkout__head">02. BILLING INFORMATION</summary>
                    <div className="checkout__box">
                        <div className="checkout__left-box">
                            <h4 className="checkout__title">Check as a guest or register</h4>
                            <p className="checkout__text">Register with us for future convenience</p>
                            <div className="checkout__checkbox">
                                <div className="checkout__checkbox1">
                                    <input className="checkout__checkbox-input" type="radio" /> <label
                                        className="checkout__checkbox-title" htmlFor="">checkout as guest</label>
                                </div>
                                <div className="checkout__checkbox2">
                                    <input className="checkout__checkbox-input" type="radio" /><label className="checkout__checkbox-title"
                                        htmlFor="">register</label>
                                </div>
                            </div>
                            <div className="checkout__registry">
                                <h4 className="checkout__title reg">regisregter and save time!</h4>
                                <p className="checkout__text">Register with us for future convenience</p>
                            </div>
                            <div className="checkout__easy">
                                <img className="checkout__arrow" src="img/arrow_double.png" alt="" />
                                <p className="checkout__text">Fast and easy checkout</p>
                            </div>
                            <div className="checkout__easy">
                                <img className="checkout__arrow" src="img/arrow_double.png" alt="" />
                                <p className="checkout__text">Easy access to your order history and status</p>
                            </div>
                            <a href="#" className="checkout__button">Continue</a>
                        </div>
                        <div className="checkout__right-box">
                            <h4 className="checkout__title">Already registed?</h4>
                            <p className="checkout__text">Please log in below</p>
                            <div className="checkout__right-data">
                                <label htmlFor="">EMAIL ADDRESS <span className="checkout__footnote">*</span></label>
                                <input className="checkout__right-input" type="email" name="" id="" />
                                <label htmlFor="">PASSWORD <span className="checkout__footnote">*</span></label>
                                <input className="checkout__right-input" type="password" name="" id="" />
                                <p className="checkout__text checkout__text_color">* Required Fileds</p>
                            </div>
                            <div className="checkout__right-button">
                                <a href="#" className="checkout__button">Log in</a>
                                <a href="#" className="checkout__button checkout__button_psw">Forgot Password ?</a>
                            </div>
                        </div>
                    </div>

                </details>
                <details className="checkout__item">
                    <summary className="checkout__head">03. SHIPPING INFORMATION</summary>
                    <div className="checkout__box">
                        <div className="checkout__left-box">
                            <h4 className="checkout__title">Check as a guest or register</h4>
                            <p className="checkout__text">Register with us for future convenience</p>
                            <div className="checkout__checkbox">
                                <div className="checkout__checkbox1">
                                    <input className="checkout__checkbox-input" type="radio" /> <label
                                        className="checkout__checkbox-title" htmlFor="">checkout as guest</label>
                                </div>
                                <div className="checkout__checkbox2">
                                    <input className="checkout__checkbox-input" type="radio" />
                                    <label className="checkout__checkbox-title" htmlFor="">register</label>
                                </div>
                            </div>
                            <div className="checkout__registry">
                                <h4 className="checkout__title reg">regisregter and save time!</h4>
                                <p className="checkout__text">Register with us for future convenience</p>
                            </div>
                            <div className="checkout__easy">
                                <img className="checkout__arrow" src="img/arrow_double.png" alt="" />
                                <p className="checkout__text">Fast and easy checkout</p>
                            </div>
                            <div className="checkout__easy">
                                <img className="checkout__arrow" src="img/arrow_double.png" alt="" />
                                <p className="checkout__text">Easy access to your order history and status</p>
                            </div>
                            <a href="#" className="checkout__button">Continue</a>
                        </div>
                        <div className="checkout__right-box">
                            <h4 className="checkout__title">Already registed?</h4>
                            <p className="checkout__text">Please log in below</p>
                            <div className="checkout__right-data">
                                <label htmlFor="">EMAIL ADDRESS <span className="checkout__footnote">*</span></label>
                                <input className="checkout__right-input" type="email" name="" id="" />
                                <label htmlFor="">PASSWORD <span className="checkout__footnote">*</span></label>
                                <input className="checkout__right-input" type="password" name="" id="" />
                                <p className="checkout__text checkout__text_color">* Required Fileds</p>
                            </div>
                            <div className="checkout__right-button">
                                <a href="#" className="checkout__button">Log in</a>
                                <a href="#" className="checkout__button checkout__button_psw">Forgot Password ?</a>
                            </div>
                        </div>
                    </div>

                </details>
                <details className="checkout__item">
                    <summary className="checkout__head">04. SHIPPING METHOD</summary>
                    <div className="checkout__box">
                        <div className="checkout__left-box">
                            <h4 className="checkout__title">Check as a guest or register</h4>
                            <p className="checkout__text">Register with us for future convenience</p>
                            <div className="checkout__checkbox">
                                <div className="checkout__checkbox1">
                                    <input className="checkout__checkbox-input" type="radio" /> <label
                                        className="checkout__checkbox-title" htmlFor="">checkout as guest</label>
                                </div>
                                <div className="checkout__checkbox2">
                                    <input className="checkout__checkbox-input" type="radio" /><label className="checkout__checkbox-title"
                                        htmlFor="">register</label>
                                </div>
                            </div>
                            <div className="checkout__registry">
                                <h4 className="checkout__title reg">regisregter and save time!</h4>
                                <p className="checkout__text">Register with us for future convenience</p>
                            </div>
                            <div className="checkout__easy">
                                <img className="checkout__arrow" src="img/arrow_double.png" alt="" />
                                <p className="checkout__text">Fast and easy checkout</p>
                            </div>
                            <div className="checkout__easy">
                                <img className="checkout__arrow" src="img/arrow_double.png" alt="" />
                                <p className="checkout__text">Easy access to your order history and status</p>
                            </div>
                            <a href="#" className="checkout__button">Continue</a>
                        </div>
                        <div className="checkout__right-box">
                            <h4 className="checkout__title">Already registed?</h4>
                            <p className="checkout__text">Please log in below</p>
                            <div className="checkout__right-data">
                                <label htmlFor="">EMAIL ADDRESS <span className="checkout__footnote">*</span></label>
                                <input className="checkout__right-input" type="email" name="" id="" />
                                <label htmlFor="">PASSWORD <span className="checkout__footnote">*</span></label>
                                <input className="checkout__right-input" type="password" name="" id="" />
                                <p className="checkout__text checkout__text_color">* Required Fileds</p>
                            </div>
                            <div className="checkout__right-button">
                                <a href="#" className="checkout__button">Log in</a>
                                <a href="#" className="checkout__button checkout__button_psw">Forgot Password ?</a>
                            </div>
                        </div>
                    </div>

                </details>
                <details className="checkout__item">
                    <summary className="checkout__head">05. PAYMENT METHOD</summary>
                    <div className="checkout__box">
                        <div className="checkout__left-box">
                            <h4 className="checkout__title">Check as a guest or register</h4>
                            <p className="checkout__text">Register with us for future convenience</p>
                            <div className="checkout__checkbox">
                                <div className="checkout__checkbox1">
                                    <input className="checkout__checkbox-input" type="radio" /> <label
                                        className="checkout__checkbox-title" htmlFor="">checkout as guest</label>
                                </div>
                                <div className="checkout__checkbox2">
                                    <input className="checkout__checkbox-input" type="radio" /><label className="checkout__checkbox-title"
                                        htmlFor="">register</label>
                                </div>
                            </div>
                            <div className="checkout__registry">
                                <h4 className="checkout__title reg">regisregter and save time!</h4>
                                <p className="checkout__text">Register with us for future convenience</p>
                            </div>
                            <div className="checkout__easy">
                                <img className="checkout__arrow" src="img/arrow_double.png" alt="" />
                                <p className="checkout__text">Fast and easy checkout</p>
                            </div>
                            <div className="checkout__easy">
                                <img className="checkout__arrow" src="img/arrow_double.png" alt="" />
                                <p className="checkout__text">Easy access to your order history and status</p>
                            </div>
                            <a href="#" className="checkout__button">Continue</a>
                        </div>
                        <div className="checkout__right-box">
                            <h4 className="checkout__title">Already registed?</h4>
                            <p className="checkout__text">Please log in below</p>
                            <div className="checkout__right-data">
                                <label htmlFor="">EMAIL ADDRESS <span className="checkout__footnote">*</span></label>
                                <input className="checkout__right-input" type="email" name="" id="" />
                                <label htmlFor="">PASSWORD <span className="checkout__footnote">*</span></label>
                                <input className="checkout__right-input" type="password" name="" id="" />
                                <p className="checkout__text checkout__text_color">* Required Fileds</p>
                            </div>
                            <div className="checkout__right-button">
                                <a href="#" className="checkout__button">Log in</a>
                                <a href="#" className="checkout__button checkout__button_psw">Forgot Password ?</a>
                            </div>
                        </div>
                    </div>

                </details>
                <details className="checkout__item">
                    <summary className="checkout__head">06. ORDER REVIEW</summary>
                    <div className="checkout__box">
                        <div className="checkout__left-box">
                            <h4 className="checkout__title">Check as a guest or register</h4>
                            <p className="checkout__text">Register with us for future convenience</p>
                            <div className="checkout__checkbox">
                                <div className="checkout__checkbox1">
                                    <input className="checkout__checkbox-input" type="radio" /> <label
                                        className="checkout__checkbox-title" htmlFor="">checkout as guest</label>
                                </div>
                                <div className="checkout__checkbox2">
                                    <input className="checkout__checkbox-input" type="radio" /><label className="checkout__checkbox-title"
                                        htmlFor="">register</label>
                                </div>
                            </div>
                            <div className="checkout__registry">
                                <h4 className="checkout__title reg">regisregter and save time!</h4>
                                <p className="checkout__text">Register with us for future convenience</p>
                            </div>
                            <div className="checkout__easy">
                                <img className="checkout__arrow" src="img/arrow_double.png" alt="" />
                                <p className="checkout__text">Fast and easy checkout</p>
                            </div>
                            <div className="checkout__easy">
                                <img className="checkout__arrow" src="img/arrow_double.png" alt="" />
                                <p className="checkout__text">Easy access to your order history and status</p>
                            </div>
                            <a href="#" className="checkout__button">Continue</a>
                        </div>
                        <div className="checkout__right-box">
                            <h4 className="checkout__title">Already registed?</h4>
                            <p className="checkout__text">Please log in below</p>
                            <div className="checkout__right-data">
                                <label htmlFor="">EMAIL ADDRESS <span className="checkout__footnote">*</span></label>
                                <input className="checkout__right-input" type="email" name="" id="" />
                                <label htmlFor="">PASSWORD <span className="checkout__footnote">*</span></label>
                                <input className="checkout__right-input" type="password" name="" id="" />
                                <p className="checkout__text checkout__text_color">* Required Fileds</p>
                            </div>
                            <div className="checkout__right-button">
                                <a href="#" className="checkout__button">Log in</a>
                                <a href="#" className="checkout__button checkout__button_psw">Forgot Password ?</a>
                            </div>
                        </div>
                    </div>

                </details>
            </div >
            <Subscribe />
            <Information />
            <Footer />
        </>
    )
}
