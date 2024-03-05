import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

import { CrewAvailability } from './components/CrewPieChart/CrewAvailability.jsx';
import '../SASS/main.scss';

// fetch('/api/v1/users/65c00e3cfd44bd16f80d5131')
//   .then((res) => res.json())
//   .then((data) => console.log(data));

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);