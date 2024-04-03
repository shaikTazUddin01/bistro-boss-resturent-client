import React from 'react';
import Banner from '../../Component/Home/Banner';
import Categoy from '../../Component/Home/Categoy';
import Popular from '../../Component/Home/Popular';
import FeaturedMenu from '../../Component/Home/FeaturedMenu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categoy></Categoy>
            <Popular></Popular>
            <FeaturedMenu></FeaturedMenu>
        </div>
    );
};

export default Home;