import React from 'react'
import { Link } from 'react-router-dom';
import '../../style.scss';
import { CheckoutBox } from './CheckoutBox';

export const CheckoutItems = ({title, status}) => {
    return (
        <details className="checkout__item" open={status}>
            <summary className="checkout__head">{title}</summary>
            <div className="checkout__box">
                <form className="checkout__left-box">
                    <h4 className="checkout__title">Check as a guest or register</h4>
                    <p className="checkout__text">Register with us for future convenience</p>
                    <div className="checkout__checkbox">
                        <CheckoutBox number="1" className="checkout__checkbox" labelName="checkout as guest" />
                        <CheckoutBox number="2" className="checkout__checkbox" labelName="register" />
                    </div>
                    <div className="checkout__registry">
                        <h4 className="checkout__title reg">regisregter and save time!</h4>
                        <p className="checkout__text">Register with us for future convenience</p>
                    </div>
                    <div className="checkout__easy">
                        <img className="checkout__arrow" src="img/arrowDouble.png" alt="" />
                        <p className="checkout__text">Fast and easy checkout</p>
                    </div>
                    <div className="checkout__easy">
                        <img className="checkout__arrow" src="img/arrowDouble.png" alt="" />
                        <p className="checkout__text">Easy access to your order history and status</p>
                    </div>
                    <Link to="#" className="checkout__button">Continue</Link>
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
                        <Link to="#" className="checkout__button" type="submit">Log in</Link>
                        <Link to="#" className="checkout__button checkout__button_psw">Forgot Password ?</Link>
                    </div>
                </form>
            </div>
        </details >
    )
}
