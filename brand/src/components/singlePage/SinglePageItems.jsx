import { Link } from 'react-router-dom';
import '../../style.scss';

export const SinglePageItems = ({classNameImg, imgSrc, title, price, starsImg}) => {
    return (
        <div className="single-page-items__item">
            <Link to="#">
                <div className="single-page-items__img">
                    <img className={classNameImg} src={imgSrc} alt="" />
                </div>
                <div className="single-page-items__text">
                    <p className="single-page-items__name">{title}</p>
                    <div className="single-page-items__block">
                        <p className="single-page-items__price">${price}</p>
                        <img src={starsImg} alt="" />
                    </div>
                </div>
            </Link>
        </div>
    )
}
