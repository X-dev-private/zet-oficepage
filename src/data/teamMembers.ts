// data/teamMembers.ts
interface TeamMember {
    id: number
    name: string
    role: string
    expertise: string
    bio: string
    avatarUrl: string
    coverUrl?: string
    twitter?: string
    linkedin?: string
    github?: string
    website?: string
  }
  
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Gabriel (X) ribeiro",
      role: "Lead Developer",
      expertise: "Architecture & Backend",
      bio: "no bio",
      avatarUrl: "https://github.com/X-dev-private.png", // Aqui está a mudança
      coverUrl: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1974&auto=format&fit=crop",
      twitter: "https://x.com/TheXUser00",
      github: "https://github.com/X-dev-private", // Você também pode atualizar este link
    },
    {
      id: 2,
      name: "Felipe (Mestre Camus) Porto",
      role: "Frontend Specialist",
      expertise: "React & UX",
      bio: "Passionate about creating intuitive user experiences with modern web technologies.",
      avatarUrl: "https://github.com/MestreCamus.png",
      coverUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
      github: "https://github.com/MestreCamus"
    }
  ]
  
  export default teamMembers