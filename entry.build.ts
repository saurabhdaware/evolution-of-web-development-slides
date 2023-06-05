import { Route } from 'abell';
import index from './index.abell';
import { routes } from './App';

// @TODO: pass path by default to components
export const makeRoutes = (): Route[] => {
  return routes.map((route) => {
    return {
      path: route.path,
      render: () => index({ path: route.path })
    }
  });
};