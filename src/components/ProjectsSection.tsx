// components/ProjectsSection.tsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiUsers, FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { SectionHeader } from './SectionHeader'
import { getTeamFavorites, Project } from '../data/projects'

export const ProjectsSection = () => {
  const allProjects = getTeamFavorites()
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === allProjects.length - 1 ? 0 : prev + 1))
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? allProjects.length - 1 : prev - 1))
  }

  return (
    <section className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Our Projects"
          description="Explore our portfolio of work"
        />

        <div className="relative mt-16">
          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/80 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-all"
            aria-label="Previous project"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/80 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-all"
            aria-label="Next project"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>

          {/* Projects Carousel */}
          <div className="flex overflow-x-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full flex-shrink-0"
            >
              <ProjectCard project={allProjects[currentIndex]} />
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {allProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-indigo-500 w-6' : 'bg-gray-600'}`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Project Card Component (Updated for horizontal display)
const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col md:flex-row">
    {/* Image Section - Wider in horizontal layout */}
    <div className="md:w-1/2 h-64 md:h-auto relative">
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
    
    {/* Content Section */}
    <div className="md:w-1/2 p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
        <p className="text-gray-300 mb-4">{project.shortDescription}</p>
        <p className="text-gray-400 text-sm mb-6">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between text-sm mb-4">
          <span className="text-gray-400">{project.year}</span>
          {project.teamSize && (
            <span className="flex items-center text-gray-400">
              <FiUsers className="w-4 h-4 mr-1" /> {project.teamSize}
            </span>
          )}
          {project.stars && (
            <span className="flex items-center text-gray-400">
              <FiStar className="w-4 h-4 mr-1" /> {project.stars}
            </span>
          )}
        </div>

        <div className="flex space-x-4">
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
      </div>
    </div>
  </div>
)