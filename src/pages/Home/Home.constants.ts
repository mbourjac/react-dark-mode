import projectOneCover from '../../assets/images/project-1.jpeg';
import projectTwoCover from '../../assets/images/project-2.jpg';
import projectThreeCover from '../../assets/images/project-3.jpeg';
import type { Project } from './Home.types';

export const PROJECTS: Project[] = [
  {
    id: 'facere-quia-numquam-hic',
    heading: 'Facere quia numquam hic',
    cover: projectOneCover,
  },
  {
    id: 'omnis-voluptate-itaque',
    heading: 'Omnis voluptate itaque',
    cover: projectTwoCover,
  },
  {
    id: 'vitae-atque-minima',
    heading: 'Vitae atque minima',
    cover: projectThreeCover,
  },
];
