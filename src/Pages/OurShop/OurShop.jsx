import CoverPage from "../../Component/Shared/CoverPage/CoverPage";
import img from'../../assets/shop/banner2.jpg'
import OurTabs from "../../Component/OurShop/Tabs"
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const OurShop = () => {
    
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <CoverPage img={img} coverHeading={''}coverSubHeading={''}></CoverPage>
            <section className="mt-10 text-center">
                <OurTabs></OurTabs>
            </section>
        </div>
    );
};

export default OurShop;