import { useContext } from "react";
import { PlayerContext } from "../../../context/PlayerContext";

const LyricsDisplay = () => {
  const { lyrics, currentLine } = useContext(PlayerContext);

  return (
    <div className="lyrics-container p-4 text-white">
      {lyrics.map((line, index) => (
        <p key={index} className={`transition-colors duration-200 ${
            index === currentLine ? "text-spotify font-bold" : "text-secondary"}`}>
          {line.text}
        </p>
      ))}
    </div>
  );
};

export default LyricsDisplay;
