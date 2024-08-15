"use client"
import { useGetProductQuery } from '@/redux/features/admin/ProductSlice';
import { TProduct } from '@/types/TProducts';
import React from 'react';
import ProductCart from './ProductCart';

const Products = () => {
    const {data, isLoading} = useGetProductQuery(undefined)
    if(isLoading){
        return <div>Loading....</div>
    }
    return (
        <div>
            <div className="grid grid-cols-3 gap-6 py-4">
          {data?.data?.result?.map((item:TProduct) => (
            <ProductCart item = {item} />
          ))}
        </div>
        </div>
    );
};

export default Products;