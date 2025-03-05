import { Link } from 'react-router-dom'
import '../../style.scss';

export const BucketBox = ({ products }) => {
    return (
        <div className="heading__bucket-box">
            {products.map((item, index) => (
                <div className="heading__bucket-items">
                    <Link to='/single_page'>
                        <img key={index} className="heading__bucket-item" src={item.itemImgSrc} alt={item.itemImgAlt} />

                    </Link>
                    <div className="heading__bucket-text">
                        <h5 className="heading__bucket-title">Rebox Zane</h5>
                        <img className="heading__bucket-stars" src="img/stars.png" alt="Звездный рейтинг товаров" />
                        <p className="heading__bucket-price">1 x $250</p>
                    </div>
                    <img className="heading__bucket-close" src="img/buttonClose.png" alt="Изображение крестика" />
                </div>
            ))}
            <div className="heading__bucket-total">
                <p>TOTAL</p>
                <p>$500.00</p>
            </div>
            <Link className="heading__checkout" to="/checkout">Checkout</Link>
            <Link className="heading__goToCart" to="/shopping_cart">Go to cart</Link>
        </div >
    )
}
