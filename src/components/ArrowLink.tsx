import type { ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import type { AllRoutes } from '../lib/tanstack-router';

type ArrowLinkProps = {
  to?: AllRoutes;
  children: ReactNode;
};

export const ArrowLink = ({ to = '/', children }: ArrowLinkProps) => {
  return (
    <Link to={to} className="group w-full items-center gap-4 sm:inline-flex">
      <span className="shrink-0">{children}</span>
      <span className="hidden w-full items-center sm:inline-flex">
        <span className="h-[0.35rem] w-[0%] min-w-9 bg-black transition-[width] duration-500 group-hover:w-full dark:bg-white"></span>
        <span className="h-0 w-0 border-b-[0.925rem] border-l-[0.925rem] border-t-[0.925rem] border-b-transparent border-l-black border-t-transparent dark:border-l-white"></span>
      </span>
    </Link>
  );
};
