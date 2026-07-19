import { useEffect, useRef, useState } from 'react';
import { urlFor } from '../sanity/lib/image';

export default function MarqueeSection({ stack = [] }: { stack?: any[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(raw);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!stack || stack.length === 0) return null;

  const multipliedStack = [...stack, ...stack, ...stack, ...stack, ...stack, ...stack];

  const ROW_1 = multipliedStack;
  const ROW_2 = [...multipliedStack].reverse();

  const row1Transform = `translateX(${offset - 400}px)`;
  const row2Transform = `translateX(${-(offset - 400)}px)`;

  return (
    <section
      ref={sectionRef}
      className="bg-slate-900 pb-10 pt-24 sm:pt-32 md:pt-40"
      style={{ overflowX: 'clip' }}
    >
      <div className="flex flex-col gap-6">
        <div
          className="flex gap-6"
          style={{ transform: row1Transform, willChange: 'transform' }}
        >
          {ROW_1.map((item, i) => (
            <div
              key={`row1-${i}`}
              className="flex items-center gap-4 rounded-full border border-slate-700 bg-slate-800 px-8 py-4 shadow-[0_0_15px_rgba(0,0,0,0.5)] whitespace-nowrap"
            >
              {item.icon && (
                <img
                  src={urlFor(item.icon).width(40).height(40).url()}
                  alt={item.name}
                  className="h-10 w-10 object-contain"
                />
              )}
              <span className="font-heading text-xl font-semibold uppercase tracking-wide text-slate-50">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        <div
          className="flex gap-6"
          style={{ transform: row2Transform, willChange: 'transform' }}
        >
          {ROW_2.map((item, i) => (
            <div
              key={`row2-${i}`}
              className="flex items-center gap-4 rounded-full border border-slate-700 bg-slate-800 px-8 py-4 shadow-[0_0_15px_rgba(0,0,0,0.5)] whitespace-nowrap"
            >
              {item.icon && (
                <img
                  src={urlFor(item.icon).width(40).height(40).url()}
                  alt={item.name}
                  className="h-10 w-10 object-contain"
                />
              )}
              <span className="font-heading text-xl font-semibold uppercase tracking-wide text-slate-50">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
