import { Helmet } from 'react-helmet-async';
import CoverPage from '../../Component/Shared/CoverPage/CoverPage';
import SectionTitle from '../../Component/Shared/SectionTitle/SectionTitle';
import Popular from '../../Component/Home/Popular';
import MenuSection from '../../Component/Menu/MenuSection';
// images
import bannerImg from '../../assets/menu/banner3.jpg'
import dessertsImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <div className='min-h-screen'>
                {/* main section */}
                <MenuSection img={bannerImg} coverHeading={'Our Menu'} coverSubHeading={'would you like to try a dish?'} category='offered' heading={"today's offer"} subHeading={"Don't miss"}></MenuSection>
                {/* desserts section */}
                <MenuSection img={dessertsImg} coverHeading={"Desserts"}
                    coverSubHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} category={'dessert'}></MenuSection>
                {/* pizza section */}
                <MenuSection img={pizzaImg} coverHeading={"pizza"} coverSubHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} category={'pizza'}></MenuSection>
                {/* SIlad section */}
                <MenuSection img={saladImg} coverHeading={"salads"} coverSubHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} category={'salad'}></MenuSection>
                {/* soups section */}
                <MenuSection img={soupImg} coverHeading={"soups"} coverSubHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} category={'soup'}></MenuSection>
            </div>
        </div>
    );
};

export default Menu;