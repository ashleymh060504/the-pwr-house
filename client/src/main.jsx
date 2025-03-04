import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Social from './pages/Social.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/social',
        element: <Social />,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={BrowserRouter}></RouterProvider>
  </StrictMode>,
)
