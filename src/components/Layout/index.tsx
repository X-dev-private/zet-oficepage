import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      
      <main className="flex-grow p-4 md:p-8">
        <Outlet /> {/* As páginas serão renderizadas aqui */}
      </main>
      
      <Footer />
    </div>
  )
}

export default Layout