import '../style.scss';
const images = require.context('../img', true, /\.(jpg|png|svg)$/);

export const Footer = () => {
    return (
        <footer className="footer center">
            <p className="footer__text"> &copy;2022 Brand All Rights Reserved.</p>
            <div className="footer__social">
                <div className="footer__icons">
                    <a href="https://www.facebook.com/" target="_blank">
                        <img className="footer__icons-img" src={images('./Facebook.svg')} alt="" />
                    </a>
                </div>
                <div className="footer__icons">
                    <a href="https://www.twitter.com" target="_blank">
                        <img className="footer__icons-img" src={images('./twitter.svg')} alt="" />
                    </a>
                </div>
                <div className="footer__icons">
                    <a href="https://www.instagram.com" target="_blank">
                        <img className="footer__icons-img" src={images('./instagram.svg')} alt="" />
                    </a>
                </div>
                <div className="footer__icons">
                    <a href="https://ru.pinterest.com/" target="_blank">
                        <img className="footer__icons-img" src={images('./pinterest.svg')} alt="" />

                    </a>
                </div>
                <div className="footer__icons">
                    <a href="https://plus.google.com" target="_blank">
                        <img className="footer__icons-img" width="22px" height="22px" src={images('./google-plus.svg')} alt="" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
