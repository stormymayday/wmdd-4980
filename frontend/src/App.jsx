import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  HomeLayout,
  Landing,
  Register,
  Login,
  Error,
  DashboardLayout,
  SelectCrew,
  Tracking,
  CreateFlight,
  AssignCrew,
  Profile,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            path: 'select-crew',
            element: <SelectCrew />,
          },
          {
            path: 'tracking',
            element: <Tracking />,
          },
          {
            path: 'create-flight',
            element: <CreateFlight />,
          },
          {
            path: 'assign-crew',
            element: <AssignCrew />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
