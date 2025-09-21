import LUNA from "../lyrics/LUNA";
import LUNA_MP3 from "../../assets/songs/LUNA.mp3"
import FERXXO_500_MP3 from "../../assets/songs/FERXXO_500.mp3"
import SE_LO_JURO_MOR_MP3 from "../../assets/songs/SE_LO_JURO_MOR.mp3"

const tracks = [
    {
        id: 1,
        title: "LUNA",
        src: LUNA_MP3,
        image: "/images/Ferxxocalipsis.webp",
        lyrics: LUNA,
        audioDuration: 196.5,
        gradient: "#f3661f"
    },
    {
        id: 2,
        title: "FERXXO 500",
        src: FERXXO_500_MP3,
        image: "/images/Ferxxocalipsis.webp",
        lyrics: LUNA,
        audioDuration: 320,
    },
    {
        id: 3,
        title: "SE LO JURO MOR",
        src: SE_LO_JURO_MOR_MP3,
        image: "/images/Ferxxocalipsis.webp",
        lyrics: LUNA,
        audioDuration: 250,
    }
];

export default tracks;