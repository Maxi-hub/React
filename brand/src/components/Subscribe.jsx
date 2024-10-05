import '../style.scss';
const images = require.context('../img', true, /\.(jpg|png|svg)$/);

export const Subscribe = () => {
  return (
    <div className="top-bottom center">
    <div className="top-bottom__reviews">
      <div className="top-bottom__reviews-img"><img src={images('./review.png')} alt="" /></div>
      <div className="top-bottom__text">
        <p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam
          condimentum mattis neque sed pretium”</p>
        <p className="top-bottom__person"><span className="top-bottom__name">Bin Burhan</span><br />Dhaka, Bd</p>
        <div>
          <img className="top-bottom__scroll" src={images('./line_white.png')} alt="" />
          <img className="top-bottom__scroll" src={images('./line_pink.png')} alt="" />
          <img className="top-bottom__scroll" src={images('./line_white.png')} alt="" />
        </div>
      </div>
    </div>
    <div className="subscribe">
      <p>Subscribe<span className="subscribe__text"><br />FOR OUR NEWLETTER AND PROMOTION</span></p>
      <button className="subscribe__button">
        <input type="text" name="email" id="email" placeholder="Enter Your Email" />
        <label className="subscribe__label" htmlFor="email">Subscribe</label>
      </button>
    </div>
  </div>
  )
}
