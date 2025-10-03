import { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import PlayButton from "./PlayButton";
import tracks from "../../data/tracks";
import artists from "../../data/artists";
import albums from "../../data/album";
import playlists from "../../data/playlists";

const SmartPlayButton = ({ type, id }) => {
    const { setCurrentTrack } = useContext(PlayerContext);

    const handlePlay = (e) => {
        e.stopPropagation();
        let trackToPlay;
        let artistInfo;
        let albumInfo;

        switch(type) {
            case "track": {
                trackToPlay = tracks.find(t => t.id === id);
                albumInfo = albums.find(a => a.tracks.includes(id));
                artistInfo = artists.find(a => a.id === albumInfo?.artistId);
                break;
            }
            case "artist": {
                artistInfo = artists.find(a => a.id === id);
                if (artistInfo?.topTracks.length > 0) {
                    trackToPlay = tracks.find(t => t.id === artistInfo.topTracks[0]);
                }
                break;
            }
            case "album": {
                albumInfo = albums.find(a => a.id === id);
                if (albumInfo?.tracks.length > 0) {
                    trackToPlay = tracks.find(t => t.id === albumInfo.tracks[0]);
                    artistInfo = artists.find(a => a.id === albumInfo.artistId);
                }
                break;
            }
            case "playlist": {
                const playlist = playlists.find(p => p.id === id);
                if (playlist?.tracks.length > 0) {
                    trackToPlay = tracks.find(t => t.id === playlist.tracks[0]);
                    albumInfo = albums.find(a => a.tracks.includes(trackToPlay.id));
                    artistInfo = artists.find(a => a.id === albumInfo?.artistId);
                }
                break;
            }
        }

        if (trackToPlay) {
            setCurrentTrack({
                ...trackToPlay,
                artist: artistInfo?.name || "Unknown Artist",
                album: albumInfo?.name || "Unknown Album",
                albumImg: albumInfo?.img || trackToPlay.image,
                artistId: artistInfo?.id,
                albumId: albumInfo?.id,
                autoPlay: true
            });
        }
    };

    return <PlayButton onClick={handlePlay} />;
};

export default SmartPlayButton;