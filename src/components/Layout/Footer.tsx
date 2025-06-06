const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Web3 Team. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-indigo-400 transition">Twitter</a>
            <a href="#" className="hover:text-indigo-400 transition">GitHub</a>
            <a href="#" className="hover:text-indigo-400 transition">Discord</a>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer