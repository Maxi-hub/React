import { Helmet } from 'react-helmet';
import { Footer } from '../footer/Footer';
import { Information } from '../companyInformation/Information';
import { Subscribe } from '../subscribe/Subscribe';
import '../../style.scss';
import { BreadCrumbs } from '../breadCrumbs/BreadCrumbs';
import { NavigationMenu } from '../navigationMenu/NavigationMenu';
import { HeadingCenter } from '../header/HeadingCenter';
import { CheckoutItems } from './CheckoutItems';

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
                <CheckoutItems title="01. Shipping Adress" status="open" />
                <CheckoutItems title="02. BILLING INFORMATION" />
                <CheckoutItems title="03. SHIPPING INFORMATION" />
                <CheckoutItems title="04. SHIPPING METHOD" />
                <CheckoutItems title="05. PAYMENT METHOD" />
                <CheckoutItems title="06. ORDER REVIEW" />
            </div >
            <Subscribe />
            <Information />
            <Footer />
        </>
    )
}
