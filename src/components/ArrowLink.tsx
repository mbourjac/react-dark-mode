import type { ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import type { AllRoutes } from '../lib/tanstack-router';
import { ExpandingArrow } from './ExpandingArrow';

type ArrowLinkProps = {
  to?: AllRoutes;
  children: ReactNode;
};

export const ArrowLink = ({ to = '/', children }: ArrowLinkProps) => {
  return (
    <Link
      to={to}
      className="group/arrow w-full items-center gap-4 sm:inline-flex"
    >
      <span className="shrink-0">{children}</span>
      <ExpandingArrow className="hidden sm:inline-flex" />
    </Link>
  );
};
