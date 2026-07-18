import {
  useRef,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
  type CSSProperties,
} from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Tracks the mouse across the viewport. When the cursor comes within
 * `padding` px of the wrapped element's bounding box, the element eases
 * toward the cursor, divided by `strength`, producing a subtle magnetic pull.
 */
export default function Magnet({
  children,
  padding = 100,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
  style = {},
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const withinX =
        e.clientX > rect.left - padding && e.clientX < rect.right + padding;
      const withinY =
        e.clientY > rect.top - padding && e.clientY < rect.bottom + padding;

      if (withinX && withinY) {
        const deltaX = (e.clientX - centerX) / strength;
        const deltaY = (e.clientY - centerY) / strength;
        setIsActive(true);
        setTranslate({ x: deltaX, y: deltaY });
      } else {
        setIsActive(false);
        setTranslate({ x: 0, y: 0 });
      }
    },
    [padding, strength]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
