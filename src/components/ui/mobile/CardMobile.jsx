const CardMobile = ({ img, nombre}) => {
    return (
        <div className="main-card-mobile">
            <div className="main-card-element">
                <img src={img} alt="Album Art" className="main-card-img"/>
                <div className="leading-tight">
                    <a href="">
                        <span className="main-card-text">{nombre}</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CardMobile;