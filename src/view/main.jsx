import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './css/index.css';
import Register from "../view/Register.jsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path : '/',
        element : <App />
    },
    {
        path : 'register',
        element : <Register />
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
