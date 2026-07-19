import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 overflow-hidden bg-slate-950 px-6 py-20 sm:px-8 md:px-10 lg:py-32">
      {/* Background Grid & Glow */}
      <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-sky-500/30 to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,transparent_0%,#000_100%)]"></div>
      
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-16 md:flex-row md:items-end md:gap-12">
          
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <FadeIn delay={0} y={20}>
              <h2 className="font-heading mb-8 text-4xl font-black uppercase leading-tight tracking-tighter text-slate-50 sm:text-5xl md:text-6xl lg:text-[5rem]">
                Prêt à lancer <br className="hidden md:block" />
                <span className="text-sky-400">votre projet ?</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1} y={20}>
              <ContactButton text="Travaillons ensemble" />
            </FadeIn>
          </div>

          <FadeIn delay={0.2} y={20} className="flex flex-col items-center gap-6 md:items-end">
            <div className="flex gap-6 text-sm font-semibold uppercase tracking-widest text-slate-400">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-sky-400">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-sky-400">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-sky-400">Twitter</a>
            </div>
            <p className="text-sm font-light text-slate-500">
              &copy; {currentYear} DevNoisy (SOULEYMAN Moustapha).<br className="md:hidden" /> Tous droits réservés.
            </p>
          </FadeIn>
          
        </div>
      </div>
    </footer>
  );
}
