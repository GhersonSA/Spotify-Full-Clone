import { useState } from "react"
import HeaderDesktop from "../components/layout/desktop/HeaderDesktop";
import MainDesktop from "../components/layout/desktop/MainDesktop";
import PlayerBar from "../components/layout/desktop/PlayerBar";
import SidebarLeft from "../components/layout/desktop/SidebarLeft";
import SidebarRight from "../components/layout/desktop/SidebarRight";

const DesktopLayout = () => {
    const [sidebarLeftWidth, setSidebarLeftWidth] = useState(300);
    const [sidebarRightWidth, setSidebarRightWidth] = useState(300);

    const handleLeftResize = (e) => {
        e.preventDefault();
        const startX = e.clientX;
        const startWidth = sidebarLeftWidth;
        document.body.style.userSelect = "none";

        const onMouseMove = (moveEvent) => {
            let newWidth = startWidth + (moveEvent.clientX - startX);
            if (newWidth < 280) newWidth = 280;
            if (newWidth > 420) newWidth = 420;
            setSidebarLeftWidth(newWidth);
        };

        const onMouseUp = () => {
            document.body.style.userSelect = "auto";
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
    };

    const handleRightResize = (e) => {
        e.preventDefault();
        const startX = e.clientX;
        const startWidth = sidebarRightWidth;
        document.body.style.userSelect = "none";

        const onMouseMove = (moveEvent) => {
            let newWidth = startWidth - (moveEvent.clientX - startX);
            if (newWidth < 280) newWidth = 280;
            if (newWidth > 420) newWidth = 420;
            setSidebarRightWidth(newWidth);
        };

        const onMouseUp = () => {
            document.body.style.userSelect = "auto";
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
    };

    return (
        <main className="min-h-screen w-full hidden lg:block bg-black p-2">
            <HeaderDesktop />
            <div className="flex gap-1 w-full">
                <div style={{ width: sidebarLeftWidth }} className="min-w-[280px] max-w-[420px] bg-bg-secondary rounded-lg">
                    <SidebarLeft />
                </div>

                <div className="w-[2px] my-3 cursor-col-resize bg-black hover:bg-secondary rounded-lg" onMouseDown={handleLeftResize}></div>

                <div className="flex-1 min-w-[422px] p-4 text-[20px] lg:bg-bg-secondary rounded-lg">
                    <MainDesktop />
                </div>

                <div className="w-[2px] my-3 cursor-col-resize bg-black hover:bg-secondary rounded-lg" onMouseDown={handleRightResize}></div>

                <div style={{ width: sidebarRightWidth }} className="min-w-[280px] max-w-[420px] bg-bg-secondary rounded-lg">
                    <SidebarRight />
                </div>
            </div>
            <PlayerBar />
        </main>
    )
}

export default DesktopLayout;