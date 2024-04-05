import CoverPage from "../../Component/Shared/CoverPage/CoverPage";
import img from'../../assets/shop/banner2.jpg'
import OurTabs from "../../Component/OurShop/Tabs"
import { useState } from "react";

const OurShop = () => {
    
    return (
        <div>
            <CoverPage img={img} coverHeading={''}coverSubHeading={''}></CoverPage>
            <section className="mt-10 text-center">
                <OurTabs></OurTabs>
            </section>
        </div>
    );
};

export default OurShop;