import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from '../../Pages/Home/Home';
import Category from '../../Pages/Category/Category';


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
            }
        ]
    }
])