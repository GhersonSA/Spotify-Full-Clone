import { Link } from "react-router-dom";

import SpotifyIcon from "../../../assets/icons/SpotifyIcon";
import HomeIcon from "../../../assets/icons/HomeIcon";
import SearchBarIcon from "../../../assets/icons/SearchBarIcon";
import LibraryIcon from "../../../assets/icons/LibraryIcon";
import MarkIcon from "../../../assets/icons/MarkIcon";
import DownloadIcon from "../../../assets/icons/DownloadIcon";
import NotificationIcon from "../../../assets/icons/NotificationIcon";
import FriendlyIcon from "../../../assets/icons/FriendlyIcon";

const HeaderDesktop = () => {
    return (
        <header className="h-16 w-full flex items-center justify-between relative bg-black">
            <div className="h-[72px] w-[72px] flex items-center justify-center">
                <a href="https://ghersonsa.com/projects/proyecto-2" target="_blank" aria-label="GhersonSA/spotify-full-clone" className="m-5">
                    <SpotifyIcon className="w-8 h-8" />
                </a>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <div className="flex items-center justify-center">
                    <Link to="/" className="h-12 w-12 flex justify-center items-center bg-bg-secondary hover:bg-hover hover:scale-[1.04] transition-all duration-200 ease-in-out cursor-pointer rounded-full">
                        <span>
                            <HomeIcon className="svg" />
                        </span>
                    </Link>
                    <div className="w-[490px] h-12 px-2">
                        <form action="" className="flex items-center bg-bg-secondary border border-bg-secondary hover:bg-hover hover:border hover:border-secondary transition-colors duration-200 ease-in-out cursor-pointer rounded-full">
                            <div className="h-12 w-12 flex items-center justify-center">
                                <button className="px-3">
                                    <SearchBarIcon className="svg text-secondary hover:text-white" />
                                </button>
                            </div>
                            <div className="w-[474px] h-12">
                                <input type="search" placeholder="¿Qué quieres reproducir?" className="py-3 pr-24 w-full"/>
                                <div className="absolute hidden">
                                    <span>
                                        ¿Qué quieres reproducir?
                                    </span>
                                    <span>
                                        <kbd>Ctrl</kbd>
                                        <kbd>K</kbd>
                                    </span>
                                </div>
                                <div className="hidden">
                                    <div>
                                        <div>
                                            <p>Búsquedas recientes</p>
                                            <ul>
                                                <div>
                                                    <div></div>
                                                    <div></div>
                                                </div>
                                            </ul>
                                            <button>
                                                Borrar búsquedas recientes
                                            </button>
                                        </div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className="hidden">
                                    <span>
                                        <MarkIcon className="svg text-secondary" />
                                    </span>
                                </button>
                                <div className="flex justify-center items-center px-3 ">
                                    <button className="pr-1 pl-3 border-l-1 text-secondary">
                                        <span>
                                            <LibraryIcon className="svg text-secondary hover:text-white hover:scale-[1.04] transition-all duration-200 ease-in-out cursor-pointer" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="flex flex-end items-center gap-2">
                    <button className="font-bold h-8 text-sm py-1 px-4 bg-white text-black rounded-full hover:scale-[1.04] transition-all duration-200 ease-in-out cursor-pointer">
                        <span>Descubrir Premium</span>
                    </button>
                    <a href="" className="flex items-center justify-center text-secondary font-bold text-sm py-1 pr-4 pl-9 relative hover:text-white hover:scale-[1.02] transition-all duration-200 ease-in-out cursor-pointer">
                        <span className="absolute left-3 top-1.5">
                            <DownloadIcon className="svg text-sm" />
                        </span>
                        <span>Instalar app</span>
                    </a>
                    <div className="flex items-center justify-center gap-2 px-2">
                        <button className="flex items-center justify-center h-8 w-8 text-secondary hover:text-white hover:scale-[1.04] transition-all duration-200 ease-in-out cursor-pointer relative">
                            <NotificationIcon className="svg absolute bottom-0 left-2" />
                        </button>
                        <button className="flex items-center justify-center h-8 w-8 text-secondary hover:text-white hover:scale-[1.04] transition-all duration-200 ease-in-out cursor-pointer relative">
                            <FriendlyIcon className="svg absolute bottom-0 left-2" />
                        </button>
                    </div>
                    <button className="flex justify-center items-center h-12 w-12 bg-purple-600/30 rounded-full hover:scale-[1.04] transition-all duration-200 ease-in-out cursor-pointer">
                        <span className="flex items-center justify-center bg-purple-700/50 text-black text-sm font-bold rounded-full h-9 w-9">
                            GS
                        </span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default HeaderDesktop;