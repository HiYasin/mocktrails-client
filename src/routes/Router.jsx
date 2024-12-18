import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import App from "../App";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import Register from "../components/Register";
import Login from "../components/Login";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
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
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
        ]
    },
    
    {
        path: "*",
        element: <PageNotFound></PageNotFound>
    }
]);

export default Router;