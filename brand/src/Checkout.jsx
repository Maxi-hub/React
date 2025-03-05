import { Helmet } from 'react-helmet';
import { Footer } from './components/Footer';
import { Information } from './components/Information';
import { Subscribe } from './components/Subscribe';
import './style.scss';
import { BreadCrumbs } from './components/BreadCrumbs';
import { NavigationMenu } from './components/NavigationMenu';
import { HeadingCenter } from './components/header/HeadingCenter';
import { CheckoutItems } from './components/checkout/CheckoutItems';

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
                <CheckoutItems title="01. Shipping Adress" status="open"/>
                <CheckoutItems title="02. BILLING INFORMATION"/>
                <CheckoutItems title="03. SHIPPING INFORMATION"/>
                <CheckoutItems title="04. SHIPPING METHOD"/>
                <CheckoutItems title="05. PAYMENT METHOD"/>
                <CheckoutItems title="06. ORDER REVIEW"/>
            </div >
            <Subscribe />
            <Information />
            <Footer />
        </>
    )
}
