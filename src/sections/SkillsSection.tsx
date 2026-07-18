import FadeIn from '../components/FadeIn';
import { urlFor } from '../sanity/lib/image';

export default function SkillsSection({ skills }: { skills: any[] }) {
  return (
    <section
      id="services"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={30}>
        <h2
          className="mb-16 text-center font-black uppercase leading-none text-[#0C0C0C] sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div
        className="mx-auto max-w-5xl border-t"
        style={{ borderColor: 'rgba(12, 12, 12, 0.15)' }}
      >
        {skills.map((skill, i) => {
          const number = (i + 1).toString().padStart(2, '0');
          return (
            <FadeIn key={skill._id || i} delay={i * 0.1} y={30}>
              <div
                className="flex items-start gap-6 border-b py-8 sm:gap-10 sm:py-10 md:gap-14 md:py-12"
                style={{ borderColor: 'rgba(12, 12, 12, 0.15)' }}
              >
                <span
                  className="flex-shrink-0 font-black leading-none text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {number}
                </span>
                
                {skill.icon && (
                  <div className="hidden sm:block mt-4 flex-shrink-0">
                     <img src={urlFor(skill.icon).width(80).height(80).url()} alt={skill.name} className="w-16 h-16 rounded-full object-cover" />
                  </div>
                )}

                <div className="flex flex-col gap-2 pt-2 sm:gap-3 md:pt-4">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C]"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {skill.name}
                  </h3>
                  <p
                    className="max-w-2xl font-light leading-relaxed text-[#0C0C0C]"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                  >
                    Niveau: <strong className="capitalize">{skill.level}</strong> <br />
                    Catégorie: <strong className="capitalize">{skill.category}</strong>
                  </p>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
