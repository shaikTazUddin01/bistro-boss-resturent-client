import { Link, Outlet, useLocation } from 'react-router-dom';
import './Dashboard.css'
import { useEffect, useState } from 'react';
import useCart from '../Hooks/useCart';
import { FaCartPlus, FaHome } from 'react-icons/fa';
const DashBoard = () => {
    const [activeRoute, setActiveRoute] = useState("");
    const [cart] = useCart()

    const location = useLocation()
    const pathNameParts = location.pathname.split('/')
    const lastPart = pathNameParts[pathNameParts.length - 1]
    console.log(lastPart)


    useEffect(() => {
        setActiveRoute(lastPart)

    }, [lastPart])
    return (
        <div className='flex gap-10'>
            <div className='bg-yellow-600 min-h-screen w-[20%]'>
                <ul className='px-10 space-y-2 pt-5'>
                    <li><Link to={'/dashboard'}
                        className={activeRoute == 'dashboard' ? 'active' : ''}
                    > <FaHome></FaHome> User Home</Link></li>
                    <li><Link to={'/dashboard/cart'}
                        className={activeRoute == 'cart' ? 'active' : ''}
                    ><FaCartPlus></FaCartPlus> Cart ({cart?.length})</Link></li>
                    <div className='divider'></div>
                    <li><Link to={'/'}
                    ><FaHome></FaHome> Home</Link></li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;