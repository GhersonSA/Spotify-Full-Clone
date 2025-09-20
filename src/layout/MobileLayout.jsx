import { Outlet } from "react-router-dom";
import Header from "../components/layout/mobile/HeaderMobile";
import MainMobile from "../components/layout/mobile/MainMobile";
import TabBar from "../components/layout/mobile/TabBar";

const MobileLayout = () => {
    return (
        <main className="min-h-screen w-full lg:hidden">
            <Header />
            <Outlet />
            <TabBar />
        </main>
    )
}

export default MobileLayout;