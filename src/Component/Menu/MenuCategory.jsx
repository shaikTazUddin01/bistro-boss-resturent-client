import React from 'react';
import useMenu from '../../Hooks/useMenu';
import OurMenu from '../Shared/OurMenu/OurMenu';

const MenuCategory = ({category}) => {
    const[menu]=useMenu()
    console.log(menu)
    const item=menu.filter(menuItem=>menuItem?.category==category)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 px-10'>
                {
                    item?.map(item=><OurMenu key={item?._id} item={item}></OurMenu>)
                }
            </div>
    );
};

export default MenuCategory;