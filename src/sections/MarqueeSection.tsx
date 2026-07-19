import { urlFor } from '../sanity/lib/image';
import { motion } from 'framer-motion';

export default function MarqueeSection({ stack = [] }: { stack?: any[] }) {
  if (!stack || stack.length === 0) return null;

  // Duplicate the array multiple times so it fills ultra-wide screens and halves correctly.
  // We need an even number of duplicates for the -50% trick.
  const duplicatedStack = [...stack, ...stack, ...stack, ...stack, ...stack, ...stack, ...stack, ...stack];

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden py-16 sm:py-24">
      {/* Aesthetic Luminous Separator and Grid */}
      <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_30%,transparent_100%)] pointer-events-none"></div>

      <div className="relative z-10 flex w-full flex-col gap-6">
        
        {/* ROW 1: Moves Left */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex gap-6 pr-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {duplicatedStack.map((item, i) => (
              <div
                key={`row1-${i}`}
                className="flex items-center gap-4 rounded-full border border-white/10 bg-slate-900/40 px-6 py-3 shadow-[0_4px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl whitespace-nowrap sm:px-8 sm:py-4 transition-colors duration-300 hover:bg-slate-800/60 hover:border-sky-500/50"
              >
                {item.icon && (
                  <img
                    src={urlFor(item.icon).width(40).height(40).url()}
                    alt={item.name}
                    className="h-8 w-8 object-contain sm:h-10 sm:w-10"
                  />
                )}
                <span className="font-heading text-lg font-semibold uppercase tracking-wide text-slate-50 sm:text-xl">
                  {item.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 2: Moves Right */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex gap-6 pr-6 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {duplicatedStack.map((item, i) => (
              <div
                key={`row2-${i}`}
                className="flex items-center gap-4 rounded-full border border-white/10 bg-slate-900/40 px-6 py-3 shadow-[0_4px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl whitespace-nowrap sm:px-8 sm:py-4 transition-colors duration-300 hover:bg-slate-800/60 hover:border-emerald-500/50"
              >
                {item.icon && (
                  <img
                    src={urlFor(item.icon).width(40).height(40).url()}
                    alt={item.name}
                    className="h-8 w-8 object-contain sm:h-10 sm:w-10"
                  />
                )}
                <span className="font-heading text-lg font-semibold uppercase tracking-wide text-slate-50 sm:text-xl">
                  {item.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
