import { useLocation, useRoutes } from 'react-router-dom'
import { motion } from 'framer-motion'
import Home from './pages/Home'
import Usluge from './pages/Usluge'
import Cijene from './pages/Cijene'
import Portfolio from './pages/Portfolio'
import ONama from './pages/ONama'
import Kontakt from './pages/Kontakt'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import NotFound from './pages/NotFound'

const pageVariants = {
  initial: { opacity: 0, y: 48 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -32, transition: { duration: 0.3, ease: 'easeIn' } },
}

const routes = [
  { path: '/', element: <Home /> },
  { path: '/usluge', element: <Usluge /> },
  { path: '/cijene', element: <Cijene /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/o-nama', element: <ONama /> },
  { path: '/kontakt', element: <Kontakt /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
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

export { pageVariants }
