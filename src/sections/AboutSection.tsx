import ContactButton from '../components/ContactButton';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { urlFor } from '../sanity/lib/image';
import HighlightedText from '../components/HighlightedText';
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const JSON_SNIPPET = `{
  "identity": "DevNoisy",
  "role": "Automation Architect",
  "focus": ["SaaS", "AI Agents", "n8n"],
  "status": "building_systems"
}`;

// Custom Easing
const EASE = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

// 3D Tilt Wrapper
function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full"
    >
      {children}
    </motion.div>
  );
}

export default function AboutSection({ about }: { about?: any }) {
  if (!about) return null;

  const myPortableTextComponents: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return (
          <motion.p variants={textItemVariants} className="mb-4">
            {React.Children.map(children, (child) => {
              if (typeof child === 'string') {
                return <HighlightedText text={child} />;
              }
              return child;
            })}
          </motion.p>
        );
      },
    },
    marks: {
      strong: ({ children }) => <strong className="font-semibold text-slate-50">{children}</strong>,
    },
  };

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10"
    >
      {/* Aesthetic Luminous Separator and Grid */}
      <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]"></div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-24">
        
        {/* Left Side: Photo inside Terminal Card + JSON */}
        <div className="relative w-full max-w-md flex-shrink-0 lg:w-5/12 perspective-1000">
          
          {/* Floating JSON Code Snippet (Idea 4 - Glassmorphism) */}
          <motion.div 
            variants={textItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="absolute -right-2 -top-8 z-20 hidden lg:block"
          >
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5 font-mono text-xs text-sky-300 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl">
              <pre><code>{JSON_SNIPPET}</code></pre>
            </div>
          </motion.div>

          {about.profileImage && (
            <motion.div 
              variants={imageVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }} 
              className="relative z-10"
            >
              <TiltCard>
                {/* Terminal / Dashboard Card for Image */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900 shadow-[0_0_40px_rgba(56,189,248,0.15)]">
                  
                  {/* Glow behind image */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-emerald-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
                  
                  {/* Terminal Header */}
                  <div className="relative z-20 flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-4 py-3 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        ID: DEVNOISY
                      </span>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                      ROLE: ARCHITECT
                    </span>
                  </div>

                  {/* Profile Image */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <img
                      src={urlFor(about.profileImage).width(800).height(1000).url()}
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                    {/* Subtle Scanline Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30 mix-blend-overlay"></div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          )}

          {/* Floating JSON Code Snippet for Mobile (Glassmorphism) */}
          <motion.div 
            variants={textItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative z-20 -mt-8 ml-auto w-11/12 lg:hidden"
          >
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 font-mono text-[10px] text-sky-300 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl">
              <pre><code>{JSON_SNIPPET}</code></pre>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Text */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex w-full flex-col items-center text-center lg:w-7/12 lg:items-start lg:text-left"
        >
          <motion.h2 variants={textItemVariants} className="hero-heading font-heading mb-8 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            <HighlightedText text={about.title} />
          </motion.h2>

          <motion.div variants={textItemVariants} className="prose prose-invert prose-lg mb-10 max-w-none text-slate-300">
            <PortableText value={about.body} components={myPortableTextComponents} />
          </motion.div>

          <motion.div variants={textItemVariants}>
            <ContactButton text="Travaillons ensemble" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

