import { useNavigate } from "react-router-dom";
import SmartPlayButton from "../SmartPlayButton";

const CardDesktop = ({ img, nombre, rounded = "rounded-sm", subtitle = "", type, id }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (type === "artist") {
            navigate(`/artist/${id}`);
        } else if (type === "album") {
            navigate(`/album/${id}`);
        } else if (type === "playlist") {
            navigate(`/playlist/${id}`);
        } else if (type === "track") {
            navigate(`/track/${id}`);
        }
    }

    return(
        <div onClick={handleClick} className="main-card-mobile group">
            <div className="main-card-element">
                <div className="relative">
                    <img src={img} alt={nombre} className={`h-[152px] w-[152px] object-cover ${rounded}`}/>
                    <SmartPlayButton type={type} id={id} />
                </div>
                <div className="flex flex-col">
                    <p className="hover:underline">
                        <span className="main-card-text">{nombre}</span>
                    </p>
                    {subtitle && <span className="text-sm text-secondary font-medium">{subtitle}</span>}
                </div>
            </div>
        </div>
    )
}

export default CardDesktop;