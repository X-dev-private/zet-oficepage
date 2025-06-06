const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-900/80 to-purple-900/80 border-b border-indigo-500/20 backdrop-blur-lg">
      {/* Efeito de partículas decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-2 h-2 rounded-full bg-purple-400/30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/5 w-3 h-3 rounded-full bg-indigo-400/40 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute bottom-1/4 left-1/5 w-1 h-1 rounded-full bg-white/50 animate-pulse" style={{ animationDelay: '0.7s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-24">
          {/* Logo e nome da equipe */}
          <div className="flex items-center space-x-4 group">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 group-hover:rotate-6 transition-transform duration-300">
              <img 
                src="../../../public/ChatGPT Image 6 de jun. de 2025, 03_24_14.png"
                alt="Zero Eleven Team Logo"
                className="h-16 w-16 object-contain"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent tracking-tight">
                ZERO ELEVEN
              </h1>
              <p className="text-xs text-purple-300/80 -mt-1 font-mono">// INNOVATION CODED</p>
            </div>
          </div>

          {/* Elementos decorativos do lado direito */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-purple-300/60">
              <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse"></span>
              <span className="text-sm font-mono">v2.0.11</span>
            </div>
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-purple-400/50 to-transparent"></div>
            <div className="text-sm text-purple-200/80 font-mono">
              {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header