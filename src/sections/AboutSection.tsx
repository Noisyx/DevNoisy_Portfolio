import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { urlFor } from '../sanity/lib/image';
import HighlightedText from '../components/HighlightedText';
import React from 'react';

export default function AboutSection({ about }: { about?: any }) {
  if (!about) return null;

  const myPortableTextComponents: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return (
          <p className="mb-4">
            {React.Children.map(children, (child) => {
              if (typeof child === 'string') {
                return <HighlightedText text={child} />;
              }
              return child;
            })}
          </p>
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
      className="relative flex min-h-screen items-center justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
        
        {/* Left Side: Photo */}
        {about.profileImage && (
          <FadeIn delay={0.1} y={40} className="w-full max-w-sm flex-shrink-0 lg:w-2/5">
            <div className="relative aspect-square w-full overflow-hidden rounded-[40px] border border-slate-700 bg-slate-800 shadow-[0_0_30px_rgba(56,189,248,0.15)]">
              <img
                src={urlFor(about.profileImage).width(800).height(800).url()}
                alt="Profile"
                className="h-full w-full object-cover transition-all duration-500 hover:scale-105"
              />
            </div>
          </FadeIn>
        )}

        {/* Right Side: Text */}
        <div className="flex w-full flex-col items-center text-center lg:w-3/5 lg:items-start lg:text-left">
          <FadeIn delay={0} y={40}>
            <h2 className="hero-heading font-heading mb-8 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              <HighlightedText text={about.title} />
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} y={40} className="prose prose-invert prose-lg mb-10 max-w-none text-slate-300">
            <PortableText value={about.body} components={myPortableTextComponents} />
          </FadeIn>

          <FadeIn delay={0.3} y={40}>
            <ContactButton text="Travaillons ensemble" />
          </FadeIn>
        </div>

      </div>
    </section>
  );
}

