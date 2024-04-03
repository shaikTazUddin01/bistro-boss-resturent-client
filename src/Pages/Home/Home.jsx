import React from 'react';
import Banner from '../../Component/Home/Banner';
import Categoy from '../../Component/Home/Categoy';
import Popular from '../../Component/Home/Popular';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categoy></Categoy>
            <Popular></Popular>
        </div>
    );
};

export default Home;