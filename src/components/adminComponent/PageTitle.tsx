import React from 'react';

const PageTitle = ({title}: {title: string}) => {
    return (
        <div className='bg-gray-500 bg-opacity-25 py-6 flex justify-center m-b4'>
            <h2 className='font-semibold text-3xl font-sans'>{title}</h2>
        </div>
    );
};

export default PageTitle;