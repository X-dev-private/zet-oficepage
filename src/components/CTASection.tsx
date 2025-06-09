// components/CTASection.jsx
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export const CTASection = () => (
  <section className="container mx-auto px-6 py-20 w-full">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-800/50 border border-gray-700 rounded-2xl p-12 text-center relative overflow-hidden"
    >
      <BackgroundBlobs />
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          Let's discuss how Zero Eleven can bring your vision to life with cutting-edge technology.
        </p>
        <div className="flex justify-center">
          <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-blue-400 text-blue-400 rounded-full font-medium hover:bg-blue-900/30 transition shadow-lg shadow-blue-500/10"
            >
              Contact Our Team <FiArrowRight className="ml-2 inline" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  </section>
)

const BackgroundBlobs = () => (
  <>
    <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-float"></div>
    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-float-delay"></div>
  </>
)