import { Link } from 'react-router-dom';
import '../style.scss';

export const BreadCrumbs = () => {
    const breadcrumbsLink = [
        { link: '/', name: 'Home' },
        { link: '/product', name: 'Men' },
        { link: '#', name: 'New Arrivals' },
    ]

    return (
        <div className="new-arrivals center">
            <h1 className="new-arrivals__title">New Arrivals</h1>
            <nav className="breadcrumbs__box">
                <ul className="breadcrumbs__ul">
                    {
                        breadcrumbsLink.map((item, index) => (
                            <li key={index} className="breadcrumbs__li">
                                <Link className='breadcrumbs__link' to={item.link}>{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}
