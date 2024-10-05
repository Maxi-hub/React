import { Link } from 'react-router-dom';
import '../style.scss';

export const BreadCrumbs = () => {
    return (
        <div className="new-arrivals center">
            <h1 className="new-arrivals__title">New Arrivals</h1>
            <nav className="breadcrumbs__box">
                <ul className="breadcrumbs__ul">
                    <li className="breadcrumbs__li">
                        <Link className='breadcrumbs__link' to='/product'>Home</Link>
                    </li>
                    <li className="breadcrumbs__li">
                        <Link className='breadcrumbs__link' to='/product'>Men</Link>
                    </li>
                    <li className="breadcrumbs__li">
                        <Link className='breadcrumbs__link' to='#'>New Arrivals</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
