import FadeIn from '../components/FadeIn';
import { urlFor } from '../sanity/lib/image';

import BorderGlow from '../components/BorderGlow';

export default function SkillsSection({ skills }: { skills: any[] }) {
  return (
    <section
      id="skills"
      className="rounded-t-[40px] bg-slate-900 px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading font-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, i) => {
          return (
            <FadeIn key={skill._id || i} delay={i * 0.1} y={30}>
              <BorderGlow
                className="h-full w-full"
                backgroundColor="#0f172a" // slate-900
                glowColor="199 89 48" // sky-500 equivalent approx HSL (199, 89%, 48%)
                borderRadius={24}
                animated={false}
              >
                <div className="flex flex-col h-full items-start gap-6 p-6 sm:p-8">
                  {skill.icon && (
                    <div className="relative z-10 flex-shrink-0">
                       <img src={urlFor(skill.icon).width(60).height(60).url()} alt={skill.name} className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover" />
                    </div>
                  )}

                  <div className="relative z-10 flex flex-col gap-2">
                    <h3 className="font-heading font-semibold uppercase text-slate-50 text-xl sm:text-2xl">
                      {skill.name}
                    </h3>
                    <p className="font-light leading-relaxed text-slate-400 text-sm sm:text-base">
                      Niveau: <strong className="capitalize text-slate-300">{skill.level}</strong> <br />
                      Catégorie: <strong className="capitalize text-slate-300">{skill.category}</strong>
                    </p>
                  </div>
                </div>
              </BorderGlow>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
