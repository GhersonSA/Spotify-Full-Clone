import PlayButton from "../PlayButton";

const ArtistCard = ({ img, nombre, rounded = "rounded-sm", subtitle = ""}) => {
    return(
        <div className="main-card-mobile group">
            <div className="main-card-element">
                <div className="relative">
                    <img src={img} alt="Album Art" className={`h-[152px] w-[152px] object-cover ${rounded}`}/>
                    <PlayButton />
                </div>
                <div className="flex flex-col">
                    <a href="" className="hover:underline">
                        <span className="main-card-text">{nombre}</span>
                    </a>
                    {subtitle && <span className="text-sm text-secondary font-medium">{subtitle}</span>}
                </div>
            </div>
        </div>
    )
}

export default ArtistCard;