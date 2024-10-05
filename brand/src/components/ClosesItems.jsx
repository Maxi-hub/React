import { Link } from 'react-router-dom';
import '../style.scss';
import { useEffect, useState } from 'react';
const images = require.context('../img', true, /\.(jpg|png|svg)$/);

const fotos = [
    {
        'img': 'item1.jpg',
        'title': 'MANGO PEOPLE T-SHIRT',
        'size': 'L',
        'price': 50,
    },
    {
        'img': 'item2.jpg',
        'title': 'MANGO PEOPLE T-SHIRT',
        'size': 'XS',
        'price': 88,
    },
    {
        'img': 'item3.jpg',
        'title': 'MANGO PEOPLE T-SHIRT',
        'size': 'XL',
        'price': 150,
    },
    {
        'img': 'item4.jpg',
        'title': 'MANGO PEOPLE T-SHIRT',
        'size': 'L',
        'price': 125,
    },
    {
        'img': 'item5.jpg',
        'title': 'MANGO PEOPLE T-SHIRT',
        'size': 'XS',
        'price': 70,
    },
    {
        'img': 'item6.jpg',
        'title': 'MANGO PEOPLE T-SHIRT',
        'size': 'M',
        'price': 75,
    },
    {
        'img': 'item7.jpg',
        'title': 'MANGO PEOPLE T-SHIRT',
        'size': 'L',
        'price': 142,
    },
    {
        'img': 'item8.jpg',
        'title': 'MANGO PEOPLE T-SHIRT',
        'size': 'XL',
        'price': 111,
    },
    {
        'img': 'item4.jpg',
        'title': 'MANGO PEOPLE T-SHIRT',
        'size': 'S',
        'price': 125,
    },
];

export const ClosesItems = ({ checkedValues }) => {
    const [newFotos, setNewFotos] = useState(fotos);
    useEffect(() => {
        const filteredFotos = checkedValues.length === 0 ? fotos : fotos.filter(foto => checkedValues.includes(foto.size));
        setNewFotos(filteredFotos);
    }, [checkedValues]);

    return (
        newFotos.map((item) => (
            <div className="closes__items">
                <Link className="closes__link" to="/product">
                    <img className="closes__items-img" src={images(`./${item.img}`)} alt="" />
                    <div className="closes__items-text">
                        <p className="closes__items-title">{item.title}</p>
                        <p className="closes__price">${item.price}</p>
                    </div>
                </Link>
                <div className="add-box">
                    <Link to="#bucket"
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
                    </Link>
                    <div className="hover-box">
                        <Link to='#' className="refresh">
                            <img src={images('./arrow_loop.png')} alt="" />
                        </Link>
                        <Link to='#' className="liked">
                            <img src={images('./heart.png')} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        ))
    )
}
