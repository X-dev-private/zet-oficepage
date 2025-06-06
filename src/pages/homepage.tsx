import { CTASection } from '../components/CTASection'
import { HeroSection } from '../components/HeroSection'
import { ServicesSection } from '../components/ServicesSection'
import { StatsSection } from '../components/StatsSection'
import { TeamSection } from '../components/TeamSection'


export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-x-hidden w-full">
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <StatsSection />
      <CTASection />
    </div>
  )
}