const Header = () => {
    return (
      <header className="bg-gradient-to-r from-indigo-600 to-purple-800 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-indigo-600 font-bold text-xl">W3</span>
            </div>
            <h1 className="text-2xl font-bold">Web3 Team</h1>
          </div>
          <button className="bg-white text-indigo-600 px-4 py-2 rounded-full font-medium hover:bg-opacity-90 transition">
            Connect Wallet
          </button>
        </div>
      </header>
    )
  }
  
  export default Header