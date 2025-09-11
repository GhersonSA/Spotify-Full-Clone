import HeaderDesktop from "../components/layout/desktop/HeaderDesktop";
import MainDesktop from "../components/layout/desktop/MainDesktop";
import PlayerBar from "../components/layout/desktop/PlayerBar";
import SidebarLeft from "../components/layout/desktop/SidebarLeft";
import SidebarRight from "../components/layout/desktop/SidebarRight";

const DesktopLayout = () => {
    return (
        <main className="min-h-screen w-full hidden lg:block">
            <HeaderDesktop />
            <div className="flex">
                <SidebarLeft />
                <MainDesktop />
                <SidebarRight />
            </div>
            <PlayerBar />
        </main>
    )
}

export default DesktopLayout;