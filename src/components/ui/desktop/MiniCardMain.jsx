import PlayIcon from "../../../assets/icons/PlayIcon";
import { useNavigate } from "react-router-dom";

const MiniCardMain = ({ img, nombre, type, id }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (type === "artist") {
            navigate(`/artist/${id}`);
        } else if (type === "playlist") {
            navigate(`/playlist/${id}`);
        }
    }

    return (
        <div onClick={handleClick} className="flex items-center relative bg-bg-mini-card hover:bg-bg-mini-card-hover min-h-12 min-w-40 rounded-sm cursor-pointer group">
            <div className="h-12 w-12">
                <img src={img} alt={nombre} className="rounded-l-sm" />
            </div>
            <div className="ml-2">
                <p className="font-bold text-sm">{nombre}</p>
                <div className="absolute right-0 top-0 translate-y-2 translate-x-[-5px] opacity-0 group-hover:opacity-100 hover:scale-[1.04] transition-opacity duration-200">
                    <button className="bg-spotify rounded-full shadow-lg p-1 cursor-pointer">
                        <span>
                            <PlayIcon className="svg text-black p-[2px]" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MiniCardMain;