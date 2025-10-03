import { createContext, useState, useRef, useEffect, useCallback } from "react";
import tracks from "../data/tracks";
import artists from "../data/artists";
import albums from "../data/album";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
    const audioRef = useRef(new Audio());
    const previewAudioRef = useRef(new Audio());

    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const [previewProgress, setPreviewProgress] = useState(0);

    const [lyrics, setLyrics] = useState([]);
    const [currentLine, setCurrentLine] = useState(0);

    const [prevVolume, setPrevVolume] = useState(1);

    // Obtener el track guardado o el primero
    const savedState = localStorage.getItem("playerState");
    const parsedState = savedState ? JSON.parse(savedState) : {};
    // Encuentra the track y su related info
    const trackToUse = parsedState.currentTrackId
        ? tracks.find(t => t.id === parsedState.currentTrackId) || tracks[0]
        : tracks[0];
    
    const albumInfo = albums.find(a => a.tracks.includes(trackToUse.id));
    const artistInfo = artists.find(a => a.id === albumInfo?.artistId);

    // Crear initial track con complete info
    const initialTrack = {
        ...trackToUse,
        artist: artistInfo?.name || "Unknown Artist",
        album: albumInfo?.name || "Unknown Album",
        albumImg: albumInfo?.img || trackToUse.image,
        artistId: artistInfo?.id,
        albumId: albumInfo?.id
    };

    const [currentTrack, setCurrentTrack] = useState(initialTrack);
    const [volume, setVolume] = useState(parsedState.volume ?? 1);
    const [isMuted, setIsMuted] = useState(parsedState.isMuted ?? false);
    const [isShuffling, setIsShuffling] = useState(parsedState.isShuffling ?? false);
    const [repeatMode, setRepeatMode] = useState(parsedState.repeatMode ?? "off");  // valores: "off" | "all" | "one"

    // Guardar el track actual, posicion de volumen y botones cada vez que cambie
    useEffect(() => {
        localStorage.setItem("playerState", JSON.stringify({
            currentTrackId: currentTrack.id,
            volume,
            isMuted,
            isShuffling,
            repeatMode
        }));
    }, [currentTrack, volume, isMuted, isShuffling, repeatMode]);

    // Actualizar volumen en el audio cuando cambia
    useEffect(() => {
        if (audioRef.current) audioRef.current.volume = isMuted ? 0 : volume;
    }, [volume, isMuted]);

    // Función para mutear/desmutear
    const toggleMute = () => {
        if (isMuted) {
            setIsMuted(false);
            setVolume(prevVolume);
            audioRef.current.volume = prevVolume;
        } else {
            setPrevVolume(volume);
            setIsMuted(true);
            setVolume(0);
            audioRef.current.volume = 0;
        }
    };

    const changeVolume = (newVolume) => {
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
        if (isMuted && newVolume > 0) {
            setIsMuted(false); // desmuta automáticamente
        }
    };

    // Carga y reproducción de la pista
    useEffect(() => {
        if (!currentTrack) return;
        const audio = audioRef.current;
        audio.src = currentTrack.src;
        setLyrics(currentTrack.lyrics || []);
        setProgress(0);

        if (!currentTrack.autoPlay) {
            setIsPlaying(false);
        } else {
            audio.play().catch(err => console.warn("play() failed:", err));
            setIsPlaying(true);
        }
    }, [currentTrack]);

    // Actualiza progreso y letra
    useEffect(() => {
        const audio = audioRef.current;
        const updateProgress = () => {
        setProgress(audio.currentTime);
        const lineIndex = lyrics.findIndex((line, i) =>
            audio.currentTime >= line.time &&
            audio.currentTime < (lyrics[i + 1]?.time || audio.duration)
        );
        setCurrentLine(lineIndex);
    };

        audio.addEventListener("timeupdate", updateProgress);
        return () => audio.removeEventListener("timeupdate", updateProgress);
    }, [lyrics]);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!currentTrack) return;
        
        if (isPlaying) audio.pause();
        else audio.play();
        setIsPlaying(!isPlaying);
    };

    const seek = (time) => {
        audioRef.current.currentTime = time;
        setProgress(time);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time/60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }

    // Pista siguiente + botón aleatorio
    const toggleShuffle = () => {
        setIsShuffling(prev => !prev);
    };

    const nextTrack = useCallback((autoPlay = false) => {
        const index = tracks.findIndex(track => track.id === currentTrack.id);
        let next;
        if (isShuffling && tracks.length > 1) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * tracks.length);
            } while (randomIndex === index);
            next = tracks[randomIndex];
        } else {
            next = tracks[(index + 1) % tracks.length];
        }

        setCurrentTrack({ ...next, autoPlay });
    }, [currentTrack, isShuffling]);

    const prevTrack = () => {
        const index = tracks.findIndex(track => track.id === currentTrack.id);
        if (audioRef.current.currentTime > 3) {
            
            seek(0);
            if (!isPlaying) {
                audioRef.current.play();
                setIsPlaying(true);
            }
        } else {
            const prev = tracks[(index - 1 + tracks.length) % tracks.length];
            setCurrentTrack(prev);
            if (isPlaying) {
                setTimeout(() => {
                    audioRef.current.play();
                    setIsPlaying(true);
                }, 0);
            }
        }
    };

    // No repetir / repetir lista / repetir 1
    const toggleRepeat = () => {
        let newRepeat;
        if (repeatMode === "off") newRepeat = "all";
        else if (repeatMode === "all") newRepeat = "one";
        else newRepeat = "off";

        setRepeatMode(newRepeat);
    };

    // Cuando termina la canción
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        const handleEnded = () => {
            if (repeatMode === "one") {
                audio.currentTime = 0;
                const p = audio.play();
                if (p && typeof p.then === "function") {
                    p.catch(err => console.warn("play() failed on repeat one ended:", err));
                }
            } else if (repeatMode === "all") {
                nextTrack(true);
            } else {
                setIsPlaying(false);
        }
    };

        audio.addEventListener("ended", handleEnded);
        return () => audio.removeEventListener("ended", handleEnded);
    }, [repeatMode, nextTrack]);

    /* Cambiar de cancion en las previews de las MODALES */
    const playTrack = (trackId) => {
        const track = tracks.find(t => t.id === trackId);
        if (track) setCurrentTrack({ ...track, autoPlay: true });
    };

    /* Barra de progreso para las previews de las MODALES */
    useEffect(() => {
        const audio = previewAudioRef.current;
        const updateProgress = () => setPreviewProgress(audio.currentTime);
        audio.addEventListener("timeupdate", updateProgress);
        return () => audio.removeEventListener("timeupdate", updateProgress);
    }, []);

    return (
        <PlayerContext.Provider
            value={{ audioRef, previewAudioRef, currentTrack, setCurrentTrack, isPlaying, togglePlay, progress, seek, formatTime, lyrics, setLyrics, currentLine,
                 nextTrack, prevTrack, volume, setVolume, isMuted, toggleMute, changeVolume, isShuffling, toggleShuffle, toggleRepeat, repeatMode,
                 playTrack, previewProgress, setPreviewProgress }}>
            {children}
        </PlayerContext.Provider>
    );
};