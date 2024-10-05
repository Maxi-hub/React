import { Link } from 'react-router-dom';
import '../style.scss';
const images = require.context('../img', true, /\.(jpg|png|svg)$/);

const fotos = [
    {
        'img': 'item1.jpg',
        'title': 'MANGO PEOPLE T-SHIRT',
        'price': 50,
    },
    {
        'img': 'item2.jpg',
        'title': 'MANGO PEOPLE T-SHIRT',
        'price': 88,
    },
    {
        'img': 'item3.jpg',
        'title': 'MANGO PEOPLE T-SHIRT',
        'price': 150,
    },
    {
        'img': 'item4.jpg',
        'title': 'MANGO PEOPLE T-SHIRT',
        'price': 125,
    },
    {
        'img': 'item5.jpg',
        'title': 'MANGO PEOPLE T-SHIRT',
        'price': 70,
    },
    {
        'img': 'item6.jpg',
        'title': 'MANGO PEOPLE T-SHIRT',
        'price': 75,
    },
    {
        'img': 'item7.jpg',
        'title': 'MANGO PEOPLE T-SHIRT',
        'price': 142,
    },
    {
        'img': 'item8.jpg',
        'title': 'MANGO PEOPLE T-SHIRT',
        'price': 111,
    },
    {
        'img': 'item4.jpg',
        'title': 'MANGO PEOPLE T-SHIRT',
        'price': 125,
    },
];

export const ClosesItems = () => {
    return (
        fotos.map((item) => (
            <div className="closes__items">
                <Link className="closes__link" to="/product">
                    <img className="closes__items-img" src={images(`./${item.img}`)} alt="" />
                    <div className="closes__items-text">
                        <p className="closes__items-title">{item.title}</p>
                        <p className="closes__price">${item.price}</p>
                    </div>
                </Link>
                <div className="add-box">
                    <a href="#bucket" 
                    className="add"
                    onClick={(e) => {
                        e.preventDefault();
                        const bucketElement = document.getElementById('bucket');
                        if (bucketElement) {
                          bucketElement.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}>
                        <img className="add-img" src={images('./bucket_white.png')} alt="" />
                        <p className="add-txt">Add to Cart</p>
                    </a>
                    <div className="hover-box">
                        <a href="#" className="refresh">
                            <img src={images('./arrow_loop.png')} alt="" />
                        </a>
                        <a href="#" className="liked">
                            <img src={images('./heart.png')} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        ))
    )
}
