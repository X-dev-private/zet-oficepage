import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiUsers, FiStar } from 'react-icons/fi'
import { SectionHeader } from '../components/SectionHeader'
import { 
  getFeaturedProjects, 
  getTeamFavorites, 
  getTechStack, 
  getProjectStats, 
  getProjectTypes,
  Project
} from '../data/projects'

const ProjectsPage = () => {
  const featuredProjects = getFeaturedProjects()
  const allProjects = getTeamFavorites()
  const techStack = getTechStack()
  const projectStats = getProjectStats()
  const projectTypes = getProjectTypes()

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Our Projects
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Innovative solutions crafted with passion and expertise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Featured Work"
            description="Highlighted projects that showcase our capabilities"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="All Projects"
            description="Explore our complete portfolio of work"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Tech Stack</h2>
              <p className="text-gray-300 mb-6">
                We leverage cutting-edge technologies to build robust, scalable, 
                and performant applications tailored to our clients' needs.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, index) => {
                  const IconComponent = tech.icon // Get the actual icon component
                  return (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                      <div className="p-2 bg-indigo-500/10 rounded-lg">
                        <IconComponent className="text-indigo-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">{tech.name}</h4>
                        <p className="text-sm text-gray-400">{tech.category}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold">Project Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                {projectStats.map((stat, index) => (
                  <div key={index} className="bg-gray-800/50 p-6 rounded-xl">
                    <div className="text-3xl font-bold mb-2 text-indigo-400">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h4 className="font-medium mb-4">Project Types</h4>
                <div className="space-y-3">
                  {projectTypes.map((type, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-300">{type.name}</span>
                      <span className="text-gray-400">{type.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Have a Project in Mind?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you need a web application, mobile app, or custom software solution, 
              our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium hover:opacity-90 transition">
                Get in Touch
              </button>
              <button className="px-8 py-3 border border-gray-600 rounded-lg font-medium hover:bg-gray-800/50 transition">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Featured Project Card Component
const FeaturedProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
  >
    <div className="relative h-64 w-full">
      <img 
        src={project.imageUrl} 
        alt={project.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6">
        <span className="inline-block px-3 py-1 bg-indigo-600 rounded-full text-xs font-medium mb-2">
          Featured
        </span>
        <h3 className="text-2xl font-bold">{project.name}</h3>
        <p className="text-gray-300">{project.shortDescription}</p>
      </div>
    </div>
    
    <div className="p-6">
      <p className="text-gray-300 mb-6">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-indigo-400 transition">
              <FiGithub className="w-5 h-5 mr-1" /> Code
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-purple-400 transition">
              <FiExternalLink className="w-5 h-5 mr-1" /> Live Demo
            </a>
          )}
        </div>
        
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          {project.teamSize && (
            <span className="flex items-center">
              <FiUsers className="w-4 h-4 mr-1" /> {project.teamSize}
            </span>
          )}
          {project.stars && (
            <span className="flex items-center">
              <FiStar className="w-4 h-4 mr-1" /> {project.stars}
            </span>
          )}
        </div>
      </div>
    </div>
  </motion.div>
)

// Project Card Component
const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
  >
    <div className="relative h-48 w-full">
      <img 
        src={project.imageUrl} 
        alt={project.name}
        className="w-full h-full object-cover"
      />
      {project.isFeatured && (
        <span className="absolute top-3 right-3 px-2 py-1 bg-indigo-600 rounded-full text-xs font-medium">
          Featured
        </span>
      )}
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{project.name}</h3>
      <p className="text-gray-300 text-sm mb-4">{project.shortDescription}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech, index) => (
          <span key={index} className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2 py-1 rounded-full text-xs text-gray-400">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>
      
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-400">{project.year}</span>
        <div className="flex space-x-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition">
              <FiGithub className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
              <FiExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
)

export default ProjectsPage