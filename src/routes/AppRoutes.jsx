import { createBrowserRouter } from "react-router-dom"
import ResponsiveLayout from "../layout/ResponsiveLayout";
import MainPage from "../pages/MainPage/MainPage";
import LyricsPage from "../pages/LyricsPage/LyricsPage";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <ResponsiveLayout />,
        children: [
            { index: true, element: <MainPage /> },
            { path: "lyrics", element: <LyricsPage /> },
        ],
    },
])

export default AppRoutes;