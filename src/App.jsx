import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppRoutes from './Routes';
import AppProvider from './AppProvider';
import "./App.css"

const router = createBrowserRouter([
  {
    path: '/*',
    element: (
        <AppProvider>
            <AppRoutes />
        </AppProvider>
    ),
    // errorElement: <ErrorPage />,
  }
]);

export default function App() {
  return <RouterProvider router={router} />
}
