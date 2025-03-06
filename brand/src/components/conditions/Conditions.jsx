import '../../style.scss';

export const Conditions = ({imgSrc, imgAlt, title, titleClassName, text}) => {
    return (
        <div className="conditions__item">
            <img src={imgSrc} alt={imgAlt} />
            <h3 className={titleClassName}>{title}</h3>
            <p className="conditions__text">{text}</p>
        </div>
    )
}
