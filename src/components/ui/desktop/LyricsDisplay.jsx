import { useState, useContext, useEffect, useRef } from "react";
import { PlayerContext } from "../../../context/PlayerContext";

const LyricsDisplay = () => {
  const { lyrics, currentLine, currentTrack, seek } = useContext(PlayerContext);
  const containerRef = useRef(null);
  const activeLineRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true);

  // Detecta si el usuario hace scroll manual
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (!activeLineRef.current) return;

      const lineTop = activeLineRef.current.offsetTop;
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;

      // distancia entre el centro del contenedor y la línea activa
      const distance = Math.abs(
        lineTop - (scrollTop + containerHeight / 2)
      );

      // si está "muy lejos" de la línea activa, desactiva autoscroll
      if (distance > 300) {
        setAutoScroll(false);
      } else {
        setAutoScroll(true);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    if (autoScroll && activeLineRef.current && containerRef.current) {
      const container = containerRef.current;
      const line = activeLineRef.current;

      container.scrollTo({
        top: line.offsetTop - container.clientHeight / 2 + line.clientHeight / 2,
        behavior: "smooth",
      });
    }
  }, [currentLine, autoScroll]);

  return (
    <div className="relative w-full h-full text-white"
      style={{ background: currentTrack?.gradient || "#121212"}}>
        <div ref={containerRef} className="overflow-y-auto h-[80vh] px-8 py-6 scrollbar-hide w-[min(calc(100%-128px),1024px)]">
          {lyrics.map((line, index) => (
            <p key={index} ref={index === currentLine ? activeLineRef : null}
            className={`transition-colors duration-200 py-3 cursor-pointer text-[40px] text-start font-extrabold leading-tight hover:underline hover:text-white ${index === currentLine ? "text-spotify" : "text-secondary"}`}
            onClick={() => seek(line.time)}>
              {line.text}
            </p>
          ))}
        </div>
    </div>
  );
};

export default LyricsDisplay;
