import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { FiCode, FiCpu, FiDatabase, FiLayers, FiServer, FiZap } from 'react-icons/fi'
import { SectionHeader } from './SectionHeader'
import { useState } from 'react'
import type { ReactElement } from 'react'

// Interface for service items
interface Service {
  icon: ReactElement;
  title: string;
  description: string;
  color: string;
}

// Props for ServiceCard component
interface ServiceCardProps {
  index: number;
  service: Service;
  hoveredCard: number | null;
  setHoveredCard: (index: number | null) => void;
  variants: Variants;
}

export const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="container mx-auto px-6 py-20 w-full">
      <SectionHeader 
        title="Our Development Expertise"
        description="We specialize in creating robust, scalable solutions tailored to your needs."
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            index={index}
            service={service}
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
            variants={itemVariants}
          />
        ))}
      </motion.div>
    </section>
  )
}

// Services data
const services: Service[] = [
  {
    icon: <FiCode className="w-8 h-8" />,
    title: "Custom Software",
    description: "Tailored applications designed specifically for your business requirements",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <FiCpu className="w-8 h-8" />,
    title: "AI Solutions",
    description: "Intelligent systems that learn and adapt to your operational needs",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: <FiDatabase className="w-8 h-8" />,
    title: "Data Engineering",
    description: "Powerful data pipelines and analytics platforms",
    color: "from-green-500 to-green-600"
  },
  {
    icon: <FiLayers className="w-8 h-8" />,
    title: "Cloud Architecture",
    description: "Scalable and resilient cloud-native applications",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: <FiServer className="w-8 h-8" />,
    title: "DevOps Automation",
    description: "Streamlined deployment and infrastructure management",
    color: "from-red-500 to-red-600"
  },
  {
    icon: <FiZap className="w-8 h-8" />,
    title: "Performance Optimization",
    description: "Lightning-fast applications with minimal resource usage",
    color: "from-yellow-500 to-yellow-600"
  }
]

const ServiceCard = ({ 
  index, 
  service, 
  hoveredCard, 
  setHoveredCard, 
  variants 
}: ServiceCardProps) => (
  <motion.div 
    variants={variants}
    whileHover={{ y: -10 }}
    onHoverStart={() => setHoveredCard(index)}
    onHoverEnd={() => setHoveredCard(null)}
    className={`bg-gray-800/50 border border-gray-700 rounded-xl p-8 transition-all duration-300 ${
      hoveredCard === index ? 'shadow-xl' : 'shadow-md'
    }`}
  >
    <div className={`w-16 h-16 mb-6 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
      {service.icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
    <p className="text-gray-300">{service.description}</p>
  </motion.div>
)