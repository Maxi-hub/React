import { Link } from 'react-router-dom';
import '../../style.scss';
import { BucketBox } from './BucketBox';

export const HeadingCenter = () => {
    const products = [
        { itemImgSrc: "img/bucketMan.png", itemImgAlt: "Изображение мужского товара" },
        { itemImgSrc: "img/bucketWoman.png", itemImgAlt: "Изображение женского товара" },
    ];

    const browseContent = [
        { name: "Women", content: ["Dresses", "Tops", "Sweaters/Knits", "Jackets/Coats", "Blazers", "Denim", "Leggings/Pants", "Skirts/Shorts", "Accessories"] },
        { name: "Men", content: ["Tees/Tank tops", "Shirts/Polos", "Sweaters", "Sweatshirts/Hoodies", "Blazers", "Jackets/vests"] },
    ];

    return (
        <div className="heading center">
            <div className="heading__left">
                <div className="heading__logo">
                    <Link className="heading__logo-link" to='/'>
                        <img src='img/logo1.jpg' alt="Logo" />
                        <div className="heading__logo-text">
                            <p className="heading__logoname">BRAN<span className="heading__logoname-letter">D</span>
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="heading__browse">
                    <details className="heading__details">
                        <summary className="heading__browse-summery">
                            Browse<img className="heading__browse-img" src='img/arrowGreyDown.png' alt="Серая стрелка вниз" />
                        </summary>
                        <div className="heading__browse-box">
                            {browseContent.map((item, index) => (
                                <div className="heading__browse-content">
                                    <h4 className="heading__browse-title">{item.name}</h4>
                                    {(item.content).map((clothes, index) => (
                                        <a key={index} href="#" className="heading__browse-item">{clothes}</a>
                                    ))}
                                </div>
                            ))}
                        </div> 
                    </details>
                </div>
                <input id="search" type="text" className="text_area" placeholder="Search for Item..." />
                <label className="heading__search-box" htmlFor="search"><img className="heading__search-img" src='img/search.png' alt="search" /></label>
            </div>
            <div className="heading__right">
                <div className="heading__bucket">
                    <a id="bucket" href='#'>
                        <img className="heading__bucket-img" src='img/bucketBlack.png' alt="Торговая тележка" />
                    </a>
                    <BucketBox products={products} />
                </div>
                <div className="heading__account">
                    <details className="heading__account-details">
                        <summary className="heading__account-summery">
                            My Account<img src="img/arrowWhite.png" alt="Белая стрелка вниз" />
                        </summary>
                        <p className="heading__account-text">Lorem ipsum, dolor. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Nulla, mollitia deleniti delectus nostrum ea, assumenda eius magnam
                            aperiam impedit labore reprehenderit, cupiditate minus? Obcaecati odit explicabo nostrum
                            delectus, doloribus eos?</p>
                    </details>
                </div>
            </div>
        </div>
    )
}
