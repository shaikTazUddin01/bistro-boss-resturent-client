import { Link, Outlet, useLocation } from 'react-router-dom';
import './Dashboard.css'
import { useEffect, useState } from 'react';
const DashBoard = () => {
    const [activeRoute, setActiveRoute] = useState("");

    const location = useLocation()
    const pathNameParts = location.pathname.split('/')
    const lastPart = pathNameParts[pathNameParts.length - 1]
    console.log(lastPart)


    useEffect(() => {
        setActiveRoute(lastPart)

    }, [lastPart])
    return (
        <div className='flex gap-10'>
            <div className='bg-yellow-600 min-h-screen'>
                <ul className='px-20 space-y-2 pt-5'>
                    <li><Link to={'/dashboard'}
                        className={activeRoute == 'dashboard' ? 'active' : ''}
                    >DashBoard</Link></li>
                    <li><Link to={'/dashboard/cart'}
                        className={activeRoute == 'cart' ? 'active' : ''}
                    >Cart</Link></li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;