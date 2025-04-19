import { Navigate } from 'react-router-dom';
import { Dashboard } from './pages';

const routes = [
    {
        path: '/',
        element: <Navigate to="/dashboard" replace />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    }
]

export default routes;