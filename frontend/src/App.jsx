import { BrowserRouter as Router } from 'react-router-dom';

import { useRoutes } from './routs';

const App = () => {
  console.log('App');
  const routes = useRoutes(false);
  return (
    <NewFlight />
  );
};
export default App;
