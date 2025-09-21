import { RouterProvider } from "react-router-dom";
import { PlayerProvider } from "./context/PlayerContext";
import AppRoutes from "./routes/AppRoutes";
import "./styles/index.css";

function App() {
  return (
    <PlayerProvider>
      <RouterProvider router={AppRoutes} />
    </PlayerProvider>
  );
}

export default App
