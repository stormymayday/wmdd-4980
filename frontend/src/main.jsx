import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// import FlightSummary from './components/FlightSummary/FlightSummary.jsx';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
import '../SASS/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
