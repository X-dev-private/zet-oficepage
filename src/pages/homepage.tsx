import { CTASection } from '../components/CTASection'
import { HeroSection } from '../components/HeroSection'
import { ServicesSection } from '../components/ServicesSection'
import { StatsSection } from '../components/StatsSection'
import { TeamSection } from '../components/TeamSection'


export const Home: React.FC = () => {
  return (
    <div className="text-white w-full">
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <StatsSection />
      <CTASection />
    </div>
  )
}