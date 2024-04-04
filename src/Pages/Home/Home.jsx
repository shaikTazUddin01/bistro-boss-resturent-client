import React from 'react';
import Banner from '../../Component/Home/Banner';
import Categoy from '../../Component/Home/Categoy';
import Popular from '../../Component/Home/Popular';
import FeaturedMenu from '../../Component/Home/FeaturedMenu';
import Testimonaals from '../../Component/Home/Testimonaals';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Categoy></Categoy>
            <Popular></Popular>
            <FeaturedMenu></FeaturedMenu>
            <Testimonaals></Testimonaals>
        </div>
    );
};

export default Home;