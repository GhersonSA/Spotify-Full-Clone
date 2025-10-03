import PlaylistPageDesktop from "../../components/layout/desktop/PlaylistPageDesktop";
import PlaylistPageMobile from "../../components/layout/mobile/PlaylistPageMobile";
import useMediaQuery from "../../hooks/useMediaQuery"

const PlaylistPage = () => {
    const isDesktop = useMediaQuery("(min-width: 1024px)");
        
    return isDesktop ? <PlaylistPageDesktop /> : <PlaylistPageMobile />
}

export default PlaylistPage;