import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Course from "../../Pages/Course/Course";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import News from "../../Pages/News/News/News";
import Profile from "../../Pages/Others/Profile/Profile";
import TermsAndConditions from "../../Pages/Others/TermsAndContions/TermsAndConditions";
import Blog from "../../Pages/Shared/Blog/Blog";
import FaqPart from "../../Pages/Shared/FaqPart/FaqPart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            // {
            //     path: '/',
            //     element: <Home></Home>,
            //     loader: () => fetch('http://localhost:5000/news')
            // },
            {
                path: '/category/:id',
                // element: <NewsSummaryCard></NewsSummaryCard>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
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
            }
        ]
    }
])