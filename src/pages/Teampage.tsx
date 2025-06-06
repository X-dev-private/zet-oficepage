// pages/TeamPage.tsx
import { motion } from 'framer-motion'
import { FiGithub, FiTwitter, FiLinkedin, FiGlobe, FiAward, FiUsers } from 'react-icons/fi'
import { SectionHeader } from '../components/SectionHeader'

const TeamPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              The brilliant minds behind Zero Eleven's innovative solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Core Team"
            description="Diverse talents united by a passion for technology and innovation"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            {teamMembers.map((member) => (
              <TeamMemberProfile key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
              <p className="text-gray-300 mb-6">
                At Zero Eleven, we foster a culture of collaboration, continuous learning, 
                and innovation. We believe that great ideas can come from anywhere, and 
                we empower every team member to contribute their unique perspective.
              </p>
              
              <div className="space-y-4">
                {cultureValues.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="mt-1 p-2 bg-indigo-500/10 rounded-lg">
                      <value.icon className="text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-bold">{value.title}</h4>
                      <p className="text-gray-400">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {teamPhotos.map((photo, index) => (
                <div 
                  key={index}
                  className={`rounded-xl overflow-hidden ${photo.className}`}
                >
                  <img 
                    src={photo.url} 
                    alt="Team activity" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Want to Join Our Team?</h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals who share our passion for technology
              and innovation. Check out our current openings or send us your resume.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium hover:opacity-90 transition">
                View Open Positions
              </button>
              <button className="px-8 py-3 border border-gray-600 rounded-lg font-medium hover:bg-gray-800/50 transition">
                Submit Application
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Team Member Profile Component
const TeamMemberProfile = ({ member }: { member: typeof teamMembers[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
  >
    <div className="relative h-64 w-full">
      <img 
        src={member.coverUrl || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'} 
        alt={member.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-24 h-24 rounded-full border-4 border-gray-800 overflow-hidden bg-gray-700">
          <img 
            src={member.avatarUrl}
            alt={member.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=random`
            }}
          />
        </div>
      </div>
    </div>
    
    <div className="pt-16 pb-8 px-6 text-center">
      <h3 className="text-xl font-bold">{member.name}</h3>
      <p className="text-indigo-400 mb-2">{member.role}</p>
      <p className="text-gray-400 text-sm mb-4">{member.expertise}</p>
      
      <div className="flex justify-center space-x-3 mb-6">
        {member.github && (
          <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition">
            <FiGithub className="w-5 h-5" />
          </a>
        )}
        {member.twitter && (
          <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
            <FiTwitter className="w-5 h-5" />
          </a>
        )}
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition">
            <FiLinkedin className="w-5 h-5" />
          </a>
        )}
        {member.website && (
          <a href={member.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
            <FiGlobe className="w-5 h-5" />
          </a>
        )}
      </div>
      
      <p className="text-gray-300 text-sm">{member.bio}</p>
    </div>
  </motion.div>
)

// Team Data
const teamMembers = [
  {
    id: 1,
    name: "Alex Carter",
    role: "Lead Developer",
    expertise: "Architecture & Backend",
    bio: "10+ years building scalable systems. Loves TypeScript and clean architecture.",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    coverUrl: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1974&auto=format&fit=crop",
    twitter: "#",
    linkedin: "#",
    github: "#",
    website: "#"
  },
  {
    id: 2,
    name: "Sam Lee",
    role: "Frontend Specialist",
    expertise: "React & UX",
    bio: "Passionate about creating intuitive user experiences with modern web technologies.",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    coverUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
    twitter: "#",
    linkedin: "#",
    github: "#"
  },
  {
    id: 3,
    name: "Jordan Taylor",
    role: "Product Designer",
    expertise: "UI/UX & Prototyping",
    bio: "Design thinker focused on solving real problems through beautiful interfaces.",
    avatarUrl: "https://randomuser.me/api/portraits/men/75.jpg",
    coverUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
    twitter: "#",
    linkedin: "#",
    website: "#"
  },
  {
    id: 4,
    name: "Morgan Wright",
    role: "DevOps Engineer",
    expertise: "Cloud Infrastructure",
    bio: "Automation enthusiast who keeps our systems running smoothly 24/7.",
    avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    coverUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
    github: "#",
    linkedin: "#"
  },
  {
    id: 5,
    name: "Casey Smith",
    role: "QA Specialist",
    expertise: "Testing & Automation",
    bio: "Detail-oriented tester ensuring our products meet the highest standards.",
    avatarUrl: "https://randomuser.me/api/portraits/women/63.jpg",
    coverUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    linkedin: "#"
  },
  {
    id: 6,
    name: "Riley Johnson",
    role: "Project Manager",
    expertise: "Agile & Scrum",
    bio: "Keeps projects on track and teams aligned with business goals.",
    avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    coverUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    twitter: "#",
    linkedin: "#"
  }
]

// Culture Values
const cultureValues = [
  {
    icon: FiUsers,
    title: "Collaboration",
    description: "We work together across disciplines to create the best solutions."
  },
  {
    icon: FiAward,
    title: "Excellence",
    description: "We take pride in our work and strive for the highest quality."
  },
  {
    icon: FiGithub,
    title: "Innovation",
    description: "We encourage experimentation and creative problem-solving."
  }
]

// Team Photos
const teamPhotos = [
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    className: "h-64"
  },
  {
    url: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2070&auto=format&fit=crop",
    className: "h-48"
  },
  {
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    className: "h-48"
  },
  {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    className: "h-64"
  }
]

export default TeamPage