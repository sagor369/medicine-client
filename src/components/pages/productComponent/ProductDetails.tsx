import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductDetails = () => {
  return (
    <div className="grid grid-cols-2 gap-4 ">
      <div>
        <Image
          src={"https://via.placeholder.com/350?text=Sahed"}
          alt=""
          width={500}
          height={500}
          className="w-full h-full "
        />
      </div>
      <div>
        <h2 className="text-xl font-bold font-sans py-2">Name: Product Name</h2>
        <p className="text-lg text-slate-400 my-4">
          Discription : product discription heire
        </p>
        <p className="text-lg text-slate-400">Product Brand </p>
        <div className="line-through inline-block my-4">
          <p className="text-lg bg-orange-200  px-4 py-2">Price: $100</p>
        </div>
        <p className="text-xl font-sans font-semibold">Discount Price: $100</p>

        <div className="flex justify-between items-center">
          <div className="flex gap-2 my-4">
            <Button>
              <Plus className="size-6 " />{" "}
            </Button>
            <p className="text-2xl font-semibold px-4">1</p>
            <Button>
              <Minus className="size-6" />
            </Button>
          </div>
          <Button>Add To Cort</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
