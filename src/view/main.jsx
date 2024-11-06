import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './css/index.css';
import Login from "../view/Login.jsx";
import Register from "../view/Register.jsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Notice from './Notice.jsx';

const router = createBrowserRouter([
    {
        path : '/',
        element : <App />
    },
    {
        path : 'login',
        element : <Login />
    },
    {
        path : 'register',
        element : <Register />
    },
    {
        path : 'create-project',
        element : <Notice />
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
