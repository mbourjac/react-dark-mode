import { Link } from '@tanstack/react-router';
import { EyeIcon } from '../../components/EyeIcon';
import { useDarkMode } from '../../hooks/use-dark-mode';

export const Header = () => {
  const { toggleDarkMode, isDarkMode } = useDarkMode();

  return (
    <header className="sticky top-4 z-10 text-2xl font-semibold uppercase md:text-3xl lg:text-4xl dark:text-white">
      <div className="flex items-center justify-between gap-8 border-4 border-r-0 border-current bg-white px-2 transition-all dark:bg-black">
        <h1>Lorem ipsum</h1>
        <div className="flex items-center gap-10">
          <nav className="hidden gap-8 sm:flex">
            <Link to="/">Fugit</Link>
            <Link to="/">Voluptatem</Link>
          </nav>
          <button onClick={toggleDarkMode}>
            <EyeIcon />
            <span className="sr-only">
              {`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
