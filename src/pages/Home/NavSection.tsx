import { ArrowLink } from '../../components/ArrowLink';

export const NavSection = () => {
  return (
    <nav>
      <ul className="text-[clamp(1rem,3.5vw,5rem)] font-bold uppercase leading-none">
        <li className="bl-border p-2">
          <ArrowLink>Aliquid necessitatibus voluptate</ArrowLink>
        </li>
        <li className="br-border p-2">
          <ArrowLink>Cumque quia odio</ArrowLink>
        </li>
        <li className="bl-border p-2">
          <ArrowLink>Minima nemo magni</ArrowLink>
        </li>
        <li className="br-border p-2">
          <ArrowLink>Numquam ipsum optio possimus culpa</ArrowLink>
        </li>
      </ul>
    </nav>
  );
};
