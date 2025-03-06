import { Link } from 'react-router-dom';
import '../../style.scss';

export const Footer = () => {
    const icons = [
        { link: "https://www.facebook.com/", src: 'img/facebook.svg', alt: "Логотип Facebook" },
        { link: "https://www.twitter.com", src: 'img/twitter.svg', alt: "Логотип Twitter" },
        { link: "https://www.instagram.com", src: 'img/instagram.svg', alt: "Логотип Instagram" },
        { link: "https://ru.pinterest.com/", src: 'img/pinterest.svg', alt: "Логотип Pinterest" },
        { link: "https://plus.google.com", src: 'img/googlePlus.svg', alt: "Логотип Google" },
    ];

    return (
        <footer className="footer center">
            <p className="footer__text"> &copy;2022 Brand All Rights Reserved.</p>
            <div className="footer__social">
                {
                    icons.map((item, index) => (
                        <div key={index} className="footer__icons">
                            <Link to={item.link} target="_blank">
                                <img className="footer__icons-img" src={item.src} alt={item.alt} />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </footer>
    )
}
