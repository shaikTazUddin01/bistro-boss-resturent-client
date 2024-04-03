
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Shared/Footer/Footer';
import Navbar from '../Component/Shared/Navbar/Navbar';

const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;