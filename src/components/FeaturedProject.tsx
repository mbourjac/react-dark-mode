import { Link } from '@tanstack/react-router';
import type { FeaturedProject as FeaturedProjectType } from '../pages/Home/Home.types';

type ProjectCoverProps = FeaturedProjectType;

export const FeaturedProject = ({ id, cover, heading }: ProjectCoverProps) => {
  return (
    <Link to={id}>
      <article className="group">
        <h2 className="br-border p-2 text-right text-4xl font-bold uppercase">
          {heading}
        </h2>
        <div className="bl-border relative flex h-[40vh] justify-end bg-blue-600">
          <img
            src={cover}
            alt=""
            className="h-full w-full object-cover object-[center_20%]"
          />
          <div className="absolute left-0 top-0 h-full w-full bg-blue-600 opacity-0 mix-blend-color-dodge transition-opacity group-hover:opacity-50 dark:bg-amber-500"></div>
        </div>
      </article>
    </Link>
  );
};
