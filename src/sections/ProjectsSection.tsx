import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import { urlFor } from '../sanity/lib/image';
import BorderGlow from '../components/BorderGlow';
function ProjectCard({ project, index, totalCards }: { project: any; index: number; totalCards: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky h-[85vh] pt-4"
      style={{ top: `calc(10vh + ${index * 30}px)` }}
    >
      <motion.div style={{ scale, height: '100%' }}>
        <BorderGlow
          className="h-full w-full"
          backgroundColor="#0f172a"
          glowColor="199 89 48"
          borderRadius={40}
          animated={false}
        >
          <div className="flex h-full flex-col gap-4 p-4 sm:gap-6 sm:p-6 md:gap-8 md:p-8">
            {/* Top row */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                <span
                  className="hero-heading font-heading font-black leading-none"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium uppercase tracking-widest text-slate-400 sm:text-sm">
                    {project.techStack?.join(' • ')}
                  </span>
                  <span className="font-heading text-lg font-bold uppercase tracking-wide text-slate-50 sm:text-2xl md:text-3xl">
                    {project.name}
                  </span>
                </div>
              </div>
              {project.link && <LiveProjectButton href={project.link} />}
            </div>

            {/* Bottom row - image grid */}
            <div className="relative z-10 flex flex-1 gap-3 sm:gap-4 h-full">
              {project.image ? (
                <div className="w-full h-full">
                  <img
                    src={urlFor(project.image).width(1200).height(800).url()}
                    alt={`${project.name} overview`}
                    loading="lazy"
                    className="h-full w-full rounded-[24px] object-cover sm:rounded-[32px] md:rounded-[40px]"
                    style={{ maxHeight: '60vh' }}
                  />
                </div>
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-[24px] bg-slate-900 sm:rounded-[32px] md:rounded-[40px]" style={{ minHeight: '40vh' }}>
                  <span className="text-slate-500">No image</span>
                </div>
              )}
            </div>
          </div>
        </BorderGlow>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection({ projects }: { projects: any[] }) {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-slate-900 px-5 pb-20 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading font-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-6xl">
        {projects.map((project, index) => (
          <ProjectCard key={project._id || index} project={project} index={index} totalCards={projects.length} />
        ))}
      </div>
    </section>
  );
}
