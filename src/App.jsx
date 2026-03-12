import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
import Routes from './Routes'

function App() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <Routes />
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

export default App
