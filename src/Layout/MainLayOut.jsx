import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Shared/Footer/Footer';
import Navbar from '../Component/Shared/Navbar/Navbar';

const MainLayOut = () => {
    const location=useLocation()
    const ignorePath=location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            {ignorePath ||  <Navbar></Navbar>}
          
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;