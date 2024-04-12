import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../Layout/MainLayOut';
import Home from '../Pages/Home/Home';
import Menu from '../Pages/Menu/Menu';
import OurShop from '../Pages/OurShop/OurShop';
import LoginPage from '../Pages/LoginPage/LoginPage';
import Signup from '../Pages/Signup/SignUP';
import PrivateRoute from './PrivateRoute';
import DashBoard from '../Layout/DashBoard';
import { CgArrowDown } from 'react-icons/cg';
import Cart from '../Pages/Dashboard/Cart';

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/menu',
                element:<Menu></Menu>
            },
            {
                path:'/shop/:category',
                element:<OurShop></OurShop>
            },
            {
                path:"login",
                element:<LoginPage></LoginPage>
            },
            {
                path:"/signup",
                element:<Signup></Signup>
            },
            // {
            //     path:'/secter',
            //     element:<PrivateRoute><Secrate></Secrate></PrivateRoute>
            // }
        ]
    },
    {
        path:'dashboard',
        element:<DashBoard></DashBoard>,
        children:[
            {
                path:'cart',
                element:<PrivateRoute><Cart></Cart></PrivateRoute>
                
            }
        ]
    }
])

export default Routes;