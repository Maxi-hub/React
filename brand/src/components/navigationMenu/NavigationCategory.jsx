import { Link } from 'react-router-dom'

export const NavigationCategory = ({ children, title, className }) => {
    return  (
        <li className={`top__list ${className}`}>
            <Link className="top__link" to='/product'>{title}</Link>
            <div className="top__box">
                {children}
            </div>
        </li>
    )
}
