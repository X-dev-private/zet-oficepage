// components/TeamSection.tsx
import { motion } from 'framer-motion'
import { FiGithub, FiTwitter, FiLinkedin, FiGlobe } from 'react-icons/fi'
import { SectionHeader } from './SectionHeader'
import teamMembers from '../data/teamMembers'

// Definindo o tipo localmente
type TeamMember = typeof teamMembers[0]

// Componente TeamMemberCard
const TeamMemberCard = ({ member, variants }: { 
  member: TeamMember;
  variants: any;
}) => (
  <motion.div 
    variants={variants}
    whileHover={{ scale: 1.03 }}
    className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center"
  >
    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-blue-400">
      <img 
        src={member.avatarUrl}
        alt={member.name}
        className="w-full h-full object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=random`
        }}
      />
    </div>
    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
    <p className="text-blue-400 mb-3">{member.role}</p>
    <p className="text-gray-300 text-sm mb-4">{member.expertise}</p>
    <div className="flex justify-center space-x-3">
      {member.github && (
        <a 
          href={member.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition"
          aria-label="GitHub"
        >
          <FiGithub className="w-4 h-4" />
        </a>
      )}
      {member.twitter && (
        <a 
          href={member.twitter} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-8 h-8 bg-gray-700 hover:bg-blue-500 rounded-full flex items-center justify-center transition"
          aria-label="Twitter"
        >
          <FiTwitter className="w-4 h-4" />
        </a>
      )}
      {member.linkedin && (
        <a 
          href={member.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-8 h-8 bg-gray-700 hover:bg-blue-700 rounded-full flex items-center justify-center transition"
          aria-label="LinkedIn"
        >
          <FiLinkedin className="w-4 h-4" />
        </a>
      )}
      {member.website && (
        <a 
          href={member.website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-8 h-8 bg-gray-700 hover:bg-purple-500 rounded-full flex items-center justify-center transition"
          aria-label="Website"
        >
          <FiGlobe className="w-4 h-4" />
        </a>
      )}
    </div>
  </motion.div>
)

// Componente principal TeamSection
export const TeamSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="bg-gray-800/30 py-20 w-full">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="The Zero Eleven Team"
          description="Diverse talents united by a passion for technology and innovation."
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <TeamMemberCard 
              key={member.id}
              member={member}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}