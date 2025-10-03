import TrackPageDesktop from "../../components/layout/desktop/TrackPageDesktop";
import TrackPageMobile from "../../components/layout/mobile/TrackPageMobile";
import useMediaQuery from "../../hooks/useMediaQuery"

const TrackPage = () => {
    const isDesktop = useMediaQuery("(min-width: 1024px)");
        
    return isDesktop ? <TrackPageDesktop /> : <TrackPageMobile />
}

export default TrackPage;