import '../style.scss';
const images = require.context('../img', true, /\.(jpg|png|svg)$/);

export const Information = () => {
  return (
    <div className="middle-bottom center">
    <div className="middle-bottom__about">
      <div className="heading__logo">
        <a className="heading__logo-link" href="#">
          <img src={images('./logo1.jpg')} alt="Logo" />
          <div className="heading__logo-text">
            <p className="heading__logoname">BRAN<span className="heading__logoname-letter">D</span>
            </p>
          </div>
        </a>
      </div>
      <p className="middle-bottom__about-text">Objectively transition extensive data rather than cross functional
        solutions. Monotonectally syndicate
        multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of
        processes and cross-unit partnerships.<br/>
        Efficiently plagiarize 24/365 action items and focused infomediaries.
        Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.</p>
    </div>
    <nav className="middle-bottom__item">
      <h3 className="middle-bottom__title">COMPANY</h3>
      <ul>
        <li className="middle-bottom__list"><a className="middle-bottom__link" href='#'>Home</a></li>
        <li className="middle-bottom__list"><a className="middle-bottom__link" href="#">Shop</a></li>
        <li className="middle-bottom__list"><a className="middle-bottom__link" href="#">About</a></li>
        <li className="middle-bottom__list"><a className="middle-bottom__link" href="#">How It Works</a></li>
        <li className="middle-bottom__list"><a className="middle-bottom__link" href="#">Contact</a></li>
      </ul>
    </nav>
    <nav className="middle-bottom__item">
      <h3 className="middle-bottom__title">INFORMATION</h3>
      <ul>
        <li className="middle-bottom__list"><a className="middle-bottom__link" href="#">Tearms & Condition</a></li>
        <li className="middle-bottom__list"><a className="middle-bottom__link" href="#">Privacy Policy</a></li>
        <li className="middle-bottom__list"><a className="middle-bottom__link" href="#">How to Buy</a></li>
        <li className="middle-bottom__list"><a className="middle-bottom__link" href="#">How to Sell</a></li>
        <li className="middle-bottom__list"><a className="middle-bottom__link" href="#">Promotion</a></li>
      </ul>
    </nav>
    <nav className="middle-bottom__item">
      <h3 className="middle-bottom__title">SHOP CATEGORY</h3>
      <ul>
        <li className="middle-bottom__list"><a className="middle-bottom__link" href="#">Men</a></li>
        <li className="middle-bottom__list"><a className="middle-bottom__link" href="#">Women</a></li>
        <li className="middle-bottom__list"><a className="middle-bottom__link" href="#">Child</a></li>
        <li className="middle-bottom__list"><a className="middle-bottom__link" href="#">Apparel</a></li>
        <li className="middle-bottom__list"><a className="middle-bottom__link" href="#">Brows All</a></li>
      </ul>
    </nav>
  </div>
  )
}
