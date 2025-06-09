// components/HeroSection.jsx
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export const HeroSection = () => (
  <section className="relative overflow-hidden w-full">
    <BackgroundElements />
    <div className="container mx-auto px-6 py-32 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <Tagline />
        <MainHeading />
        <Description />
        <ActionButtons />
      </motion.div>
    </div>
  </section>
)

const BackgroundElements = () => (
  <div className="absolute inset-0 z-0">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-float"></div>
    <div className="absolute top-1/2 -right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-float-delay"></div>
  </div>
)

const Tagline = () => (
  <div className="inline-block px-3 py-1 mb-6 bg-gray-800 rounded-full border border-gray-700 text-sm font-medium">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
      Innovation in Development
    </span>
  </div>
)

const MainHeading = () => (
  <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
    We Are <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Zero Eleven</span>
  </h1>
)

const Description = () => (
  <p className="text-xl text-gray-300 mb-8">
    A passionate team of developers crafting cutting-edge solutions with precision and creativity. We turn complex problems into elegant code.
  </p>
)

const ActionButtons = () => (
  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
    <Link to="/projects">
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:opacity-90 transition flex items-center shadow-lg shadow-blue-500/20"
      >
        Our Projects <FiArrowRight className="ml-2" />
      </motion.button>
    </Link>
    <Link to="/contact">
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 border border-blue-400 text-blue-400 rounded-full font-medium hover:bg-blue-900/30 transition shadow-lg shadow-blue-500/10"
      >
        Meet the Team
      </motion.button>
    </Link>
  </div>
)