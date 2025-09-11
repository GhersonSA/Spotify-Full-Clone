import { useState } from "react";
import SettingsIcon from "../../../assets/icons/SettingsIcon";
import MarkIcon from "../../../assets/icons/MarkIcon";
import InclinedArrowIcon from "../../../assets/icons/InclinedArrowIcon";
import SpotifyIcon from "../../../assets/icons/SpotifyIcon";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header>
            {/* Mobile and Tablet Header */}
            <div className="flex justify-between items-center h-[72px] p-3 bg-black text-white">
                <a href="https://ghersonsa.com/projects/proyecto-2" target="_blank" aria-label="GhersonSA/spotify-full-clone" className="ml-1">
                    <SpotifyIcon className="svg" />
                </a>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-full hover:bg-white/10 transition">
                    <span>
                        <SettingsIcon className="svg"/>
                    </span>
                </button>
            </div>
            {isMenuOpen && (
                <aside className="fixed top-0 right-0 w-full h-full bg-black text-white z-10">
                    <div className="flex flex-col flex-grow-1 items-start px-10 pt-14">
                        <button className="header-container-py-2 gap-2">
                            <span className="header-text-xl">Ver Cuenta</span>
                            <InclinedArrowIcon className="svg ml-2"/>
                        </button>
                        <button className="header-container-py-2">
                            <span className="header-text-xl">Perfil</span>
                        </button>
                        <button className="header-container-py-2">
                            <span className="header-text-xl">Cerrar Sesión</span>
                        </button>
                        <div className="my-5">
                            <span className="font-bold">___</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <button className="header-text-sm">
                                <span>Premium</span>
                            </button>
                            <button className="header-text-sm">
                                <span>Asistencia</span>
                            </button>
                            <button className="header-text-sm">
                                <span>Descargar</span>
                            </button>
                            <button className="header-text-sm">
                                <span>Privacidad</span>
                            </button>
                            <button className="header-text-sm">
                                <span>Condiciones</span>
                            </button>
                        </div>
                    </div>
                    <h3 className="text-center text-sm text-secondary mt-30 w-full">
                        © 2025 Spotify Full Clone by&nbsp;
                        <a href="https://ghersonsa.com/" target="_blank" aria-label="GhersonSA" className="underline">
                            GhersonSA
                        </a>
                    </h3>
                    <a href="https://github.com/GhersonSA" target="_blank" aria-label="GitHub" className="flex justify-center items-center mt-2 text-2xl cursor-pointer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <button onClick={() => setIsMenuOpen(false)} className="absolute h-6 w-6 top-4 right-4 cursor-pointer">
                        <MarkIcon className="svg"/>
                    </button>
                </aside>
            )}
        </header>
    )
}

export default Header;