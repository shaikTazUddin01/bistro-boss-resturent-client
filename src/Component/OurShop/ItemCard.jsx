import React from 'react';

const ItemCard = ({item}) => {
    const {image,recipe,name}=item
    return (
        <div>
            <div className="card card-compact bg-slate-200 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-xl font-medium">{name}</h2>
                    <p className='text-left'>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;