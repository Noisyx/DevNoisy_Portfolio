import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import HighlightedText from '../components/HighlightedText';

const NAV_LINKS = ['About', 'Skills', 'Projects'];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24 sm:px-6 lg:px-8">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav">
        <div className="fixed left-1/2 top-4 z-50 flex w-[90%] max-w-[500px] -translate-x-1/2 items-center justify-between rounded-full border border-slate-700/50 bg-slate-900/70 px-6 py-4 backdrop-blur-md md:top-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs font-semibold uppercase tracking-widest text-slate-300 transition-all duration-200 hover:text-sky-400 sm:text-sm"
            >
              {link}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Main Content */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
        <FadeIn delay={0.15} y={40} as="div">
          <h1 className="hero-heading font-heading mb-6 text-4xl font-black uppercase leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            <HighlightedText text="Je bâtis les systèmes qui propulsent votre créativité." />
          </h1>
        </FadeIn>

        <FadeIn delay={0.3} y={20}>
          <p className="mx-auto mb-10 max-w-2xl text-base font-light leading-relaxed text-slate-300 sm:text-lg md:text-xl">
            <strong className="font-semibold text-slate-50"><HighlightedText text="Développeur Full-stack & Architecte d'automatisation." /></strong> <HighlightedText text="J'aide les créateurs et les startups à structurer leurs idées par le code, de la gestion de paiement SaaS au déploiement d'agents IA." />
          </p>
        </FadeIn>

        <FadeIn delay={0.45} y={20} className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-block rounded-full border border-slate-700 bg-slate-800 px-8 py-3 text-xs font-bold uppercase tracking-widest text-slate-50 transition-all duration-300 hover:bg-slate-700 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-[0.98] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
          >
            Voir mes projets
          </a>
          <ContactButton text="Travaillons ensemble" />
        </FadeIn>

        <FadeIn delay={0.6} y={20} className="mt-12 sm:mt-16">
          <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest text-slate-400">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
            </span>
            <HighlightedText text="Actuellement en train de concevoir des systèmes avec Next.js & n8n." />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
