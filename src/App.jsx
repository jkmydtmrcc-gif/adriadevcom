import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
import SupportChat from './components/SupportChat'
import Routes from './Routes'

function App() {
  const location = useLocation()
  const isChatLogs = location.pathname === '/chat-logs'

  return (
    <>
      <CursorGlow />
      {!isChatLogs && <Navbar />}
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <Routes />
        </AnimatePresence>
      </main>
      {!isChatLogs && <Footer />}
      <SupportChat />
    </>
  )
}

export default App
