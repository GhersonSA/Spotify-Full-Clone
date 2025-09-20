import { Route, Routes } from "react-router"
import ResponsiveLayout from "../layout/ResponsiveLayout";
import MainPage from "../pages/MainPage/MainPage";
import LyricsPage from "../pages/LyricsPage/LyricsPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<ResponsiveLayout />}>
                <Route index element={<MainPage />} />
                <Route index element={<LyricsPage />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;