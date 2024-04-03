import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='md:w-[33%] mx-auto text-center'>
            <p className='text-yellow-600 text-xl pb-2'>---{subHeading}---</p>
            <h3 className='text-4xl uppercase font-semibold border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;