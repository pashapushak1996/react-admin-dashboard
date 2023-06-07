import { createBrowserRouter } from "react-router-dom";
import App from "../src/App.jsx";
import { ErrorPage } from "../pages/error-page/ErrorPage.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: 'dashboard',
                element: <h1>Dashboard</h1>
            },
            {
                path: 'artists',
                element: <h1>Artists</h1>
            },
            {
                path: 'projects',
                element: <h1>Projects</h1>
            },
            {
                path: 'sales',
                element: <h1>Sales</h1>
            }
        ]
    }
]);
