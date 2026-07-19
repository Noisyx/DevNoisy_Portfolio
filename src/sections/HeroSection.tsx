import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import HighlightedText from '../components/HighlightedText';
import WorkflowMockup from '../components/WorkflowMockup';

const NAV_LINKS = ['About', 'Skills', 'Projects'];

export default function HeroSection({ stack = [] }: { stack?: any[] }) {
  const stackNames = stack.map((s) => s.name);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pt-28 pb-10 sm:px-8 lg:px-12">
      {/* Background Elements */}
      <div className="absolute top-[20%] left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-sky-500/40 to-transparent shadow-[0_0_30px_rgba(56,189,248,0.4)]"></div>
      
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

      {/* Main Content Grid */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
        
        {/* Left Column: Text */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          
          {/* Title */}
          <FadeIn delay={0.2} y={20}>
            <h1 className="hero-heading font-heading mb-8 text-4xl font-black uppercase leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem]">
              <HighlightedText text="Je conçois les systèmes" />
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>
              <HighlightedText text="qui font gagner du temps" />
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>
              <span className="text-sky-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]" style={{ WebkitTextFillColor: '#38bdf8', color: '#38bdf8' }}>
                aux entreprises.
              </span>
            </h1>
          </FadeIn>

          {/* Subtitle List */}
          <FadeIn delay={0.3} y={20}>
            <div className="mb-10 flex flex-col gap-3 border-l-2 border-slate-700 pl-6 text-lg font-light text-slate-300 sm:text-xl lg:text-2xl text-left">
              <p><HighlightedText text="Applications SaaS." /></p>
              <p><HighlightedText text="Automatisation IA." /></p>
              <p><HighlightedText text="Intégrations API." /></p>
              <p><HighlightedText text="Workflows intelligents." /></p>
            </div>
          </FadeIn>

          {/* Buttons */}
          <FadeIn delay={0.4} y={20} className="mb-12 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <a
              href="#projects"
              className="group relative inline-block rounded-full bg-sky-500 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-slate-900 transition-all duration-300 hover:bg-sky-400 active:scale-[0.98] sm:px-10 sm:py-4 sm:text-sm"
            >
              <span className="absolute inset-0 rounded-full bg-sky-400 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60"></span>
              <span className="relative">Voir mes projets</span>
            </a>
            <ContactButton text="Travaillons ensemble" />
          </FadeIn>

          {/* Proof */}
          {stackNames.length > 0 && (
            <FadeIn delay={0.5} y={20}>
              <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-slate-900/40 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl lg:flex-row lg:items-center lg:gap-4">
                <span className="whitespace-nowrap text-sm font-bold text-slate-50 uppercase tracking-widest">
                  {stack.length} technologies
                </span>
                <span className="hidden h-1 w-1 rounded-full bg-slate-600 lg:block"></span>
                <span className="text-sm font-medium text-slate-300 leading-relaxed">
                  {stackNames.join(' • ')}
                </span>
              </div>
            </FadeIn>
          )}
        </div>

        {/* Right Column: Mockup */}
        <FadeIn delay={0.4} y={40} className="flex w-full justify-center lg:justify-end">
          <WorkflowMockup />
        </FadeIn>
        
      </div>
    </section>
  );
}
