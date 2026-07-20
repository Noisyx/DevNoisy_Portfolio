interface ContactButtonProps {
  className?: string;
  onClick?: () => void;
  text?: string;
}

import SpecularButton from './SpecularButton';

export default function ContactButton({ className = '', onClick, text = 'Contact Me' }: ContactButtonProps) {
  const handleClick = (e: any) => {
    if (onClick) onClick();
    window.location.href = 'mailto:devnoisy@gmail.com';
  };

  return (
    <div className={className}>
      <SpecularButton
        size="lg"
        radius={9999} // Max radius for pill shape
        tint="#38bdf8" // sky-400 equivalent for the background/tint
        tintOpacity={0.1}
        blur={10}
        textColor="#38bdf8"
        lineColor="#38bdf8"
        baseColor="#0f172a"
        intensity={1.5}
        shineSize={15}
        shineFade={50}
        thickness={1.5}
        speed={0.4}
        followMouse
        proximity={300}
        autoAnimate={false}
        onClick={handleClick}
      >
        {text}
      </SpecularButton>
    </div>
  );
}
