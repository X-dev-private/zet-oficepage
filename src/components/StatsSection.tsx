// components/StatsSection.tsx
import { motion } from 'framer-motion'

// Definindo a interface para as estatísticas
interface Stat {
  number: string;
  label: string;
}

// Definindo as props do StatItem
interface StatItemProps {
  stat: Stat;
  index: number;
}

export const StatsSection = () => (
  <section className="container mx-auto px-6 py-20 w-full">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <StatItem key={index} stat={stat} index={index} />
        ))}
      </div>
    </motion.div>
  </section>
)

const stats: Stat[] = [
  { number: "50+", label: "Projects Completed" },
  { number: "10M+", label: "Lines of Code" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "∞", label: "Cups of Coffee" }
]

const StatItem = ({ stat, index }: StatItemProps) => (
  <div className="p-4">
    <motion.p 
      className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2"
      initial={{ scale: 0.9 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {stat.number}
    </motion.p>
    <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
  </div>
)