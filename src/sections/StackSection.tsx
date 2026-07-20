import { OrbitingCircles } from "../components/OrbitingCircles";
import FadeIn from "../components/FadeIn";
import HighlightedText from "../components/HighlightedText";

export default function StackSection() {
  return (
    <section id="skills" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-16 sm:py-24">
      <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_30%,transparent_100%)] pointer-events-none"></div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-5 sm:px-8 lg:px-12">
        
        {/* Title */}
        <FadeIn delay={0.2} y={20} className="text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
            Ma <HighlightedText text="Stack" />
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
            Les outils et technologies que j'utilise pour automatiser vos processus et construire vos applications.
          </p>
        </FadeIn>

        {/* Orbiting Circles */}
        <FadeIn delay={0.4} y={20} className="w-full max-w-[800px]">
          <div className="relative flex h-[500px] sm:h-[600px] w-full flex-col items-center justify-center overflow-hidden">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-slate-400/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent">
              <span className="text-4xl sm:text-5xl font-black uppercase tracking-widest text-slate-800 drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">DEV</span>
            </span>

            {/* Inner Circle */}
            <OrbitingCircles iconSize={50} radius={120} duration={20} delay={20}>
              <Icons.nextjs />
              <Icons.supabase />
              <Icons.python />
              <Icons.api />
            </OrbitingCircles>

            {/* Outer Circle (Reverse) */}
            <OrbitingCircles iconSize={60} radius={220} reverse duration={25} delay={20}>
              <Icons.n8n />
              <Icons.openai />
              <Icons.claude />
              <Icons.stripe />
            </OrbitingCircles>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}

const Icons = {
  nextjs: () => (
    <svg width="100" height="100" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M64 128c35.346 0 64-28.654 64-64S99.346 0 64 0 0 28.654 0 64s28.654 64 64 64z" fill="#000"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M103.264 96.657L54.72 37.6H43.2v52.8h9.6V49.19l42.43 53.693a63.666 63.666 0 008.034-6.226z" fill="#fff"/>
      <path d="M84.8 37.6h-9.6v52.8h9.6V37.6z" fill="#fff"/>
    </svg>
  ),
  supabase: () => (
    <svg width="100" height="100" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M72 10.428v42.923h38.271c6.549 0 10.373 7.42 6.558 12.8L44.8 117.572v-42.924H6.53c-6.55 0-10.373-7.42-6.558-12.8L72 10.428z" fill="#3ECF8E"/>
    </svg>
  ),
  python: () => (
    <svg width="100" height="100" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M63.567 2.378c-30.82 0-29.356 13.34-29.356 13.34l.034 13.803h29.873v4.186H34.197S16.035 32.224 16.035 62.432c0 30.208 15.82 29.343 15.82 29.343h9.658v-13.91s-.14-16.592 16.892-16.592h14.733s15.347.195 15.347-14.79v-28.52s2.006-15.585-14.92-15.585H63.568zM51.107 10.74a4.182 4.182 0 11-.002 8.364 4.182 4.182 0 01.002-8.364z" fill="#387EB8"/>
      <path d="M64.433 125.622c30.82 0 29.356-13.34 29.356-13.34l-.034-13.803H63.882v-4.186h29.92S111.965 95.776 111.965 65.568c0-30.208-15.82-29.343-15.82-29.343h-9.658v13.91s.14 16.592-16.892 16.592H54.862s-15.347-.195-15.347 14.79v28.52s-2.006 15.585 14.92 15.585h10.002v-.004zM76.893 117.26a4.182 4.182 0 11.002-8.364 4.182 4.182 0 01-.002 8.364z" fill="#FFE052"/>
    </svg>
  ),
  api: () => (
    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  n8n: () => (
    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 19.3333C16.0501 19.3333 19.3333 16.0501 19.3333 12C19.3333 7.9499 16.0501 4.66667 12 4.66667C7.9499 4.66667 4.66667 7.9499 4.66667 12C4.66667 16.0501 7.9499 19.3333 12 19.3333Z" fill="#EA4B71"/>
      <path d="M10.875 12C10.875 12.6213 10.3713 13.125 9.75 13.125C9.12868 13.125 8.625 12.6213 8.625 12C8.625 11.3787 9.12868 10.875 9.75 10.875C10.3713 10.875 10.875 11.3787 10.875 12Z" fill="white"/>
      <path d="M15.375 12C15.375 12.6213 14.8713 13.125 14.25 13.125C13.6287 13.125 13.125 12.6213 13.125 12C13.125 11.3787 13.6287 10.875 14.25 10.875C14.8713 10.875 15.375 11.3787 15.375 12Z" fill="white"/>
    </svg>
  ),
  openai: () => (
    <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
  claude: () => (
    <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.56 0c.26 0 .5.16.6.4l5.3 12.18c.08.18.06.4-.04.56l-3.32 5.06a.7.7 0 0 1-.58.32H9.48a.7.7 0 0 1-.58-.32l-3.32-5.06a.66.66 0 0 1-.04-.56L10.84.4A.66.66 0 0 1 11.44 0h1.12Zm3.48 11.96-3.48-8-3.48 8h6.96Z" />
    </svg>
  ),
  stripe: () => (
    <svg width="100" height="100" viewBox="0 0 24 24" fill="#635bff" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.428 14.072c0-1.026.85-1.572 2.378-1.572h1.614v2.793c-1.373 0-3.992-.127-3.992-1.221Zm4.062-5.597v2.336h-1.396c-1.362 0-2.072.486-2.072 1.341 0 .97 1.054 1.258 2.502 1.258h5.367v2.664c0 4.195-3.353 5.432-6.551 5.432-4.048 0-6.248-1.571-6.248-1.571v-3.705s2.217 1.341 4.799 1.341c2.193 0 2.92-1.054 2.92-1.782 0-1.128-1.317-1.428-2.618-1.428h-3.141c-2.433 0-4.636-1.168-4.636-4.57 0-3.666 3.197-5.32 6.539-5.32 3.194 0 4.537 1.25 4.537 1.25v3.754Z" />
    </svg>
  )
};
