import ArtistPageDesktop from "../../components/layout/desktop/ArtistPageDesktop";
import ArtistPageMobile from "../../components/layout/mobile/ArtistPageMobile";
import useMediaQuery from "../../hooks/useMediaQuery"

const ArtistPage = () => {
    const isDesktop = useMediaQuery("(min-width: 1024px)");
        
    return isDesktop ? <ArtistPageDesktop /> : <ArtistPageMobile />
}

export default ArtistPage;