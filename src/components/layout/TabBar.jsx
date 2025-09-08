import MiniPlayer from "./MiniPlayer";

import HomeIcon from "../../assets/icons/HomeIcon";
import SearchBarIcon from "../../assets/icons/SearchBarIcon";
import YourLibraryIcon from "../../assets/icons/YourLibraryIcon";
import SpotifyIcon from "../../assets/icons/SpotifyIcon";

const TabBar = () => {
    return (
        <div className="fixed bottom-0 w-full h-32 flex flex-col text-white lg:hidden">
            <MiniPlayer />
            <div className="h-18 flex items-center gap-1 bg-black text-center text-[11px]">
                <a href="" className="tabbar-a">
                    <HomeIcon className="svg text-transparent stroke-1 hover:stroke-2" />  
                    Inicio
                </a>
                <a href="" className="tabbar-a">
                    <SearchBarIcon className="svg" />
                    Buscar
                </a>
                <a href="" className="tabbar-a">
                    <YourLibraryIcon className="svg" />
                    Tu Biblioteca
                </a>
                <a href="" className="tabbar-a">
                    <SpotifyIcon className="svg" />
                    Conseguir app
                </a>
            </div>
        </div>
    )
}

export default TabBar;