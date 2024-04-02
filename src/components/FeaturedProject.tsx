import { Link } from '@tanstack/react-router';
import type { FeaturedProject as FeaturedProjectType } from '../pages/Home/Home.types';
import { Highlight } from './Highlight';

type ProjectCoverProps = FeaturedProjectType;

export const FeaturedProject = ({ id, cover, heading }: ProjectCoverProps) => {
  return (
    <Link to={id}>
      <article className="group/highlight">
        <div className="br-border flex justify-end p-2">
          <Highlight as="h3" elementClassName="text-4xl font-bold uppercase">
            {heading}
          </Highlight>
        </div>
        <div className="bl-border h-[40vh]">
          <img
            src={cover}
            alt=""
            className="h-full w-full object-cover object-[center_20%]"
          />
        </div>
      </article>
    </Link>
  );
};
