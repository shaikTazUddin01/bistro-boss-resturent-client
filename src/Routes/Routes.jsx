import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../Layout/MainLayOut';
import Home from '../Pages/Home/Home';
import Menu from '../Pages/Menu/Menu';
import OurShop from '../Pages/OurShop/OurShop';

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
            }
        ]
    }
])

export default Routes;