import { useLocation, useRoutes } from 'react-router-dom'
import { motion } from 'framer-motion'
import { pageVariants } from './lib/animations'
import Home from './pages/Home'
import Usluge from './pages/Usluge'
import Cijene from './pages/Cijene'
import Portfolio from './pages/Portfolio'
import ONama from './pages/ONama'
import Kontakt from './pages/Kontakt'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import NotFound from './pages/NotFound'
import ChatLogs from './pages/ChatLogs'

const routes = [
  { path: '/', element: <Home /> },
  { path: '/usluge', element: <Usluge /> },
  { path: '/cijene', element: <Cijene /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/o-nama', element: <ONama /> },
  { path: '/kontakt', element: <Kontakt /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
  { path: '/chat-logs', element: <ChatLogs /> },
  { path: '*', element: <NotFound /> },
]

export default function Routes() {
  const location = useLocation()
  const element = useRoutes(routes)

  return (
    <motion.div
      key={location.pathname}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {element}
    </motion.div>
  )
}

export { pageVariants } from './lib/animations'
