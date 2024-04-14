import { Link, Outlet, useLocation } from 'react-router-dom';
import './Dashboard.css'
import { useEffect, useState } from 'react';
import useCart from '../Hooks/useCart';
import { FaCartPlus, FaDAndD, FaHome, FaSitemap, FaUser } from 'react-icons/fa';
import { Fa42Group, FaManatSign, FaMarsAndVenus, FaShop } from 'react-icons/fa6';
import useAdmin from '../Hooks/useAdmin';
const DashBoard = () => {
    const [activeRoute, setActiveRoute] = useState("");
    const [cart] = useCart()

    const location = useLocation()
    const pathNameParts = location.pathname.split('/')
    const lastPart = pathNameParts[pathNameParts.length - 1]
    // console.log(lastPart)
    const [isAdmin,isPending] = useAdmin()
    console.log("admin", isAdmin)
    // const isAdmin=true
    useEffect(() => {
        setActiveRoute(lastPart)

    }, [lastPart])
    if(isPending){
        return <p>loading....</p>
    }
    return (
        <div className='flex gap-10'>
            <div className='bg-yellow-600 min-h-screen w-[20%]'>
                <ul className='px-10 space-y-2 pt-5'>
                    {
                        isAdmin ?
                            <>
                                <li><Link to={'/dashboard'}
                                    className={activeRoute == 'dashboard' ? 'active' : ''}
                                > <FaHome></FaHome> Admin Home</Link></li>
                                <li><Link to={'/dashboard/addItem'}
                                    className={activeRoute == 'addItem' ? 'active' : ''}
                                ><FaDAndD></FaDAndD> Add Items</Link></li>
                                <li><Link to={'/dashboard/manageItem'}
                                    className={activeRoute == 'manageItem' ? 'active' : ''}
                                ><FaSitemap></FaSitemap> Manage Item</Link></li>
                                <li><Link to={'/dashboard/manageBooking'}
                                    className={activeRoute == 'manageBooking' ? 'active' : ''}
                                ><FaManatSign></FaManatSign> Manage Booking</Link></li>
                                <li><Link to={'/dashboard/allUser'}
                                    className={activeRoute == 'allUser' ? 'active' : ''}
                                ><FaUser></FaUser> All User</Link></li>

                            </>
                            :
                            <>
                                <li><Link to={'/dashboard'}
                                    className={activeRoute == 'dashboard' ? 'active' : ''}
                                > <FaHome></FaHome> User Home</Link></li>
                                <li><Link to={'/dashboard/cart'}
                                    className={activeRoute == 'cart' ? 'active' : ''}
                                ><FaCartPlus></FaCartPlus> Cart ({cart?.length})</Link></li>
                            </>
                    }
                    <div className='divider'></div>
                    <li><Link to={'/'}
                    ><FaHome></FaHome> Home</Link></li>
                    <li><Link to={'/menu'}
                    ><FaMarsAndVenus></FaMarsAndVenus>Our Menu</Link></li>
                    <li><Link to={'/shop/salad'}
                    ><FaShop></FaShop> Our Shop</Link></li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;