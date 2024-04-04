import { Helmet } from 'react-helmet-async';
import CoverPage from '../../Component/Shared/CoverPage/CoverPage';
import bannerImg from '../../assets/menu/banner3.jpg'
import SectionTitle from '../../Component/Shared/SectionTitle/SectionTitle';
import Popular from '../../Component/Home/Popular';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <div className='min-h-screen'>
                <CoverPage img={bannerImg} heading={'Our Menu'} subHeading={'would you like to try a dish?'}></CoverPage>
                <div className='py-20'>
                    
                    <Popular></Popular>
                </div>
                <CoverPage img={bannerImg} heading={'Our Menu'} subHeading={'would you like to try a dish?'}></CoverPage>
                <div className='py-20'>
                    <Popular></Popular>
                </div>
                <CoverPage img={bannerImg} heading={'Our Menu'} subHeading={'would you like to try a dish?'}></CoverPage>
                <div className='py-20'>
                    <Popular></Popular>
                </div>
                <CoverPage img={bannerImg} heading={'Our Menu'} subHeading={'would you like to try a dish?'}></CoverPage>
                <div className='py-20'>
                    <Popular></Popular>
                </div>
            </div>
        </div>
    );
};

export default Menu;