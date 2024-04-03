import { cn } from '../lib/tailwind';

type ExpandingArrowProps = {
  className?: string;
};

export const ExpandingArrow = ({ className }: ExpandingArrowProps) => {
  return (
    <span className={cn('inline-flex w-full items-center', className)}>
      <span className="h-[0.35rem] w-[0%] min-w-9 bg-current transition-[width] duration-500 group-hover/arrow:w-full"></span>
      <span className="h-0 w-0 border-b-[0.925rem] border-l-[0.925rem] border-t-[0.925rem] border-b-transparent border-l-current border-t-transparent"></span>
    </span>
  );
};
