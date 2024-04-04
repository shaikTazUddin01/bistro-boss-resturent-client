import img2 from '../../assets/home/featured.jpg'
import SectionTitle from '../Shared/SectionTitle/SectionTitle';

const FeaturedMenu = () => {
    return (
        <div style={{backgroundImage:`url(${img2})`}} className='bg-cover  mt-10 mb-20 bg-fixed'>
            <div className='bg-[#1a1a1ab3] bg-cover py-20 mt-10'>
            <div className='text-white'>
                <SectionTitle heading={'From Our Menu'} subHeading={'Check it out'}></SectionTitle>
            </div>
            <div className='flex items-center justify-center w-[900px] mx-auto gap-10 pt-16'>
                <div className='w-1/2'>
                    <img src={img2} alt=""/>
                </div>
                <div className='text-white w-1/2'>
                    <p className='text-xl'>March 20,20023</p>
                    <p className='text-xl'>Where can i get some?</p>
                    <p className='text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, id aliquam? Assumenda nisi consequuntur ex alias harum doloremque recusandae corrupti?</p>
                    <button className='border-b-2 rounded-xl p-3 hover:bg-slate-500 mt-5'>Read More</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default FeaturedMenu;