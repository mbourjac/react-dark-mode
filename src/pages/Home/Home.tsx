import { Hero } from './Hero';
import { NavSection } from './NavSection';

export const Home = () => {
  return (
    <div className="dark:text-white">
      <Hero />
      <NavSection />
    </div>
  );
};
