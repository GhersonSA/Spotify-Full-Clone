import FavoriteIcon from "../../assets/icons/FavoriteIcon";
import PlayIcon from "../../assets/icons/PlayIcon";

const MiniPlayer = () => {
    return (
        <div className="relative flex justify-between gap-2 rounded-[6px] h-14 mx-2 p-2 /*bg-[hsla(0,0%,33%,.3)]*/ bg-[#c55319]">
            <div className="flex gap-2">
                <img src="https://i1.sndcdn.com/artworks-JpSsYnr6AKfg-0-t500x500.jpg" alt="Album Art" className="h-10 w-10 rounded-sm "/>
                <div className="text-[13px]">
                    <div>
                        <span className="font-bold">LUNA</span>
                    </div>
                    <div>
                        <span className="">Feid, ATL Jacob</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 w-[88px] h-10 justify-end items-center">
                <button className="p-2">
                    <FavoriteIcon className="svg" />
                </button>
                <button className="px-2">
                    <PlayIcon className="svg" />
                </button>
            </div>
            <div className="absolute overflow-hidden left-0 right-0 bg-[#525252]/30 w-full h-[2px] rounded-[2px] bottom-[0px] px-2">
                <div className="bg-white">.</div>
            </div>
        </div>
    )
}

export default MiniPlayer;