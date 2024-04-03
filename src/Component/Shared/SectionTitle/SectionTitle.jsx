import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='md:w-[33%] mx-auto'>
            <p className='text-yellow-600 text-xl pb-2'>---{subHeading}---</p>
            <h3 className='text-4xl font-semibold border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;