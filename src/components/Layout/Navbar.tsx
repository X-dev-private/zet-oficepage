import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/team", label: "Team" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" }
  ]

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`py-3 px-2 border-b-2 transition-colors ${
                location.pathname === link.to
                  ? 'border-indigo-400 text-indigo-400'
                  : 'border-transparent hover:border-gray-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar