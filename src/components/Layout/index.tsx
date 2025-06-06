import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />
      <Navbar />
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  )
}

export default Layout