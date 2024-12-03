import { lazy, Suspense, ReactElement, PropsWithChildren } from 'react';
import { Outlet, RouteObject, RouterProps, createBrowserRouter, Navigate } from 'react-router-dom';

import PageLoader from 'components/loading/PageLoader';
import Splash from 'components/loading/Splash';
import { rootPaths } from './paths';
import paths from './paths';

const App = lazy<() => ReactElement>(() => import('App'));

const MainLayout = lazy<({ children }: PropsWithChildren) => ReactElement>(
  () => import('layouts/main-layout'),
);
const AuthLayout = lazy<({ children }: PropsWithChildren) => ReactElement>(
  () => import('layouts/auth-layout'),
);

const Dashboard = lazy<() => ReactElement>(() => import('pages/dashboard/Dashboard'));
const Games = lazy<() => ReactElement>(() => import('pages/dashboard/Games'));
const Report = lazy<() => ReactElement>(() => import('pages/dashboard/Report'));
const Users = lazy<() => ReactElement>(() => import('pages/dashboard/Users'));
const Settings = lazy<() => ReactElement>(() => import('pages/dashboard/Settings'));
const Login = lazy<() => ReactElement>(() => import('pages/authentication/Login'));
const SignUp = lazy<() => ReactElement>(() => import('pages/authentication/SignUp'));
const ErrorPage = lazy<() => ReactElement>(() => import('pages/error/ErrorPage'));

const routes: RouteObject[] = [
  {
    element: (
      <Suspense fallback={<Splash />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: rootPaths.homeRoot, 
        element: (
          <AuthLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </AuthLayout>
        ),
        children: [
          {
            index: true,  
            element: <Login />,  
          },
        ],
      },
      {
        path: rootPaths.authRoot,
        element: (
          <AuthLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </AuthLayout>
        ),
        children: [
          {
            path: paths.login,
            element: <Login />, // Keep login here for '/authentication/login'
          },
          {
            path: paths.signup,
            element: <SignUp />, // Keep signup here for '/authentication/sign-up'
          },
        ],
      },
      {
        path: rootPaths.authRoot, 
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            path: paths.Dashboard,
            element: <Dashboard />, 
          },
          
          {
            path: paths.Games,
            element: <Games/>, 
          },
          {
            path: paths.Report,
            element: <Report />, 
          },
          {
            path: paths.settings,
            element: <Settings />, 
          },
          {
            path: paths.Users,
            element: <Users />, 
          },
        ],
      },
    ],
  },
  {
    path: '*', 
    element: <ErrorPage />,
  },
];

const options: { basename: string } = {
  basename: '/',
};

const router: Partial<RouterProps> = createBrowserRouter(routes, options);

export default router;
