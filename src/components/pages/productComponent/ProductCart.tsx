"use client"
import { Button } from "@/components/ui/button";
import { selectCurrentUser } from "@/redux/features/auth/AuthSlice";
import { AddToCart } from "@/redux/features/Products/ProductManagment";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TProduct } from "@/types/TProducts";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const ProductCart = ({ item }: { item: TProduct }) => {
  const user = useAppSelector(selectCurrentUser);
  const { products } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const addToCart = () => {
    const prodactData = {
      productId: item._id,
      name: item.name,
      price: item.price,
      quantity: 1,
    };
    if (!user) {
      redirect("/login");
    }
    dispatch(AddToCart(prodactData));
    toast.success("product add to cart")
  };
  const cartBtn = products.find((pro) => pro.productId  === item._id);
  const price = (item?.price - (item?.price * item?.discount) / 100).toFixed(2);
  return (
    <div className="border p-4 rounded bg-slate-200 relative">
      <div className="absolute top-2 left-2">
        <p className="bg-red-600  font-bold rounded-l-3xl rounded-r-md py-1 px-4 inline-block text-white">
          {item?.discount}% off
        </p>
      </div>
      <div>
        <Link href={`/products/${item?._id}`}>
          <Image
            className="w-full h-48 rounded"
            src={item?.photos[0]}
            alt=""
            width={500}
            height={500}
          />
        </Link>
      </div>
      <div className="h-56 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold font-sans py-2 ">{item?.name}</h2>
          <p className="h-20">{item.description}</p>
          <p className="py-2 text-slate-500">{item?.brand}</p>
        </div>
        <div className="flex justify-between items-end pt-2">
          <div>
            <p className="text-2xl text-orange-400 font-bold"> ${price} </p>
            <p className="line-through text-xl text-slate-500">${item.price}</p>
          </div>
          <div>
            {cartBtn ? (
              <Link href={`/products/${item._id}`}> 
              <Button>View Cart</Button>
              </Link>
            ) : (
              <Button onClick={addToCart}>Add to Cart</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
