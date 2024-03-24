import { useEffect } from 'react';
import { atom, useAtom } from 'jotai';

export const darkModeAtom = atom<boolean>(false);

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useAtom(darkModeAtom);

  const toggleDarkMode = () => {
    setIsDarkMode((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
}
