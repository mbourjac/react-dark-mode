import { useRef, type MouseEvent, type ReactNode } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useElementSize } from '../hooks/use-element-size';
import { cn } from '../lib/tailwind';

type SpotlightProps = {
  circleSize?: number;
  gradientColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
  containerClassName?: string;
  gradientClassName?: string;
  children: ReactNode;
};

export const Spotlight = ({
  circleSize,
  gradientColor = 'rgba(37, 99, 235, 0.35)',
  containerClassName,
  gradientClassName,
  children,
}: SpotlightProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width: containerWidth } = useElementSize(containerRef);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const background = useMotionTemplate`
  radial-gradient(
    ${
      circleSize ?? Math.round(containerWidth / 2)
    }px circle at ${mouseX}px ${mouseY}px,
    ${gradientColor},
    transparent 80%
  )
`;

  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div className={cn('relative flex', containerClassName)} ref={containerRef}>
      {children}
      <motion.div
        className={cn(
          'absolute h-full w-full opacity-0 transition duration-300 hover:opacity-100',
          gradientClassName,
        )}
        onMouseMove={handleMouseMove}
        style={{ background }}
      ></motion.div>
    </div>
  );
};
