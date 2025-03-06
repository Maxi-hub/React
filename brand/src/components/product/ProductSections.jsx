import { Link } from 'react-router-dom';
import '../../style.scss';

export const ProductSections = ({categoryList, sectionName, open}) => {
    return (
        <details className="filter__item" open={open}>
            <summary className="filter__head">{sectionName}</summary>
            <div className="filter__link-box">
                {categoryList.map(item =>
                    <Link to="#" className="filter__link">{item}</Link>
                )}
            </div>
        </details>
    )
};
