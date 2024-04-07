import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
// sweet alert
import Swal from 'sweetalert2'

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    // console.log(user)
    const handleLogOut = () => {
        logout()
        .then(() => {
            Swal.fire("Logout", "You have been logged out", "success");
            alert('logout')
        }).catch(err=>{
            alert(err.messages)
        })
    }

    const navItem = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
        <li><NavLink to={'/dashboard'}>DashBoard</NavLink></li>
        <li><NavLink to={'/menu'}>Our Menu</NavLink></li>
        <li><NavLink to={'/shop/salad'}>Our Shop</NavLink></li>
        {
            user ?
                <li><a href=""  onClick={handleLogOut}>Log Out</a></li>
                :
                <li><NavLink to={'/login'}>Log In</NavLink></li>
        }
    </>
    return (
        <div className=''>
            <div className="navbar bg-black text-white fixed z-10 bg-opacity-30 max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">BistroBoss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;