import { Link } from '@tanstack/react-router';
import { useDarkMode } from '../hooks/use-dark-mode';
import { EyeIcon } from './EyeIcon';

export const Header = () => {
  const { toggleDarkMode } = useDarkMode();

  return (
    <header className="sticky top-4">
      <div className="flex items-center justify-between gap-8 border-4 border-r-0 border-black bg-white px-2 text-4xl font-semibold uppercase transition-all dark:border-white dark:bg-black dark:text-white">
        <h1>Lorem ipsum</h1>
        <div className="flex items-center gap-10">
          <nav className="flex gap-8">
            <Link to="/">Fugit</Link>
            <Link to="/">Voluptatem</Link>
          </nav>
          <button onClick={toggleDarkMode}>
            <EyeIcon />
          </button>
        </div>
      </div>
    </header>
  );
};
