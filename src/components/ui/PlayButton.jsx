import PlayIcon from "../../assets/icons/PlayIcon";

const PlayButton = ({ onClick }) => {
    return(
        <div className="absolute right-0 bottom-0 translate-y-0 translate-x-[-5px] opacity-0 group-hover:opacity-100 hover:scale-[1.05] hover:brightness-110 transition-opacity duration-200">
            <button onClick={onClick} className="bg-spotify rounded-full shadow-lg p-1 cursor-pointer">
                <span>
                    <PlayIcon className="w-9 h-9 text-black p-2" />
                </span>
            </button>
        </div>
    )
}

export default PlayButton;