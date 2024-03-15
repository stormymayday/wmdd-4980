import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { registerAction } from './pages/Register';

import {
  HomeLayout,
  Landing,
  Register,
  Login,
  Error,
  DashboardLayout,
  DashboardPage,
  SelectCrew,
  AvailabilityPage,
  CreateFlight,
  AssignCrew,
  Profile,
  NewFlightPage,
  AddCrewPage,
  CrewPage,
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
        action: registerAction,
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
        path: 'crew/:id',
        element: <CrewPage />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            path: 'main',
            element: <DashboardPage />,
          },
          {
            path: 'availability',
            element: <AvailabilityPage />,
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
