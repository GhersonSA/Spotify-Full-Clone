import SliderCloseIcon from "../../../assets/icons/SliderCloseIcon";
import PointsIcon from "../../../assets/icons/PointsIcon";
import ExpandIcon from "../../../assets/icons/ExpandIcon";
import ShareIcon from "../../../assets/icons/ShareIcon";
import AddIcon from "../../../assets/icons/AddIcon";

import Maluma from "../../../../public/images/Maluma.webp"
import PrettyBoyDirtyBoy from "../../../../public/images/Pretty-Boy-Dirty-Boy.webp"
import VeranoRosa from "../../../../public/images/Verano-Rosa.webp";

const SidebarRight = () => {
    return (
        <aside className="scrollbar-hide overflow-y-scroll h-full">
            <div className="relative px-4">
                <div className="sticky top-0 z-10 bg-bg-secondary">
                    <div className="h-16 flex justify-between items-center py-2 z-5">
                        <div className="flex items-center justify-center">
                            <button className="p-0.5 hover:rounded-full hover:bg-bg-tertiary cursor-pointer transition-colors duration-200 ease-in-out relative group">
                                <span>
                                    <SliderCloseIcon className="svg-player-bar" />
                                </span>
                                <span className="svg-tooltip-siderbar-left-end left-0">
                                    Ocultar la vista Sonando
                                </span>
                            </button>
                            <a href="">
                                <span>
                                    <h1 className="text-[16px] font-bold hover:underline">Borro Cassette</h1>
                                </span>
                            </a>
                        </div>
                        <div className="flex gap-2 items-center justify-center">
                            <button className="p-0.5 hover:rounded-full hover:bg-bg-tertiary cursor-pointer transition-colors duration-200 ease-in-out relative group">
                                <span>
                                    <PointsIcon className="svg text-secondary hover:text-white" />
                                </span>
                                <span className="svg-tooltip-siderbar-left-end right-[-10px]">
                                    Mas Opciones para Borro Cassette
                                </span>
                            </button>
                            <button className="p-0.5 hover:rounded-full hover:bg-bg-tertiary cursor-pointer transition-colors duration-200 ease-in-out relative group">
                                <span>
                                    <ExpandIcon className="svg-player-bar translate-x-1" />
                                </span>
                                <span className="svg-tooltip-siderbar-left-end right-[-10px]">
                                    Expandir la vista Sonando
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-4 pb-4">
                        <div className="flex flex-col gap-4">
                            <div>
                                <a href="" className="min-w-[248px] max-w-[388px] min-h-[248px] max-h-[388px]">
                                    <img src={PrettyBoyDirtyBoy} alt="Song" className="rounded-lg"/>
                                </a>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <div>
                                        <span>
                                            <a href="" className="text-2xl font-bold hover:underline">
                                                Borro Cassette
                                            </a>
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            <a href="" className="text-[16px] text-secondary hover:text-white hover:underline">
                                                Maluma
                                            </a>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <button className="hover:scale-[1.04] transition-all duration-200 ease-in-out cursor-pointer group">
                                        <span>
                                            <ShareIcon className="h-8 w-8 text-secondary hover:text-white translate-y-1" />
                                        </span>
                                        <span className="svg-tooltip-player-bar-end">
                                            Copiar enlace a la canción
                                        </span>
                                    </button>
                                    <button className="hover:scale-[1.04] transition-all duration-200 ease-in-out cursor-pointer group">
                                        <span>
                                            <AddIcon className="h-6 w-6 text-secondary hover:text-white" />
                                        </span>
                                        <span className="svg-tooltip-player-bar-end">
                                            Añadir a Canciones que te gustan
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="min-w-[248px] max-w-[388px]">
                            <div className="w-full h-[433px] cursor-pointer bg-bg-tertiary rounded-lg">
                                <div className="relative h-[259px] overflow-hidden">
                                    <img src={Maluma} alt="Artist" className="object-cover rounded-lg" />
                                    <h2 className="absolute top-0 p-4 font-bold">Información sobre el artista</h2>
                                </div>
                                <div className="flex flex-col h-[174px] p-4">
                                    <a href="" className="text-start font-bold hover:underline">
                                        <span>
                                            Maluma
                                        </span>
                                    </a>
                                    <div className="flex justify-between items-center gap-2 pt-2">
                                        <div className="text-start font-medium text-secondary">
                                            42.389.843 oyentes mensuales
                                        </div>
                                        <div>
                                            <button className="text-sm font-bold px-4 py-1 border border-secondary rounded-full hover:border-white hover:scale-[1.04] transition-all duration-100 ease-out cursor-pointer">
                                                Seguir
                                            </button>
                                        </div>
                                    </div>
                                    <span className="leading-snug font-medium text-start text-sm text-secondary my-2 line-clamp-3">Maluma is the stage name of award-winning Colombian pop singer, songwriter, and rapper Juan Luis Londoño Arias. Possessed of a sweet, grainy tenor voice and streetwise yet romantic delivery, the pop urbano was able to cross over from a reggaeton audience to the mainstream thanks to infectious early singles such as "Obsesión" and "Miss Independent"</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-[249px] p-4 bg-bg-tertiary rounded-lg flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-[16px] font-bold">Créditos</h2>
                                <button className="text-sm text-secondary font-bold ml-[10px] hover:text-white hover:underline hover:scale-[1.04] transition-all duration-100 ease-out cursor-pointer">Mostrar todos</button>
                            </div>
                            <div className="flex justify-between items-center leading-snug">
                                <div className="flex flex-col">
                                    <a href="" className="hover:underline">
                                        <span className="font-medium text-[16px]">Maluma</span>
                                    </a>
                                    <span className="font-medium text-sm text-secondary">Artista principal</span>
                                </div>
                                <div>
                                    <button className="text-sm font-bold px-4 py-1 border border-secondary rounded-full hover:border-white hover:scale-[1.04] transition-all duration-100 ease-out cursor-pointer">
                                        Seguir
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col leading-snug">
                                <span className="font-medium text-[16px]">Juan Luis Londoño Arias</span>
                                <span className="font-medium text-sm text-secondary">Compositor, Letrista</span>
                            </div>
                            <div className="flex flex-col leading-snug">
                                <span className="font-medium text-[16px]">Rene David Cano Rios</span>
                                <span className="font-medium text-sm text-secondary">Composición, Letrista</span>
                            </div>
                        </div>
                        <div className="min-h-[121px] px-2 pt-4 pb-2 bg-bg-tertiary rounded-lg flex flex-col gap-2">
                            <div className="flex justify-between items-center px-2">
                                <h2 className="text-[16px] font-bold">A continuación en la cola</h2>
                                <button className="text-sm text-secondary font-bold ml-[10px] hover:text-white hover:underline hover:scale-[1.04] transition-all duration-100 ease-out cursor-pointer">Abrir cola</button>
                            </div>
                            <ul>
                                <li>
                                    <div className="flex justify-between items-center p-2 hover:bg-hover-2 rounded-lg cursor-pointer">
                                        <div className="flex gap-2">
                                            <div>
                                                <img src={VeranoRosa} alt="Song" className="h-12 w-12 rounded-lg"/>
                                            </div>
                                            <div>
                                                <p>
                                                    <span className="font-medium text-[16px]">Verano Rosa</span>
                                                </p>
                                                <div className="leading-tight text-sm text-secondary">
                                                    <a href="" className="font-medium hover:underline hover:text-white">Karol G</a>
                                                    ,&nbsp;
                                                    <a href="" className="font-medium hover:underline hover:text-white">Feid</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="p-0.5 hover:rounded-full cursor-pointer transition-colors duration-200 ease-in-out relative group">
                                                <span>
                                                    <PointsIcon className="svg text-secondary hover:text-white" />
                                                </span>
                                                <span className="svg-tooltip-player-bar-end">
                                                    Mas Opciones para Borro Cassette
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-[#ffffff4c] w-3 h-[148px] rounded-none cursor-pointer absolute top-15 right-0 z-2"></div>
            </div>
        </aside>
    )
}

export default SidebarRight;