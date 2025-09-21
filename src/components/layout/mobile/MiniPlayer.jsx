import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PlayerContext } from "../../../context/PlayerContext";

import FavoriteIcon from "../../../assets/icons/FavoriteIcon";
import PlayIcon from "../../../assets/icons/PlayIcon";
import PauseIcon from "../../../assets/icons/PauseIcon";

const MiniPlayer = () => {
    const { currentTrack, isPlaying, togglePlay, progress, seek, formatTime, nextTrack, prevTrack, volume, isMuted, toggleMute, changeVolume, isShuffling, toggleShuffle, toggleRepeat, repeatMode, audioRef } = useContext(PlayerContext);

    return (
        <NavLink to="/lyrics">
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
                <button onClick={togglePlay} className="px-[6px]">
                    {isPlaying ? (
                        <PauseIcon className="svg translate-y-1 translate-x-[4px]" />
                    ) : (
                        <PlayIcon className="svg" />
                    )}
                </button>
            </div>
            <div className="absolute overflow-hidden left-0 right-0 bg-[#525252]/30 w-full h-[2px] rounded-[2px] bottom-[0px] px-2">
                <div className="bg-white/40 h-full rounded-full">.</div>
            </div>
            <div className="absolute overflow-hidden left-0 right-0 bg-[#525252]/30 w-full h-[2px] rounded-[2px] bottom-[0px] px-2"
                onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickPosition = e.clientX - rect.left;
                    const clickPercent = clickPosition / rect.width;
                    seek(clickPercent * audioRef.current.duration);
                }} >
                <div className="bg-white rounded-full h-full hover:bg-spotify cursor-pointer"
                    style={{width: `${(progress / (audioRef.current?.duration || 1)) * 100}%`}}></div>
            </div>
        </div>
        </NavLink>
    )
}

export default MiniPlayer;