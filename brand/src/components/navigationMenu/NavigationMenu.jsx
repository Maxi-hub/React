import { Link } from 'react-router-dom';
import '../../style.scss';
import { SectionElement } from './SectionElement';
import { NavigationCategory } from './NavigationCategory';

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
                    <NavigationCategory title="Home">
                        <SectionElement title="Home">
                            {homeCollection.map(item =>
                                <Link to="#" className="top__title-link">{item}</Link>
                            )}
                        </SectionElement>
                        <SectionElement title="Home">
                            {homeCollection.map(item =>
                                <Link to="#" className="top__title-link">{item}</Link>
                            )}
                        </SectionElement>
                        <SectionElement title="Home">
                            {homeCollection.map(item =>
                                <Link to="#" className="top__title-link">{item}</Link>
                            )}
                        </SectionElement>
                    </NavigationCategory>
                    <NavigationCategory title="Man">
                        <SectionElement title="Men">
                            {menColection.map(item =>
                                <Link to="#" className="top__title-link">{item}</Link>
                            )}
                        </SectionElement>
                        <SectionElement title="Men">
                            {menColection.map(item =>
                                <Link to="#" className="top__title-link">{item}</Link>
                            )}
                        </SectionElement>
                        <SectionElement title="Men">
                            {menColection.map(item =>
                                <Link to="#" className="top__title-link">{item}</Link>
                            )}
                        </SectionElement>
                        <SectionElement title="Men">
                            <>
                                {menColection.map(item =>
                                    <Link to="#" className="top__title-link">{item}</Link>
                                )}
                                < div className="top__item-ibox">
                                    <Link to="#">
                                        <img className="top__item-img" src='img/superSale.png' alt="" />
                                        <p className="top__item-pro">Super<br />sale!</p>
                                    </Link>
                                </div>
                            </>
                        </SectionElement>
                    </NavigationCategory>
                    <NavigationCategory title="Women">
                        <SectionElement title="Women">
                            {womenColection1.map(item =>
                                <Link to="#" className="top__title-link">{item}</Link>
                            )}
                        </SectionElement>
                        <SectionElement title="Women">
                            {womenColection2.map(item =>
                                <Link to="#" className="top__title-link">{item}</Link>
                            )}
                        </SectionElement>
                        <SectionElement title="Women">
                            {womenColection3.map(item =>
                                <Link to="#" className="top__title-link">{item}</Link>
                            )}
                        </SectionElement>
                        <SectionElement title="Women">
                            {womenColection1.map(item =>
                                <Link to="#" className="top__title-link">{item}</Link>
                            )}
                        </SectionElement>
                    </NavigationCategory>
                    <NavigationCategory title="Kids">
                        <SectionElement title="Kids">
                            {kidsCollection.map(item =>
                                <Link to="#" className="top__title-link">{item}</Link>
                            )}
                        </SectionElement>
                        <SectionElement title="Kids">
                            {kidsCollection.map(item =>
                                <Link to="#" className="top__title-link">{item}</Link>
                            )}
                        </SectionElement>
                        <SectionElement title="Kids">
                            {kidsCollection.map(item =>
                                <Link to="#" className="top__title-link">{item}</Link>
                            )}
                        </SectionElement>
                    </NavigationCategory>
                    <NavigationCategory title="Accoseriese">
                        <SectionElement title="Accoseriese">
                            {accoserieseCollection.map(item =>
                                <Link to="#" className="top__title-link">{item}</Link>
                            )}
                        </SectionElement>
                        <SectionElement title="Accoseriese">
                            {accoserieseCollection.map(item =>
                                <Link to="#" className="top__title-link">{item}</Link>
                            )}
                        </SectionElement>
                    </NavigationCategory>
                    <NavigationCategory title="Featured" className="last">
                        <SectionElement title="Featured">
                            {homeCollection.map(item =>
                                <Link to="#" className="top__title-link">{item}</Link>
                            )}
                        </SectionElement>
                        <SectionElement title="Featured">
                            {homeCollection.map(item =>
                                <Link to="#" className="top__title-link">{item}</Link>
                            )}
                        </SectionElement>
                        <SectionElement title="Featured">
                            {homeCollection.map(item =>
                                <Link to="#" className="top__title-link">{item}</Link>
                            )}
                        </SectionElement>
                        <SectionElement title="Featured">
                            {homeCollection.map(item =>
                                <Link to="#" className="top__title-link">{item}</Link>
                            )}
                        </SectionElement>
                    </NavigationCategory>
                    <NavigationCategory title="Hot Deals" className="last">
                        <SectionElement title="Hot Deals">
                            {homeCollection.map(item =>
                                <Link to="#" className="top__title-link">{item}</Link>
                            )}
                        </SectionElement>
                        <SectionElement title="Hot Deals">
                            {homeCollection.map(item =>
                                <Link to="#" className="top__title-link">{item}</Link>
                            )}
                        </SectionElement>
                        <SectionElement title="Hot Deals">
                            {homeCollection.map(item =>
                                <Link to="#" className="top__title-link">{item}</Link>
                            )}
                        </SectionElement>
                        <SectionElement title="Hot Deals">
                            {homeCollection.map(item =>
                                <Link to="#" className="top__title-link">{item}</Link>
                            )}
                        </SectionElement>
                    </NavigationCategory>
                </ul>
            </div>
        </nav >
    )
}
