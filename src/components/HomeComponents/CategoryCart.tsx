import Image from 'next/image';
import React from 'react';

const CategoryCart = ({name}:{name: string}) => {
    const im = name.split("")[0]
    return (
        <div>
            <Image className='w-full h-48 ' src={`https://via.placeholder.com/350?text=${im}`} alt='' width={500} height={500}/>
            <h2 className='text-2xl font-bold font-sans text-slate-500 uppercase bg-primary py-2 text-center'> {name}</h2>
        </div>
    );
};

export default CategoryCart;