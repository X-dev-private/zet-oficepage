import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

import NotFound from './pages/NotFound'
import { Home } from './pages/homepage'
import { About } from './pages/AboutPage'
import TeamPage from './pages/Teampage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App