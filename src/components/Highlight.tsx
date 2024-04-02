import type { ReactNode } from 'react';
import { cn } from '../lib/tailwind';

type HighlightProps = {
  as?: keyof JSX.IntrinsicElements;
  elementClassName?: string;
  highlightClassName?: string;
  children: ReactNode;
};

export const Highlight = ({
  as: Text = 'p',
  elementClassName,
  highlightClassName,
  children,
}: HighlightProps) => {
  return (
    <Text
      className={cn('group/highlight relative z-0 w-fit', elementClassName)}
    >
      <span
        className={cn(
          'absolute bottom-0 left-0 z-[-1] h-1/2 w-full origin-right scale-x-0 bg-[#fff826] transition-transform duration-[950ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/highlight:scale-x-100 dark:bg-[#262DFF]',
          highlightClassName,
        )}
      ></span>
      {children}
    </Text>
  );
};
