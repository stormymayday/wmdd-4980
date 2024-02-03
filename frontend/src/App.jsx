import { BrowserRouter as Router } from 'react-router-dom';
import { NewFlight } from './components/NewFlight';

import { useRoutes } from './routs';

const App = () => {
  console.log('App');
  const routes = useRoutes(false);
  return (
    <Router>
      <div>{routes}</div>
    </Router>
  );
};
export default App;
