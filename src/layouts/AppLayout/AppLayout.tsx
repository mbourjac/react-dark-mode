import { Outlet } from '@tanstack/react-router';
import { Header } from './Header';

export const AppLayout = () => {
  return (
    <div className="min-h-screen p-4 transition-all dark:bg-black">
      <Header />
      <Outlet />
    </div>
  );
};
