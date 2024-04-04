import CoverPage from '../Shared/CoverPage/CoverPage';
import MenuCategory from './MenuCategory';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';

const MenuSection = ({ img, coverHeading, coverSubHeading, category, heading, subHeading }) => {
    return (
        <div>
            {/* coverBanner */}
            <CoverPage img={img} coverHeading={coverHeading} coverSubHeading={coverSubHeading}></CoverPage>
            {/* section title */}
            {
                heading && subHeading &&
                <div className='mt-10 -mb-5'>
                    <SectionTitle heading={heading} subHeading={subHeading}></SectionTitle>
                </div>
            }
            {/* menu Category */}
            <div className='py-20'>
                <MenuCategory category={category}></MenuCategory>
            </div>
        </div>
    );
};

export default MenuSection;