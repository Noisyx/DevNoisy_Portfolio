"use client";

import HeroSection from '../sections/HeroSection';
import MarqueeSection from '../sections/MarqueeSection';
import AboutSection from '../sections/AboutSection';
import SkillsSection from '../sections/SkillsSection';
import ProjectsSection from '../sections/ProjectsSection';

interface PortfolioClientProps {
  projects: any[];
  skills: any[];
}

export default function PortfolioClient({ projects, skills }: PortfolioClientProps) {
  return (
    <div className="bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
    </div>
  );
}
