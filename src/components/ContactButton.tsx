interface ContactButtonProps {
  className?: string;
  onClick?: () => void;
  text?: string;
}

export default function ContactButton({ className = '', onClick, text = 'Contact Me' }: ContactButtonProps) {
  return (
    <a
      href="mailto:devnoisy@gmail.com"
      onClick={onClick}
      className={`inline-block rounded-full bg-sky-400 px-8 py-3 text-xs font-bold uppercase tracking-widest text-slate-900 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] active:scale-[0.98] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
    >
      {text}
    </a>
  );
}
