import AddIcon from "../../../assets/icons/AddIcon";
import RandomIcon from "../../../assets/icons/RandomIcon";
import ArrowBackIcon from "../../../assets/icons/ArrowBackIcon";
import ArrowNextIcon from "../../../assets/icons/ArrowNextIcon";
import PlayIcon from "../../../assets/icons/PlayIcon";
import RepeatIcon from "../../../assets/icons/RepeatIcon";
import SongViewIcon from "../../../assets/icons/SongViewIcon";
import LyricViewIcon from "../../../assets/icons/LyricViewIcon";
import QueueIcon from "../../../assets/icons/QueueIcon";
import ConnectIcon from "../../../assets/icons/ConnectIcon";
import FullVolumenIcon from "../../../assets/icons/FullVolumenIcon";
import MiniPlayerIcon from "../../../assets/icons/MiniPlayerIcon";
import FullScreenIcon from "../../../assets/icons/FullScreenIcon";

import ButtonPlayerBar from "../../ui/desktop/ButtonPlayerBar";

const PlayerBar = () => {
    return (
        <div className="fixed bottom-0 bg-black h-22 w-full m-[-8px] p-2">
            <aside>
                <div className="flex justify-between items-center">
                    <div className="pl-2 min-w-[180px] w-[30%] h-14 flex justify-start items-center">
                        <div className="flex items-center">
                            <div className="pr-2">
                                <div className="w-14 h-14">
                                    <img src="/images/Pretty-Boy-Dirty-Boy.webp" alt="" className="rounded-lg" />
                                </div>
                            </div>
                            <div className="mx-2 h-[37px] flex flex-col justify-center">
                                <div>
                                    <span className="text-sm hover:underline cursor-pointer">Borro Cassette</span>
                                </div>
                                <div>
                                    <span className="text-secondary text-[12px] hover:underline hover:text-white cursor-pointer">Maluma</span>
                                </div>
                            </div>
                            <div className="mx-2">
                                <button className="hover:scale-[1.04] transition-all duration-200 ease-in-out cursor-pointer group">
                                    <span>
                                        <AddIcon className="h-4 w-4 text-secondary hover:text-white" />
                                    </span>
                                    <span className="svg-tooltip-player-bar">
                                        Añadir a Canciones que te gustan
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[722px] w-2/5">
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex justify-center items-center mb-2 gap-4">
                                <div className="flex-1 flex justify-end items-center gap-2">
                                    <ButtonPlayerBar icon={RandomIcon} tooltip="Activar aleatorio" />
                                    <ButtonPlayerBar icon={ArrowBackIcon} tooltip="Anterior" />
                                </div>
                                <button className="button-svg-playerbar group bg-white rounded-full ">
                                    <span className="flex items-center justify-center ">
                                        <PlayIcon className="svg text-black" />
                                    </span>
                                    <span className="svg-tooltip-player-bar">
                                        Reproducir
                                    </span>
                                </button>
                                <div className="flex-1 flex justify-start items-center gap-2 ml-1.5">
                                    <ButtonPlayerBar icon={ArrowNextIcon} tooltip="Siguiente" />
                                    <ButtonPlayerBar icon={RepeatIcon} tooltip="Activar repetir" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-1 h-[17px]">
                                <div className="text-right w-1/2 text-secondary text-[12px]">
                                    0:00
                                </div>
                                <div className="min-w-[500px] rounded-full">
                                    <div className="overflow-hidden left-0 right-0 bg-[#525252]/30 w-full h-[4px] rounded-[2px] bottom-[0px] px-2">
                                        <div className="bg-white rounded-full h-full hover:bg-spotify cursor-pointer">.</div>
                                    </div>
                                </div>
                                <div className="text-left w-1/2 text-secondary text-[12px]">
                                    3:17
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="min-w-[180px] w-[30%] flex justify-end items-center">
                        <div className="flex justify-end items-center flex-grow-1">
                            <ButtonPlayerBar icon={SongViewIcon} tooltip="Vista Sonando" />
                            <ButtonPlayerBar icon={LyricViewIcon} tooltip="Letra" />
                            <ButtonPlayerBar icon={QueueIcon} tooltip="Cola" />
                            <ButtonPlayerBar icon={ConnectIcon} tooltip="Conectar a un dispositivo" />
                            <div className="mr-1 flex justify-center items-center">
                                <ButtonPlayerBar icon={FullVolumenIcon} tooltip="Silenciar" />
                                <div className="mt-0.5 min-w-[110px] rounded-full">
                                    <div className="overflow-hidden left-0 right-0 bg-[#525252]/30 w-full h-[4px] rounded-[2px] bottom-[0px] px-2">
                                        <div className="bg-white rounded-full h-full hover:bg-spotify cursor-pointer">.</div>
                                    </div>
                                </div>
                            </div>
                            <button className="button-svg-playerbar group">
                                <span className="flex items-center justify-center">
                                    <MiniPlayerIcon className="svg-player-bar" />
                                </span>
                                <span className="svg-tooltip-player-bar-end">
                                    Abrir el Minirreproductor
                                </span>
                            </button>
                            <button className="button-svg-playerbar group">
                                <span className="flex items-center justify-center">
                                    <FullScreenIcon className="svg-player-bar" />
                                </span>
                                <span className="svg-tooltip-player-bar-end">
                                    Abrir la pantalla completa
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default PlayerBar;