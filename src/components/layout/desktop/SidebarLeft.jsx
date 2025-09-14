import CreateIcon from '../../../assets/icons/CreateIcon';
import ExpandIcon from '../../../assets/icons/ExpandIcon';
import SearchBarIcon from '../../../assets/icons/SearchBarIcon';
import ListIcon from '../../../assets/icons/ListIcon';
import PinIcon from '../../../assets/icons/PinIcon';
const SidebarLeft = () => {
    return (
        <nav className="scrollbar-hide overflow-y-scroll h-full">
            <div>
                <header className="pt-3 px-4 pb-2">
                    <div className="flex justify-between items-center">
                        <div>
                            <button>
                                <span className="text-[16px] font-bold">Tu biblioteca</span>
                            </button>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <button className="bg-bg-tertiary hover:bg-hover-2 flex items-center justify-center py-1 px-4 rounded-full cursor-pointer">
                                <CreateIcon className="svg-player-bar" />
                                <span className="text-sm font-bold">Crear</span>
                            </button>
                            <button className="p-0.5 hover:rounded-full hover:bg-bg-tertiary cursor-pointer">
                                <span>
                                    <ExpandIcon className="svg-player-bar translate-x-1" />
                                </span>
                            </button>
                        </div>
                    </div>
                </header>
                <div className="py-2 px-4">
                    <div className="flex items-center gap-2">
                        <div className="py-1 px-3 rounded-full bg-bg-tertiary hover:bg-hover-2 cursor-pointer">
                            <span className="text-sm font-bold">Listas</span>
                        </div>
                        <div className="py-1 px-3 rounded-full bg-bg-tertiary hover:bg-hover-2 cursor-pointer">
                            <span className="text-sm font-bold">Artistas</span>
                        </div>
                        <div className="py-1 px-3 rounded-full bg-bg-tertiary hover:bg-hover-2 cursor-pointer">
                            <span className="text-sm font-bold">Álbumes</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-[1fr_12px] w-full pt-[2px]">
                <div className="px-2">
                    <div className="flex justify-between items-center pb-2">
                        <div>
                            <input type="text" className="hidden" />
                            <div className="hidden"></div>
                            <button className="hover:bg-bg-tertiary p-2 rounded-full cursor-pointer">
                                <SearchBarIcon className="w-4 h-4 text-secondary hover:text-white" />
                            </button>
                        </div>
                        <button className="flex justify-center items-center gap-1 hover:scale-[1.04] transition-all duration-200 ease-in-out cursor-pointer">
                            <span className="text-sm text-secondary hover:text-white font-bold">Recientes</span>
                            <span>
                                <ListIcon className="svg-player-bar translate-x-1" />
                            </span>
                        </button>
                    </div>
                    <div className="flex items-center gap-3 px-2 py-2 hover:bg-bg-tertiary rounded-lg cursor-pointer">
                        <div>
                            <img src="/images/Ferxxocalipsis.webp" alt="" className="w-12 h-12 rounded-lg"/>
                        </div>
                        <div>
                            <span className="font-semibold">Canciones que te gustan</span>
                            <div className="flex">
                                <span>
                                    <PinIcon className="w-5 h-5 text-spotify translate-y-1" />
                                </span>
                                <span className="text-secondary text-sm font-medium">Lista · 1 canción</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#ffffff4c] w-3 h-[148px] rounded-none cursor-pointer"></div>
            </div>
        </nav>
    )
}

export default SidebarLeft;