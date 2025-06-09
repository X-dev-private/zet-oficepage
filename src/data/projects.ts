// data/projects.ts
interface Project {
    id: number
    name: string
    shortDescription: string
    description: string
    imageUrl: string
    technologies: string[]
    github?: string
    liveUrl?: string
    teamSize?: string
    stars?: string
    year: string
    isFeatured: boolean
    isTeamFavorite: boolean
    teamMembers: number[]
  }
  
  interface ProjectData {
    allProjects: Project[]
    techStack: {
      icon: any // You should replace 'any' with the actual icon component type
      name: string
      category: string
    }[]
    projectStats: {
      value: string
      label: string
    }[]
    projectTypes: {
      name: string
      percentage: number
    }[]
  }
  
  const projectData: ProjectData = {
    allProjects: [
      {
        id: 1,
        name: "Zero Eleven Team Official Page",
        shortDescription: "the official page of team Zero Eleven",
        description: "the official page of team Zero Eleven",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        technologies: ["React", "TypeScript", "Node.js", "Vite", "TailWind"],
        github: "https://github.com/X-dev-private/zet-oficepage",
        liveUrl: "",
        teamSize: "1 members",
        stars: "24",
        year: "2025",
        isFeatured: true,
        isTeamFavorite: true,
        teamMembers: [1]
      },
      {
        id: 2,
        name: "Omini Finance",
        shortDescription: "Dex",
        description: "All-in-one Dex",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070&auto=format&fit=crop",
        technologies: ["CosmosSDK", "Rust", "Solidity", "React", "TypeScript", "Node.js", "Vite", "TailWind"],
        github: "https://github.com/X-dev-private/ominiFinance",
        liveUrl: "",
        teamSize: "2 members",
        stars: "524",
        year: "2025",
        isFeatured: true,
        isTeamFavorite: true,
        teamMembers: [1]
      },
      {
        id: 3,
        name: "Infinity Art",
        shortDescription: "descentralized NFT Market-Place",
        description: "descentralized NFT Market-Place",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070&auto=format&fit=crop",
        technologies: ["Solidity", "React", "JavaScript", "Node.js", "TailWind" ,"AWS"],
        github: "https://github.com/X-dev-private/ominiFinance",
        liveUrl: "",
        teamSize: "2 members",
        stars: "524",
        year: "2025",
        isFeatured: false,
        isTeamFavorite: true,
        teamMembers: [1]
      },
      {
        id: 4,
        name: "Work 3",
        shortDescription: "descentralized free-lancer hub",
        description: "descentralized free-lancer hub",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070&auto=format&fit=crop",
        technologies: ["Solidity", "React", "JavaScript", "Node.js", "AWS"],
        github: "https://github.com/X-dev-private/ominiFinance",
        liveUrl: "",
        teamSize: "2 members",
        stars: "224",
        year: "2025",
        isFeatured: false,
        isTeamFavorite: true,
        teamMembers: [1]
      }
    ],
    techStack: [
      {
        icon: "FiCode", // This should be replaced with actual icon component
        name: "React",
        category: "Frontend"
      },
      {
        icon: "FiCode",
        name: "TypeScript",
        category: "Language"
      },
      {
        icon: "FiLayers",
        name: "Node.js",
        category: "Backend"
      },
      {
        icon: "FiLayers",
        name: "Next.js",
        category: "Fullstack"
      },
      {
        icon: "FiCode",
        name: "Python",
        category: "Language"
      },
      {
        icon: "FiLayers",
        name: "Django",
        category: "Backend"
      }
    ],
    projectStats: [
      {
        value: "50+",
        label: "Projects Completed"
      },
      {
        value: "15",
        label: "Open Source"
      },
      {
        value: "12",
        label: "Ongoing Projects"
      },
      {
        value: "100%",
        label: "Client Satisfaction"
      }
    ],
    projectTypes: [
      {
        name: "Web Applications",
        percentage: 45
      },
      {
        name: "Mobile Apps",
        percentage: 25
      },
      {
        name: "Enterprise Software",
        percentage: 20
      },
      {
        name: "Open Source",
        percentage: 10
      }
    ]
  }
  
  // Utility functions
  export function getFeaturedProjects(): Project[] {
    return projectData.allProjects.filter(project => project.isFeatured)
  }
  
  export function getTeamFavorites(): Project[] {
    return projectData.allProjects.filter(project => project.isTeamFavorite)
  }
  
  export function getProjectsByMember(memberId: number): Project[] {
    return projectData.allProjects.filter(project => project.teamMembers.includes(memberId))
  }
  
  export function getTechStack() {
    return projectData.techStack
  }
  
  export function getProjectStats() {
    return projectData.projectStats
  }
  
  export function getProjectTypes() {
    return projectData.projectTypes
  }
  
  export default projectData
  export type { Project, ProjectData }