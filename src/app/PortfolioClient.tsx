"use client";

import HeroSection from '../sections/HeroSection';
import MarqueeSection from '../sections/MarqueeSection';
import AboutSection from '../sections/AboutSection';
import SkillsSection from '../sections/SkillsSection';
import ProjectsSection from '../sections/ProjectsSection';
import FooterSection from '../sections/FooterSection';

interface PortfolioClientProps {
  projects: any[];
  skills: any[];
  stack: any[];
  about: any;
}

export default function PortfolioClient({ projects, skills, stack, about }: PortfolioClientProps) {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="mx-auto max-w-[1440px] bg-slate-900" style={{ overflowX: 'clip' }}>
        <HeroSection />
        <MarqueeSection stack={stack} />
        <AboutSection about={about} />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <FooterSection />
      </div>
    </div>
  );
}
