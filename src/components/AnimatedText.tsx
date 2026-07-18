import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

interface CharProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function Char({ char, index, total, progress }: CharProps) {
  // Each character owns a thin slice of the scroll progress range.
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {/* invisible placeholder preserves layout width */}
      <span style={{ visibility: 'hidden' }}>{char === ' ' ? '\u00A0' : char}</span>
      <motion.span
        style={{ position: 'absolute', left: 0, top: 0, opacity }}
        aria-hidden="true"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
}

/**
 * Animates a paragraph in character-by-character, driven by how far the
 * paragraph itself has scrolled through the viewport (offset 'start 0.8'
 * to 'end 0.2'), rather than a fixed timer.
 */
export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {chars.map((char, i) => (
        <Char key={i} char={char} index={i} total={chars.length} progress={scrollYProgress} />
      ))}
    </p>
  );
}
