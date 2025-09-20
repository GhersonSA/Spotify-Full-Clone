import { createContext, useState, useRef, useEffect } from "react";
import tracks from "../data/tracks";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
    const audioRef = useRef(new Audio());
    const [currentTrack, setCurrentTrack] = useState(tracks[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [lyrics, setLyrics] = useState([]);
    const [currentLine, setCurrentLine] = useState(0);

    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [prevVolume, setPrevVolume] = useState(1);

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
        setIsPlaying(false); // Pausa hasta que el usuario haga play
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
        else audio.play(); // Solo se reproduce tras interacción
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

    const nextTrack = () => {
        const index = tracks.findIndex(track => track.id === currentTrack.id);
        const next = tracks[(index + 1) % tracks.length];
        setCurrentTrack(next);
        if (isPlaying) {
            setTimeout(() => {
                audioRef.current.play();
                setIsPlaying(true);
            }, 0);
        }
    };

    const prevTrack = () => {
        const index = tracks.findIndex(track => track.id === currentTrack.id);
        if (audioRef.current.currentTime > 3) {
            // Si la canción ya va avanzada, reinicia
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

    return (
        <PlayerContext.Provider value={{ audioRef, currentTrack, setCurrentTrack, isPlaying, togglePlay, progress, seek, formatTime, 
            lyrics, setLyrics, currentLine, nextTrack, prevTrack, volume, setVolume, isMuted, toggleMute, changeVolume }}>
            {children}
        </PlayerContext.Provider>
    );
};