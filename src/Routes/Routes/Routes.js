import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Course from "../../Pages/Course/Course";
import FoundError from "../../Pages/FoundError/FoundError";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Blog from "../../Pages/Shared/Blog/Blog";
import FaqPart from "../../Pages/Shared/FaqPart/FaqPart";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faqpart',
                element: <FaqPart></FaqPart>
            },
            {
                path: '/',
                element: <Course></Course>
            },
            {
                path: '*',
                element: <FoundError></FoundError>
            }
        ]
    }
])