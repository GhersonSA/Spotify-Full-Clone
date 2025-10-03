import AlbumPageDesktop from "../../components/layout/desktop/AlbumPageDesktop";
import AlbumPageMobile from "../../components/layout/mobile/AlbumPageMobile";
import useMediaQuery from "../../hooks/useMediaQuery"

const AlbumPage = () => {
    const isDesktop = useMediaQuery("(min-width: 1024px)");
        
    return isDesktop ? <AlbumPageDesktop /> : <AlbumPageMobile />
}

export default AlbumPage;