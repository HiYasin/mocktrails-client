import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";
import App from "../App";
import PageNotFound from "../pages/PageNotFound";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/categories",
                element: <App></App>
            },
            {
                path: "/features",
                element: <App></App>
            },
            {
                path: "/interviewers",
                element: <App></App>
            },
        ]
    },

    {
        path: "*",
        element: <PageNotFound></PageNotFound>
    }
]);

export default Router;