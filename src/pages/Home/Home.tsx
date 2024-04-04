import { ContactSection } from './ContactSection/ContactSection';
import { Hero } from './Hero';
import { NavSection } from './NavSection/NavSection';
import { ProjectsSection } from './ProjectsSection/ProjectsSection';

export const Home = () => {
  return (
    <div className="dark:text-white">
      <Hero />
      <NavSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};
