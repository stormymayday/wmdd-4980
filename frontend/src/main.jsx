import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Testing server connection
// fetch('/api/v1/flights')
//   .then((res) => res.json())
//   .then((data) => console.log(data));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
