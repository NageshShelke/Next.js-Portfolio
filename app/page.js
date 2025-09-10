import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"
import Hero from "@/components/Hero"
import ProjectsSection from "@/components/ProjectsSection"
import SiteExploreSection from "@/components/SiteExploreSection"
import SkillsGrid from "@/components/SkillsGrid"
import SkillsSection from "@/components/SkillsSection"

export default function Home() {
  return(
   <div>
       <Hero />
       <SkillsGrid />
       <ProjectsSection />
       <SkillsSection />
       <AboutSection />
       <SiteExploreSection />
       <ContactSection />
   </div>
  )
}
