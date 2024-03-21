import { Outlet } from '@tanstack/react-router';

export const AppLayout = () => {
  return (
    <div className="p-4">
      <Outlet />
    </div>
  );
};
