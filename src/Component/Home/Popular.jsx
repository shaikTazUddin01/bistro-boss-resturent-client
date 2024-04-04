import  { useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import OurMenu from '../Shared/OurMenu/OurMenu';
import useMenu from '../../Hooks/useMenu';

const Popular = () => {
 const [menu]=useMenu()
    const popular=menu?.filter(item=>item?.category==="popular")
    
    return (
        <div>
            <div className='mb-10'>
            <SectionTitle heading={'from our menu'} subHeading={'check it out'}></SectionTitle>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 px-10'>
                {
                    popular?.map(item=><OurMenu key={item?._id} item={item}></OurMenu>)
                }
            </div>
        </div>
    );
};

export default Popular;