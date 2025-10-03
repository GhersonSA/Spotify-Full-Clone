import { createBrowserRouter } from "react-router-dom"
import ResponsiveLayout from "../layout/ResponsiveLayout";
import MainPage from "../pages/MainPage/MainPage";
import LyricsPage from "../pages/LyricsPage/LyricsPage";
import ArtistPage from "../pages/ArtistPage/ArtistPage";
import AlbumPage from "../components/layout/desktop/AlbumPageDesktop";
import PlaylistPage from "../pages/PlaylistPage/PlaylistPage";
import TrackPage from "../pages/TrackPage/TrackPage";
import ViewAllPage from "../pages/ViewAllPage/ViewAllPage";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <ResponsiveLayout />,
        children: [
            { index: true, element: <MainPage /> },
            { path: "lyrics", element: <LyricsPage /> },
            { path: "artist/:artistId", element: <ArtistPage />},
            { path: "album/:albumId", element: <AlbumPage />},
            { path: "playlist/:playlistId", element: <PlaylistPage />},
            { path: "track/:trackId", element: <TrackPage />},
            { path: "view-all/:type", element: <ViewAllPage />},
        ],
    },
])

export default AppRoutes;