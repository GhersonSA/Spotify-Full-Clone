import LUNA from "./lyrics/LUNA";
import LUNA_MP3 from "../assets/songs/LUNA.mp3"
import FERXXO_500_MP3 from "../assets/songs/FERXXO_500.mp3"
import SE_LO_JURO_MOR_MP3 from "../assets/songs/SE_LO_JURO_MOR.mp3"

const tracks = [
    {
        id: 1,
        title: "LUNA",
        src: LUNA_MP3,
        image: "/images/Ferxxocalipsis.webp",
        lyrics: LUNA,
        audioDuration: 196.5,
        bg: "#f3661f"
    },
    {
        id: 2,
        title: "FERXXO 500",
        src: FERXXO_500_MP3,
        image: "/images/Vol-X-Sagrado.webp",
        lyrics: LUNA,
        audioDuration: 320,
    },
    {
        id: 3,
        title: "SE LO JURO MOR",
        src: SE_LO_JURO_MOR_MP3,
        image: "/images/Se-Lo-Juro-Mor.webp",
        lyrics: LUNA,
        audioDuration: 250,
    },
    {
        id: 4,
        title: "Addicted",
        src: "",
        image: "/images/Addicted.webp",
        lyrics: LUNA,
        audioDuration: 210,
    },
    {
        id: 5,
        title: "Verano Rosa",
        src: "",
        image: "/images/Verano-Rosa.webp",
        lyrics: LUNA,
        audioDuration: 230,
    },
    {
        id: 6,
        title: "Happier",
        src: "",
        image: "/images/Happier.webp",
        lyrics: LUNA,
        audioDuration: 240,
    }
];

export default tracks;