import { PlayerProvider } from './context/PlayerContext'
import DesktopLayout from './layout/DesktopLayout'
import MobileLayout from './layout/MobileLayout'
import AppRoutes from "./routes/AppRoutes"
import './styles/index.css'

function App() {
  return (
    <PlayerProvider>
      <AppRoutes />
    </PlayerProvider>
  );
}

export default App
