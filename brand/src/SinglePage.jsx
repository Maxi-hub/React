import { Helmet } from 'react-helmet';
import { Footer } from './components/Footer';
import { HeadingCenter } from './components/HeadingCenter';
import { Information } from './components/Information';
import { Subscribe } from './components/Subscribe';
import './style.scss';
import { Link } from 'react-router-dom';
import { BreadCrumbs } from './components/BreadCrumbs';
import { NavigationMenu } from './components/NavigationMenu';
const images = require.context('./img', true, /\.(jpg|png|svg)$/);

export const SinglePage = () => {
    return (
        <>
            <Helmet>
                <title>Single Page</title>
            </Helmet>
            <div className="header">
                <HeadingCenter />
                <NavigationMenu />
            </div>
            <BreadCrumbs />
            <div className="fotos">
                <div className="fotos__arrow">
                    <Link to="#">
                        <img className="fotos__img1" src={images('./arrow_whiteleft.png')} alt="" />
                    </Link>
                </div>
                <img className="fotos__img2" src={images('./woman_on_chair.png')} alt="Woman on chair" />
                <div className="fotos__arrow">
                    <Link to="#">
                        <img className="fotos__img3" src={images('./arrow_whiteright.png')} alt="" />
                    </Link>
                </div>
                <div className="fotos__box center">
                    <div className="fotos__description">
                        <h3 className="fotos__h3">WOMEN COLLECTION</h3>
                        <hr />
                        <h1 className="fotos__h1">Moschino Cheap And Chic</h1>
                        <p className="fotos__text">Compellingly actualize fully researched processes before proactive outsourcing.
                            Progressively syndicate collaborative architectures before cutting-edge services. Completely
                            visualize parallel core competencies rather than exceptional portals.</p>
                        <div className="fotos__material">
                            <p>MATERIAL: &nbsp;<span className="fotos__material-text">COTTON</span></p>
                            <p>DESIGNER: &nbsp;<span className="fotos__material-text">BINBURHAN</span></p>
                        </div>
                        <p className="fotos__price">$561</p>
                        <div className="filter">
                            <div className="filter-color">
                                <p className="filter__title">CHOOSE COLOR</p>
                                <details className="filter__color">
                                    <summary className="filter__sort">
                                        <div className="filter__color-square1"></div>
                                        Red
                                        <img className="filter__color-arrow" src={images('./arrow_grey_down.png')} alt='' />
                                    </summary>
                                    <div className="filter__sort-box">
                                        <div className="filter__sort-check">
                                            <input id="filter_check1" className="filter__sort-check1" type="checkbox" />
                                            <div className="filter__color-square2"></div>
                                            <label className="filter__label" htmlFor="#">Green</label>
                                        </div>
                                        <div className="filter__sort-check">
                                            <input id="filter_check2" className="filter__sort-check2" type="checkbox" />
                                            <div className="filter__color-square3"></div>
                                            <label className="filter__label" htmlFor="#">Blue</label>
                                        </div>
                                    </div>
                                </details>
                            </div>
                            <div className="filter-size">
                                <p className="filter__title">CHOOSE SIZE</p>
                                <details className="filter__size">
                                    <summary className="filter__sort sort__new"> XXL
                                        <img className="filter__color-arrow" src={images('./arrow_grey_down.png')} alt='' />
                                    </summary>
                                    <div className="filter__sort-box">
                                        <div className="filter__sort-check">
                                            <input className="filter__checkbox" type="checkbox" />
                                            <label className="filter__label" htmlFor="#">XS</label>
                                        </div>
                                        <div className="filter__sort-check">
                                            <input className="filter__checkbox" type="checkbox" />
                                            <label className="filter__label" htmlFor="#">S</label>
                                        </div>
                                        <div className="filter__sort-check">
                                            <input className="filter__checkbox" type="checkbox" />
                                            <label className="filter__label" htmlFor="#">M</label>
                                        </div>
                                        <div className="filter__sort-check">
                                            <input className="filter__checkbox" type="checkbox" />
                                            <label className="filter__label" htmlFor="#">L</label>
                                        </div>
                                    </div>
                                </details>
                            </div>
                            <div className="filter-quantity">
                                <p className="filter__title">QUANTITY</p>
                                <input className="filter__number" type="number" placeholder="2" style={{ outline: "none", min: "1" }} />
                            </div>
                        </div>
                        <Link to="#" className="fotos__button-bucket">
                            <img className="fotos__button-img" src={images('./bucket_white.png')} alt="" />
                            <p className="fotos__button-text">Add to Cart</p>
                        </Link>
                    </div>
                </div>
            </div>
            <section className="single-page-items center">
                <h1 className="single-page-items__title">you may like also</h1>
                <div className="single-page-items__box">
                    <div className="single-page-items__item">
                        <Link to="#">
                            <div className="single-page-items__img">
                                <img src={images('./woman1.png')} alt="" />
                            </div>
                            <div className="single-page-items__text">
                                <p className="single-page-items__name">BLAZE LEGGINGS</p>
                                <div className="single-page-items__block">
                                    <p className="single-page-items__price">$52.00</p>
                                    <img src={images('./5stars.png')} alt="" />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="single-page-items__item">
                        <Link to="#">
                            <div className="single-page-items__img">
                                <img className="single-page-items__img2" src={images('./woman2.png')} alt="" />
                            </div>
                            <div className="single-page-items__text">
                                <p className="single-page-items__name">ALEXA SWEATER</p>
                                <p className="single-page-items__price">$52.00</p>
                            </div>
                        </Link>
                    </div>
                    <div className="single-page-items__item">
                        <Link to="#">
                            <div className="single-page-items__img">
                                <img src={images('./woman3.png')} alt="" />
                            </div>
                            <div className="single-page-items__text">
                                <p className="single-page-items__name">AGNES TOP</p>
                                <p className="single-page-items__price">$52.00</p>
                            </div>
                        </Link>
                    </div>
                    <div className="single-page-items__item">
                        <Link to="#">
                            <div className="single-page-items__img">
                                <img src={images('./woman4.png')} alt="" />
                            </div>
                            <div className="single-page-items__text">
                                <p className="single-page-items__name">SYLVA SWEATER</p>
                                <p className="single-page-items__price">$52.00</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            <Subscribe />
            <Information />
            <Footer />
        </>
    )
}
