import '../../style.scss';

export const Information = () => {
  const middleBottomNavigation = [
    { title: "COMPANY", category: ["Home", "Shop", "About", "How It Works", "Contact"] },
    { title: "INFORMATION", category: ["Tearms & Condition", "Privacy Policy", "How to Buy", "How to Sell", "Promotion"] },
    { title: "SHOP CATEGORY", category: ["Men", "Women", "Child", "Apparel", "Brows All"] },
  ];

  return (
    <div className="middle-bottom center">
      <div className="middle-bottom__about">
        <div className="heading__logo">
          <a className="heading__logo-link" href="#">
            <img src='img/logo1.jpg' alt="Logo" />
            <div className="heading__logo-text">
              <p className="heading__logoname">BRAN<span className="heading__logoname-letter">D</span>
              </p>
            </div>
          </a>
        </div>
        <p className="middle-bottom__about-text">Objectively transition extensive data rather than cross functional
          solutions. Monotonectally syndicate
          multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of
          processes and cross-unit partnerships.<br />
          Efficiently plagiarize 24/365 action items and focused infomediaries.
          Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.</p>
      </div>
      {middleBottomNavigation.map((item, index) => (
        <nav key={item - index} className="middle-bottom__item">
          <h3 className="middle-bottom__title">{item.title}</h3>
          <ul>
            {(item.category).map((name, index) => (
              <li key={index} className="middle-bottom__list"><a className="middle-bottom__link" href='#'>{name}</a></li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  )
}
