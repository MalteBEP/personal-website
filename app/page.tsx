'use client';
import { SectionComponent } from '@/components/sections/SectionComponent';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
    
  return (
      <div>
          <SectionComponent id={'home'}>
              <HeroSection/>
          </SectionComponent>
          
          <SectionComponent id={'about'}>
              <AboutSection/>
          </SectionComponent>
          
          <SectionComponent id={'projects'}>
              <ProjectsSection/>
          </SectionComponent>
          
          <SectionComponent id="contact">
              <ContactSection/>
          </SectionComponent>
          
      </div>);
}
