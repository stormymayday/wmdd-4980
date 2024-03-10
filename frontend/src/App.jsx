import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  HomeLayout,
  Landing,
  Register,
  Login,
  Error,
  DashboardLayout,
  DashboardPage,
  // SelectCrew,
  Tracking,
  CreateFlight,
  AssignCrew,
  Profile,
  NewFlightPage,
  AddCrewPage,
} from './pages';

import '../SASS/main.scss';

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
        path: 'new-flight',
        element: <NewFlightPage />,
      },
      {
        path: 'add-crew',
        element: <AddCrewPage />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            path: 'dashboard-page',
            element: <DashboardPage />,
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
