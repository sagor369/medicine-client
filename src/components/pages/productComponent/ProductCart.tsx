import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCart = () => {
  return (
    <div className="border p-4 rounded bg-slate-200 relative">
      <div className="absolute top-2 left-2">
        <p className="bg-red-600  font-bold rounded-l-3xl rounded-r-md py-1 px-4 inline-block text-white">
          10% off
        </p>
      </div>
      <div>
        <Link href={`/products/${1}`}>

        <Image
          className="w-full h-48 rounded"
          src={"https://via.placeholder.com/350?text=Sahed"}
          alt=""
          width={500}
          height={500}
        />
        </Link>
      </div>
      <div className="h-56 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold font-sans ">{"Sahdiul Islam"}</h2>
          <p>{"Discription "}</p>
          <p>Brand name</p>
        </div>
        <div className="flex justify-between items-end pt-2">
          <div>
            <p className="text-2xl text-orange-400 font-bold"> $50 </p>
            <p className="line-through text-xl text-slate-500">$60</p>
          </div>
          <div>
            <Button>Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
