import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from '../../Pages/Home/Home';
import Category from '../../Pages/Category/Category';
import Login from "../../Pages/Shared/Login/Login";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])