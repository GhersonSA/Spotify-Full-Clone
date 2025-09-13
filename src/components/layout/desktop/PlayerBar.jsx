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

const PlayerBar = () => {
    return (
        <div className="fixed bottom-0 bg-black h-22 w-full m-[-8px] p-2">
            <aside>
                <div className="flex justify-between items-center">
                    <div className="pl-2 min-w-[180px] w-[30%] h-14 flex justify-start items-center">
                        <div className="flex items-center">
                            <div className="pr-2">
                                <div className="w-14 h-14">
                                    <img src="/images/Ferxxocalipsis.webp" alt="" className="rounded-lg" />
                                </div>
                            </div>
                            <div className="mx-2 h-[37px] flex flex-col justify-center">
                                <div>
                                    <span className="text-sm hover:underline cursor-pointer">LUNA</span>
                                </div>
                                <div>
                                    <span className="text-secondary text-[12px] hover:underline hover:text-white cursor-pointer">Feid, ATL Jacob</span>
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
                                    <button className="button-svg-playerbar group">
                                        <span className="flex items-center justify-center">
                                            <RandomIcon className="svg-player-bar" />
                                        </span>
                                        <span className="svg-tooltip-player-bar">
                                            Activar aleatorio
                                        </span>
                                    </button>
                                    <button className="button-svg-playerbar group">
                                        <span className="flex items-center justify-center">
                                            <ArrowBackIcon className="svg-player-bar" />
                                        </span>
                                        <span className="svg-tooltip-player-bar">
                                            Anterior
                                        </span>
                                    </button>
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
                                    <button className="button-svg-playerbar group">
                                        <span className="flex items-center justify-center">
                                            <ArrowNextIcon className="svg-player-bar" />
                                        </span>
                                        <span className="svg-tooltip-player-bar">
                                            Siguiente
                                        </span>
                                    </button>
                                    <button className="button-svg-playerbar group">
                                        <span className="flex items-center justify-center">
                                            <RepeatIcon className="svg-player-bar" />
                                        </span>
                                        <span className="svg-tooltip-player-bar">
                                            Activar repetir
                                        </span>
                                    </button>
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
                            <button className="button-svg-playerbar group">
                                <span className="flex items-center justify-center">
                                    <SongViewIcon className="svg-player-bar" />
                                </span>
                                <span className="svg-tooltip-player-bar">
                                    Vista Sonando
                                </span>
                            </button>
                            <button className="button-svg-playerbar group">
                                <span className="flex items-center justify-center">
                                    <LyricViewIcon className="svg-player-bar" />
                                </span>
                                <span className="svg-tooltip-player-bar">
                                    Letra
                                </span>
                            </button>
                            <button className="button-svg-playerbar group">
                                <span className="flex items-center justify-center">
                                    <QueueIcon className="svg-player-bar" />
                                </span>
                                <span className="svg-tooltip-player-bar">
                                    Cola
                                </span>
                            </button>
                            <button className="button-svg-playerbar group">
                                <span className="flex items-center justify-center">
                                    <ConnectIcon className="svg-player-bar" />
                                </span>
                                <span className="svg-tooltip-player-bar">
                                    Conectar a un dispositivo
                                </span>
                            </button>
                            <div className="mr-1 flex justify-center items-center">
                                <button className="button-svg-playerbar group">
                                    <span className="flex justify-center items-center">
                                        <FullVolumenIcon className="svg-player-bar" />
                                    </span>
                                    <span className="svg-tooltip-player-bar">
                                        Silenciar
                                    </span>
                                </button>
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