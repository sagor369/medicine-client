"use client";
import { Button } from "@/components/ui/button";
import { removeCart } from "@/redux/features/Products/ProductManagment";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { CreditCard, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const OrderSummery = () => {
  const { total, totalQuantity, products } = useAppSelector(
    (state) => state.product
  );
  const dispatch = useAppDispatch();
  const clearData = () => {
    console.log("hello")
    products.map((item) => {
      dispatch(removeCart(item.productId));
    });
  };
  return (
    <div className=" lg:w-80 w-full h-full bg-primary bg-opacity-35 rounded">
      <div className="px-6 py-4 space-y-10">
        <h1 className="text-3xl font-bold text-dark">Order Summary</h1>
        <p className="text-sm text-dark mt-2">
          Selected Items : {totalQuantity}
        </p>
        <p className="text-sm text-dark mt-2">Total Price : {total}</p>
        <p className="text-sm text-dark mt-2">
          Tax : {(total * 0.01).toFixed(2)}
        </p>
        <h3 className="text-xl font-semibold text-dark mt-4">
          Grand Total ${(total * 0.01 + total).toFixed(2)}
        </h3>
      </div>
      <div className="px-4 pb-6">
        {" "}
        <Button
          onClick={clearData}
          className="bg-red-500 px-3 py-2 text-white  mt-2 rounded-md w-full text-xs flex justify-between items-center mb-4"
        >
          <span>Clear Cart</span>
          <Trash2 className="inline" width={15} height={15} />
        </Button>
        <Link href={"/user/address"}>
          <Button className="bg-green-600 px-3 py-2 text-white  mt-2 rounded-md w-full text-xs flex justify-between items-center">
            <span>Proceed Checkout</span>
            <CreditCard className="inline" width={15} height={15} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSummery;
