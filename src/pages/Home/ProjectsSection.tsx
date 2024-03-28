import { ProjectCover } from '../../components/ProjectCover';
import { PROJECTS } from './Home.constants';

export const ProjectsSection = () => {
  return (
    <section>
      <div className="bl-border grid grid-cols-1 gap-8 px-2 py-4 text-xl font-bold sm:py-8 sm:text-2xl lg:grid-cols-2">
        <p className="text-pretty">
          Blanditiis id odio assumenda. Facilis autem, non voluptate quis odio
          vero hic exercitationem atque voluptatibus officia distinctio vitae
          sit cum assumenda itaque id optio? Impedit eos ratione recusandae
          doloremque dignissimos! Numquam officia asperiores sit.
        </p>
        <p className="text-pretty">
          Corrupti voluptatem eaque totam adipisci sapiente fugit tempora maxime
          libero aut nesciunt fuga ad quas veritatis quae, officiis ipsam
          tempore iure repellat culpa? Animi soluta velit debitis minima
          deleniti eos? Optio rem enim totam ullam fugit delectus.
        </p>
      </div>
      {PROJECTS.map(({ id, heading, cover }) => (
        <ProjectCover key={id} cover={cover}>
          {heading}
        </ProjectCover>
      ))}
    </section>
  );
};
