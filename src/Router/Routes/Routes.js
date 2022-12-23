import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Bookings from "../../pages/Home/Bookings/Bookings";
import Checkout from "../../pages/Home/checkout/Checkout";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Home/Login/Login";
import Signup from "../../pages/Home/Signup/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/signup",
                element:<Signup/>
            },
            {
                path: "/checkout/:id",
                element:<Checkout/>,
                loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:"/bookings",
                element:<Bookings/>
            }
        ]
    }
])

export default router