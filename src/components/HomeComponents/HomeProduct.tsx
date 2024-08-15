"use client"
import React from "react";
import PageTitle from "../adminComponent/PageTitle";
import ProductCart from "../pages/productComponent/ProductCart";
import { useGetProductQuery } from "@/redux/features/admin/ProductSlice";
import { TProduct } from "@/types/TProducts";

const HomeProduct = () => {
  const {data, isLoading} = useGetProductQuery([{name: 'limit', value: 6}])
  if(isLoading){
    return <div>Loading...</div>
  }
  
  return (
    <div className="py-6">
      <div className="flex justify-start">
        <PageTitle title="Product" />
      </div>
      <div className="grid grid-cols-3 gap-6 py-4">
        {data?.data?.result?.map((item:TProduct) => (
          <ProductCart item = {item} />
        ))}
      </div>
    </div>
  );
};

export default HomeProduct;
