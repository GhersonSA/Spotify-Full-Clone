import MainDesktop from "../../components/layout/desktop/MainDesktop";
import MainMobile from "../../components/layout/mobile/MainMobile";
import useMediaQuery from "../../hooks/useMediaQuery"

const MainPage = () => {
    const isDesktop = useMediaQuery("(min-width: 1024px)");
        
    return isDesktop ? <MainDesktop /> : <MainMobile />
}

export default MainPage;