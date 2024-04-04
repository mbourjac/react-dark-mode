import { createRootRoute } from '@tanstack/react-router';
import { AppLayout } from '../layouts/AppLayout/AppLayout';

export const Route = createRootRoute({
  component: AppLayout,
});
