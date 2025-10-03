import { useState, useEffect, useContext, useRef } from "react";
import { PlayerContext } from "../../../context/PlayerContext";
import { motion, AnimatePresence } from "framer-motion";

import FullVolumenIcon from "../../../assets/icons/FullVolumenIcon";
import MutedVolumenIcon from "../../../assets/icons/MutedVolumenIcon";
import MarkIcon from "../../../assets/icons/MarkIcon";
import AddIcon from "../../../assets/icons/AddIcon";
import ShareIcon from "../../../assets/icons/ShareIcon";
import AddQueueIcon from "../../../assets/icons/AddQueueIcon";
import PointsIcon from "../../../assets/icons/PointsIcon";
import ArrowTopIcon from "../../../assets/icons/ArrowTopIcon";
import ArrowDownIcon from "../../../assets/icons/ArrowDownIcon";

import FollowButton from "../FollowButton";
import tracks from "../../../data/tracks";

const PreviewModal = ({ isOpen, onClose, songIds }) => {
    const { audioRef, previewAudioRef, currentTrack, isPlaying, volume, isMuted, toggleMute, previewProgress, setPreviewProgress } = useContext(PlayerContext);
    const [currentIndex, setCurrentIndex] = useState(0);

    const modalRef = useRef(null);

    const currentPreview = tracks.find(track => track.id === songIds[currentIndex]);

    const startTime = 60; // en segundos, por ejemplo minuto 1
    const previewDuration = 30; // duración de la preview en segundos (15-30)


    useEffect(() => {
        const dialog = modalRef.current;

        if (isOpen && dialog) {
        if (!dialog.open) {
            dialog.showModal(); // abre en modo modal (bloquea fondo)
        }
        } else if (!isOpen && dialog?.open) {
        dialog.close(); // cierra correctamente
        }
    }, [isOpen]);

    // Resetear al abrir
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(0);
        }
    }, [isOpen]);

    useEffect(() => {
        if (!previewAudioRef.current) return;
        previewAudioRef.current.volume = isMuted ? 0 : volume;
    }, [isMuted, volume]);

    // Reproducir la canción al abrir el modal o cambiar el index
    useEffect(() => {
        const mainAudio = audioRef.current;
        const previewAudio = previewAudioRef.current;

        if (!isOpen || !currentPreview) return;

        if (!mainAudio.paused) mainAudio.pause();

        const audio = previewAudioRef.current;
        /*
        if (audio.src !== currentPreview.src) {
            audio.src = currentPreview.src;
            audio.currentTime = startTime;

            audio.volume = isMuted ? 0 : volume;
        }

        if (audio.paused) {
            audio.play().catch(err => console.warn(err));
        } */

        if (previewAudio.src !== currentPreview.src) {
            previewAudio.src = currentPreview.src;
            previewAudio.currentTime = startTime;
        }

        previewAudio.volume = isMuted ? 0 : volume;

        if (previewAudio.paused) {
            previewAudio.play().catch(err => console.warn(err));
        }

        // Actualizar progreso
        const handleTimeUpdate = () => {
            const elapsed = audio.currentTime - startTime;
            setPreviewProgress(Math.min(elapsed, previewDuration));
        };
        audio.addEventListener("timeupdate", handleTimeUpdate);

        // Crear un loop que reinicie la preview
        const loop = setInterval(() => {
            audio.currentTime = startTime;
            audio.play().catch(err => console.warn(err));
        }, previewDuration * 1000);

        // Detener el audio y limpiar interval al cerrar o cambiar preview
        return () => {
            clearInterval(loop);
            audio.pause();
            audio.currentTime = startTime;
            audio.removeEventListener("timeupdate", handleTimeUpdate);
            setPreviewProgress(0);

            // Restaurar audio principal si estaba reproduciéndose
            if (currentTrack && isPlaying) {
                mainAudio.play().catch(err => console.warn(err));
            }
        };
    }, [currentIndex, isOpen, currentPreview]); /* previewAudioRef, setPreviewProgress */

    /* Si esta sonando en el playbar, se pausa hasta que se cierre el modal */ /*
    useEffect(() => {
        const mainAudio = audioRef.current;
        const previewAudio = previewAudioRef.current;

        if (isOpen) {
            // Pausar la barra de reproducción principal
            if (!mainAudio.paused) mainAudio.pause();

            // Iniciar preview
            if (currentPreview) {
                previewAudio.src = currentPreview.src;
                previewAudio.currentTime = startTime;
                previewAudio.volume = isMuted ? 0 : volume;
                previewAudio.play().catch(err => console.warn(err));
            }
        } else {
            // Al cerrar, detener el preview
            previewAudio.pause();
            previewAudio.currentTime = startTime;

            // Restaurar audio principal si estaba reproduciéndose
            if (currentTrack && isPlaying) {
                mainAudio.play().catch(err => console.warn(err));
            }
        }
    }, [isOpen, currentPreview, isMuted, volume]); */

    useEffect(() => {
        if (!isOpen) return;

        let isScrolling = false;

        const handleWheel = (e) => {
            if (isScrolling) return; // Ignorar mientras esté bloqueado
            isScrolling = true;

            if (e.deltaY > 0) {
                // Scroll hacia abajo → siguiente canción
                e.preventDefault();
                setCurrentIndex((prev) => {
                    if (prev >= songIds.length - 1) return prev;
                    return prev + 1;
                });
            } else if (e.deltaY < 0) {
                // Scroll hacia arriba → canción anterior
                e.preventDefault();
                setCurrentIndex((prev) => {
                    if (prev <= 0) return prev;
                    return prev - 1;
                });
            }

            // Permitir otro scroll después de 400ms (como Spotify)
            setTimeout(() => {
                isScrolling = false;
            }, 400);
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => window.removeEventListener("wheel", handleWheel);
    }, [isOpen, songIds.length]);

    // Manejo de flechas del teclado y escape
    useEffect(() => {
        const handleKey = (e) => {
        if (!isOpen) return;
        if (e.repeat) return;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setCurrentIndex((prev) => (prev + 1) % songIds.length);
        }
        if (e.key === "ArrowUp") {
            e.preventDefault();
            setCurrentIndex((prev) => (prev - 1 + songIds.length) % songIds.length);
        }
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [isOpen, songIds]);

    if (!isOpen || !currentPreview) return null;

    return (
        <dialog ref={modalRef} onClose={onClose} className="bg-transparent backdrop:bg-black/88 z-10 m-auto" closedby="any">
            <div className=" flex justify-center items-center border max-w-[1680px] w-[950px] h-[600px] border-bg-tertiary text-white p-6 rounded-lg relative aspect-[16/10] overflow-hidden"
                style={{ backgroundImage: "radial-gradient(circle at center right, #121212 35%)",}}>
                <div className="radial-ball"></div>
                <div className="flex justify-between items-center w-full h-full">
                    <div className="flex flex-col justify-between p-2 h-full">
                        <div>
                            <span className="text-[16px] font-bold">
                                Feid
                            </span>
                        </div>
                        <div>
                            <div className="pl-4 flex flex-col justify-between">
                                <div className="min-h-[2lh] flex items-end">
                                    <span className="line-clamp-2">
                                        <a href="" className="text-[32px] font-bold hover:underline">{currentPreview.title}</a>
                                    </span>
                                </div>
                                <div className="flex">
                                    <div>
                                        <a href="">
                                            <span className="text-[16px] text-secondary hover:underline">{currentPreview.artist}</span>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="">
                                            <span className="text-[16px] text-secondary hover:underline">, ATL Jacob</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="h-[70px] max-w-[318px] flex items-center gap-6 pt-4">
                                    <div className="h-[54px] w-[54px]">
                                        <img src={currentPreview.image} alt={currentPreview.title} className="h-[54px] w-[54px] rounded-sm object-cover" />
                                    </div>
                                    <div className="min-w-[240px] max-w-[200px] rounded-full">
                                        <div className="overflow-hidden left-0 right-0 bg-[#525252]/30 w-full h-[4px] rounded-[2px] bottom-[0px]">
                                            <div className="bg-white rounded-full h-full" style={{width: `${(previewProgress / previewDuration) * 100}%`}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="min-h-[80px] flex flex-col justify-end gap-4">
                                <div className="flex gap-2">
                                    <div className="mx-[2px]">
                                        <figure className="w-8 h-8">
                                            <img src="/images/Feid.webp" alt="" className="rounded-full" />
                                        </figure>
                                    </div>
                                    <div className="flex gap-1">
                                        <div className="mx-[2px]">
                                            <span>
                                                <a href="" className="text-sm font-medium hover:underline">Feid</a>
                                            </span>
                                        </div>
                                        <div className="mx-[2px]">
                                            <span className="text-sm font-medium text-secondary">
                                                ·&nbsp;9&nbsp;M
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <FollowButton />
                                    </div>
                                </div>
                                <div className="flex gap-1">
                                    <div className="">
                                        <button className="mb-2 cursor-pointer">
                                            <span className="py-2 px-3 bg-hover rounded-full text-sm font-medium hover:brightness-125">
                                                #luna
                                            </span>
                                        </button>
                                    </div>
                                    <div className="">
                                        <button className="mb-2 cursor-pointer">
                                            <span className="py-2 px-3 bg-hover rounded-full text-sm font-medium hover:brightness-125">
                                                #reggaeton
                                            </span>
                                        </button>
                                    </div>
                                    <div className="">
                                        <button className="mb-2 cursor-pointer">
                                            <span className="py-2 px-3 bg-hover rounded-full text-sm font-medium hover:brightness-125">
                                                #feid
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-8 h-full flex justify-center items-center">
                        <div className="width-[41%] px-[5%]">
                            <div className="hidden">
                                <img src="" alt="" className="w-[325px]" />
                            </div>
                            <div>
                                <div className="w-[276px] h-[276px] overflow-hidden relative">
                                    {/* <img src={currentPreview.image} alt={currentPreview.title} className="rounded-lg object-cover"/> */}
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={currentPreview.id} src={currentPreview.image} alt={currentPreview.title} className="absolute top-0 left-0 w-full h-full object cover rounded-lg"
                                            initial={{ y: 100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit = {{ y: -100, opacity: 0 }}
                                            transition= {{ duration: 0.2, ease: "easeInOut" }} />
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 h-full flex flex-col justify-between items-center">
                        <div className="flex-1 flex gap-2">
                            <div className="w-8 h-8">
                                <button onClick={toggleMute} className="button-svg-playerbar group">
                                    <span className="flex items-center justify-center">
                                        {isMuted ? <MutedVolumenIcon className="w-8 h-8 translate-y-[1.5px] translate-x-[-4px] text-secondary hover:text-white" /> : <FullVolumenIcon className="w-8 h-8 translate-y-[1.5px] translate-x-[-4px] text-secondary hover:text-white" />}
                                    </span>
                                    <span className="svg-tooltip-player-bar-end">
                                        {isMuted ? "No Silenciar" : "Silenciar"}
                                    </span>
                                </button>
                            </div>
                            <button onClick={onClose} className="w-6 h-6 text-xl cursor-pointer group">
                                <span>
                                    <MarkIcon className="svg text-secondary hover:text-white" />                    
                                </span>
                                <span className="absolute mb-2 hidden group-hover:block whitespace-nowrap rounded-md bg-bg-tertiary px-2 py-1 text-[12px] text-white font-semibold shadow-lg top-18 right-5 transform">
                                    Cerrar
                                </span>
                            </button>
                        </div>
                        <div className="flex-1 flex flex-col gap-4 pr-4">
                            <button className="flex justify-center items-center hover:scale-[1.04] transition-all duration-200 ease-in-out cursor-pointer group">
                                <span>
                                    <PointsIcon className="h-8 w-8 text-secondary hover:brightness-125 translate-x-[-1px]" />
                                </span>
                                <span className="absolute mb-2 hidden group-hover:block whitespace-nowrap rounded-md bg-bg-tertiary px-2 py-1 text-[12px] text-white font-semibold shadow-lg bottom-[-5px] right-10 transform">
                                    Mas opciones para LUNA
                                </span>
                            </button>
                            <button className="flex justify-center items-center hover:scale-[1.04] transition-all duration-200 ease-in-out cursor-pointer group">
                                <span>
                                    <ShareIcon className="h-8 w-8 text-secondary hover:text-white translate-y-1 translate-x-1" />
                                </span>
                                <span className="absolute mb-2 hidden group-hover:block whitespace-nowrap rounded-md bg-bg-tertiary px-2 py-1 text-[12px] text-white font-semibold shadow-lg bottom-[-5px] right-10 transform">
                                    Copiar enlace a la canción
                                </span>
                            </button>
                            <button className="flex justify-center items-center hover:scale-[1.04] transition-all duration-200 ease-in-out cursor-pointer group">
                                <span>
                                    <AddQueueIcon className="h-8 w-8 text-secondary hover:text-white translate-y-1 translate-x-1" />
                                </span>
                                <span className="absolute mb-2 hidden group-hover:block whitespace-nowrap rounded-md bg-bg-tertiary px-2 py-1 text-[12px] text-white font-semibold shadow-lg bottom-[-5px] right-10 transform">
                                    Añadir a la cola
                                </span>
                            </button>
                            <button className="flex justify-center items-center hover:scale-[1.04] transition-all duration-200 ease-in-out cursor-pointer group">
                                <span>
                                    <AddIcon className="h-8 w-8 hover:brightness-125" />
                                </span>
                                <span className="absolute mb-2 hidden group-hover:block whitespace-nowrap rounded-md bg-bg-tertiary px-2 py-1 text-[12px] text-white font-semibold shadow-lg bottom-[-5px] right-10 transform">
                                    Añadir a Canciones que te gustan
                                </span>
                            </button>
                        </div>
                        <div className="flex-1 flex flex-col items-end justify-end">
                            <button onClick={() => setCurrentIndex((prev) => (prev - 1 + songIds.length) % songIds.length)} className="flex justify-center items-center mb-2 w-12 h-12 p-4 rounded-full hover:bg-hover-2 hover:scale-[1.04] transition-all duration-200 ease-in-out cursor-pointer group">
                                <span>
                                    <ArrowTopIcon className="h-6 w-6 hover:brightness-125 text-secondary" />
                                </span>
                                <span className="absolute mb-2 hidden group-hover:block whitespace-nowrap rounded-md bg-bg-tertiary px-2 py-1 text-[12px] text-white font-semibold shadow-lg bottom-0.5 right-14 transform">
                                    Anterior
                                </span>
                            </button>
                            <button onClick={() => setCurrentIndex((prev) => (prev + 1) % songIds.length)} className="flex justify-center items-center mb-2 w-12 h-12 p-3 rounded-full hover:bg-hover-2 hover:scale-[1.04] transition-all duration-200 ease-in-out cursor-pointer group">
                                <span>
                                    <ArrowDownIcon className="h-6 w-6 hover:brightness-125 text-secondary" />
                                </span>
                                <span className="absolute mb-2 hidden group-hover:block whitespace-nowrap rounded-md bg-bg-tertiary px-2 py-1 text-[12px] text-white font-semibold shadow-lg bottom-0.5 right-14 transform">
                                    Siguiente
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    );
};

export default PreviewModal;
