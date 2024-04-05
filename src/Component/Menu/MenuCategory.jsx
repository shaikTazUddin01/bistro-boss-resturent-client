import React from 'react';
import useMenu from '../../Hooks/useMenu';
import OurMenu from '../Shared/OurMenu/OurMenu';

const MenuCategory = ({ category }) => {
    const [menu] = useMenu()
    console.log(menu)
    const item = menu.filter(menuItem => menuItem?.category == category)

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 px-10'>
                {
                    item?.map(item => <OurMenu key={item?._id} item={item}></OurMenu>)
                }
            </div>
            <div className='text-center'>
                <a href={`shop/${category}`}>
                <button className='border-black border-b-2 rounded-xl p-3 hover:bg-slate-500 mt-5'>Read More</button></a>
            </div>
        </div>
    );
};

export default MenuCategory;