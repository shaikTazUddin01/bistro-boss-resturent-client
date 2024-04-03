import React from 'react';

const OurMenu = ({item}) => {
    const {image,recipe,name,price}=item
    return (
        <div className='flex gap-2'>
            <div>
                <img src={image} alt="" className='w-[100px]'style={{borderRadius:"0px 200px 200px 200px"}} />
            </div>
            <div className='pr-2'>
                <p>{name}----------------------------</p>
                <p>{recipe}</p>
            </div>
            <div>
                <p className='text-yellow-600'>${price}</p>
            </div>
        </div>
    );
};

export default OurMenu;