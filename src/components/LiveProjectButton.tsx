interface LiveProjectButtonProps {
  className?: string;
  href?: string;
}

import SpecularButton from './SpecularButton';

export default function LiveProjectButton({ className = '', href = '#' }: LiveProjectButtonProps) {
  const handleClick = (e: any) => {
    window.location.href = href;
  };

  return (
    <div className={className}>
      <SpecularButton
        size="md"
        radius={9999}
        tint="#D7E2EA"
        tintOpacity={0.05}
        blur={10}
        textColor="#D7E2EA"
        lineColor="#ffffff"
        baseColor="#2d3748"
        intensity={1.2}
        shineSize={12}
        shineFade={40}
        thickness={1.5}
        speed={0.35}
        followMouse
        proximity={250}
        autoAnimate={false}
        onClick={handleClick}
      >
        Live Project
      </SpecularButton>
    </div>
  );
}
